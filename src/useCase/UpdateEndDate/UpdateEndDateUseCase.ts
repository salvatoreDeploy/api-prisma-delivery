import { request } from "express";
import { DeliveryRepository } from "../../repositories/DeliveryRepository";
import { IUpdateEndDateDeliverymanDTO } from "../../repositories/dtos/IUpdateEndDateDeliverieDTO";

class UpdateEndDateUseCase {
  async execute({ id, id_delivery }: IUpdateEndDateDeliverymanDTO) {
    const deliveryRepository = new DeliveryRepository();

    const deliverie = await deliveryRepository.UpdateEndDateDeliverie({
      id,
      id_delivery,
    });

    return deliverie;
  }
}

export { UpdateEndDateUseCase };
