import { DeliveryRepository } from "../../repositories/DeliveryRepository";
import { IUpdateDeliverymanDTO } from "../../repositories/dtos/IUpdateDeliverymanDTO";

class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliverymanDTO) {
    const deliveryRepository = new DeliveryRepository();

    const updateDeliveryman = await deliveryRepository.UpdateDeliveryman({
      id_delivery,
      id_deliveryman: id_deliveryman,
    });

    return updateDeliveryman;
  }
}

export { UpdateDeliverymanUseCase };
