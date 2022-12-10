import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import type {DefaultMsgResponse} from "../types/DefaultMsgResponse";
import * as mongoose from "mongoose";

export const connectToDB = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
  let isMongoConnected = mongoose.connections[0].readyState === 1;
  console.log('Mongo está conectado? ', isMongoConnected ? "sim" : "não")
  if (isMongoConnected) {
    return handler(req, res);
  }

  const {DB_CONNECTION_STRING} = process.env
  if (!DB_CONNECTION_STRING) {
    return res.status(500).json({message: "Erro na conexão com o servidor."})
  }

  mongoose.connection.on('connected', () => console.log('Conectado com sucesso'));
  mongoose.connection.on('error', (error) => console.log('Ocorreu erro ao conectar com o banco de dados:', error));
  await mongoose.connect(DB_CONNECTION_STRING)
  return handler(req, res);
}

