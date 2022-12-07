import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const result = await createDeliveryUseCase.execute({
      item_name,
      id_client: request.id_client,
    });

    return response.status(201).json(result);
  }
}

export { CreateDeliveryController };
