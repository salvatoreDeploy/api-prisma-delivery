import { DeliverymanRepository } from "../../repositories/DeliverymanRepository";

class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_delivery: string) {
    const deliverymanRepository = new DeliverymanRepository();

    const deliveries = await deliverymanRepository.findAllDeliveries(
      id_delivery
    );

    return deliveries;
  }
}

export { FindAllDeliveriesDeliverymanUseCase };
