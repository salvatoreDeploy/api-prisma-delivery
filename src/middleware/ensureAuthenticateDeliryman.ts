import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { messages } from "../utils/messages";

interface IPayLoad {
  sub: string;
}

function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: messages.error.emptyHeader,
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "7108537956afa2a526f96cc9da7b0c36"
    ) as IPayLoad;

    request.id_delivery = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: messages.error.tokenInvalid,
    });
  }
}

export { ensureAuthenticateDeliveryman };
