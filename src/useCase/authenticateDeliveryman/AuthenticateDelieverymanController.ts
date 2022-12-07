import { Request, Response } from "express";
import { AutehticateDeliverymanUseCase } from "./AutenticateDeliverymanUseCase";

class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase = new AutehticateDeliverymanUseCase();

    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.status(200).json(result);
  }
}

export { AuthenticateDeliverymanController };
