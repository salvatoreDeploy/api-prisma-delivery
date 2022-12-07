import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { messages } from "../utils/messages";

interface IPayLoad {
  sub: string;
}

function ensureAuthenticateClient(
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
      "4983a0ab83ed86e0e7213c8783940193"
    ) as IPayLoad;

    //console.log(sub);

    request.id_client = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: messages.error.tokenInvalid,
    });
  }
}

export { ensureAuthenticateClient };
