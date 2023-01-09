import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { DefaultMsgResponse } from "../types/DefaultMsgResponse";
import * as jwt from "jsonwebtoken";
import { logger } from "services/shared/logger-service";

export const jwtValidator = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
  const { MY_SECRET_KEY } = process.env;
  if (!MY_SECRET_KEY) {
    return res.status(500).json({ error: "Erro na conexão com o servidor." });
  }

  const error = "Não foi possível validar o token de acesso.";

  if (!req || !req.headers) {
    return res.status(401).json({ error });
  }

  if (req.method !== "OPTION") {
    const authorization = req.headers["authorization"];

    if (!authorization) {
      return res.status(401).json({ error });
    }

    const token = authorization.substring(7);
    if (!token) {
      return res.status(401).json({ error });
    }

    try {
      const decoded = jwt.verify(token, MY_SECRET_KEY) as jwt.JwtPayload;
      if (!decoded) {
        return res.status(401).json({ error });
      }

      if (req.body) {
        req.body.userId = decoded._id;
      } else if (req.query) {
        req.query.userId = decoded._id;
      }
    } catch (e) {
      logger("error", "back", `Erro ao validar token: ${e}`);
      res.status(500).json({
        error: "Não foi possível validar o token de acesso. Tente novamente.",
      });
    }
  }

  return handler(req, res);
};
