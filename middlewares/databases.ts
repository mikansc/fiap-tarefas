import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { DefaultMsgResponse } from "../types/DefaultMsgResponse";
import * as mongoose from "mongoose";
import { logger } from "services/shared/logger-service";

export const connectToDB = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
  let isMongoConnected = mongoose.connections[0].readyState === 1;
  logger("warn", "db", `Mongo está conectado? ${isMongoConnected ? "sim" : "não"}`);
  if (isMongoConnected) {
    return handler(req, res);
  }

  const { DB_CONNECTION_STRING } = process.env;
  if (!DB_CONNECTION_STRING) {
    return res.status(500).json({ message: "Erro na conexão com o servidor." });
  }

  mongoose.connection.on("connected", () => logger("info", "db", "Conectado ao banco de dados."));
  mongoose.connection.on("error", (error) => logger("error", "db", `Erro ao conectar ao banco de dados: ${error}`));
  await mongoose.connect(DB_CONNECTION_STRING);
  return handler(req, res);
};
