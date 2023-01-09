import type { NextApiRequest, NextApiResponse } from "next";
import { DefaultMsgResponse } from "../../types/DefaultMsgResponse";
import { User } from "../../types/User";
import { connectToDB } from "../../middlewares/databases";
import { UserModel } from "../../models/UserModel";
import * as CryptoJs from "crypto-js";
import { logger } from "services/shared/logger-service";

const handler = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "O método HTTP informado não existe" });
    }

    const { name, password, email } = req.body as User;

    if (!name || name.trim().length < 2) {
      return res.status(400).json({ error: "Nome inválido" });
    }

    const email_regexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    if (!email || !email_regexp.test(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }

    // @ts-ignore
    if (!password || !password.includes("@")) {
      return res.status(400).json({ error: "Senha inválida" });
    }

    const sameEmailUser = await UserModel.findOne({ email });
    if (sameEmailUser) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    const { MY_SECRET_KEY } = process.env;
    if (!MY_SECRET_KEY) {
      return res.status(500).json({ message: "Erro na geração de chave.x" });
    }
    const encrypted = CryptoJs.AES.encrypt(password, MY_SECRET_KEY);
    const user = { name, email, password: encrypted };
    await UserModel.create(user);

    return res.status(200).json({ message: "Cadastrado com sucesso" });
  } catch (e: any) {
    logger("error", "back", `Erro ao cadastrar usuário: ${e}`);
    res.status(500).json({
      error: "Ocorreu um erro ao cadastrar usuário. Tente novamente.",
    });
  }
};

export default connectToDB(handler);
