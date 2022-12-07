import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClientUserCase = new CreateClientUseCase();

    const result = await createClientUserCase.execute({ username, password });

    return response.status(201).json(result);
  }
}

export { CreateClientController };
