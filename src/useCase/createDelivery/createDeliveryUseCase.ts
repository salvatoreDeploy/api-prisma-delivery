import { DeliveryRepository } from "../../repositories/DeliveryRepository";
import { ICreateDeliveryDTO } from "../../repositories/dtos/ICreateDeliveryDTO";

class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: ICreateDeliveryDTO) {
    const deliveryRepository = new DeliveryRepository();

    const delivery = deliveryRepository.create({
      id_client,
      item_name,
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
