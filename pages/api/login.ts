import type { NextApiRequest, NextApiResponse } from "next";
import { DefaultMsgResponse } from "../../types/DefaultMsgResponse";
import { connectToDB } from "../../middlewares/databases";
import { UserModel } from "../../models/UserModel";
import * as CryptoJs from "crypto-js";
import * as jwt from "jsonwebtoken";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<DefaultMsgResponse | object>
) => {
  try {
    const { MY_SECRET_KEY } = process.env;
    if (!MY_SECRET_KEY) {
      return res.status(500).json({ message: "Erro na geração de chave.2" });
    }

    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ error: "O método HTTP informado não existe" });
    }

    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).json({ error: "Favor informar usuário e senha" });
    }

    const user = await UserModel.findOne({ email: login });

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    const bytes = CryptoJs.AES.decrypt(user.password, MY_SECRET_KEY);
    const savedPassword = bytes.toString(CryptoJs.enc.Utf8);

    if (password !== savedPassword) {
      return res.status(500).json({ message: "Usuário ou senha inválidos." });
    }

    const token = jwt.sign({ _id: user._id }, MY_SECRET_KEY);

    const result = {
      token,
      name: user.name,
      email: user.email,
    };

    return res.status(200).json(result);
  } catch (e: any) {
    console.log("Ocorreu um erro ao efetuar o Login:", e);
    res
      .status(500)
      .json({ error: "Ocorreu um erro ao efetuar o login. Tente novamente." });
  }
};
export default connectToDB(handler);
