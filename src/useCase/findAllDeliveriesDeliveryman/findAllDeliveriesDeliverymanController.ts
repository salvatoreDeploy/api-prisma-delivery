import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./findAllDeliveriesDeliverymanUseCase";

class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const finAllDeliveriesDeliveryman =
      new FindAllDeliveriesDeliverymanUseCase();

    const { id_delivery } = request;

    const result = await finAllDeliveriesDeliveryman.execute(id_delivery);

    return response.status(200).json(result);
  }
}

export { FindAllDeliveriesDeliverymanController };
