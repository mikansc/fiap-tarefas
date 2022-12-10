import type { NextApiRequest, NextApiResponse } from "next";
import { DefaultMsgResponse } from "../../types/DefaultMsgResponse";
import { connectToDB } from "../../middlewares/databases";
import { UserModel } from "../../models/UserModel";
import * as CryptoJs from "crypto-js";
import * as jwt from "jsonwebtoken";
import { TaskModel } from "../../models/TaskModel";
import { jwtValidator } from "../../middlewares/jwt";

const handler = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse | object>) => {
  try {
    const userId = req.body?.userId || req.query.userId;

    switch (req.method) {
      case "GET":
        return await getTasks(req, res, userId);
      case "POST":
        break;
      case "PUT":
        break;
      case "DELETE":
        break;
      default:
        return res.status(405).json({ error: "O método HTTP informado não existe" });
    }

    //
  } catch (e: any) {
    console.log("Ocorreu um erro ao utilizar o caminho de tarefas:", e);
    res.status(500).json({
      error: "Ocorreu um erro ao utilizar o caminho de tarefas. Tente novamente.",
    });
  }
};

const getTasks = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse | object>, userId: string) => {
  const result = await TaskModel.find({ userId });
  res.status(200).json(result);
};

export default connectToDB(jwtValidator(handler));
