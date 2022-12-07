import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

class UpadateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_delivery } = request;
    const { id } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const result = await updateDeliverymanUseCase.execute({
      id_delivery: id,
      id_deliveryman: id_delivery,
    });

    return response.status(201).json(result);
  }
}

export { UpadateDeliverymanController };
