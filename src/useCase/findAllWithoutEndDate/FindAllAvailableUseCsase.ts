import { DeliveryRepository } from "../../repositories/DeliveryRepository";

class FindAllAvailableUseCase {
  async execute() {
    const deliveryRepository = new DeliveryRepository();

    const delivery = await deliveryRepository.findAllAvailable();

    return delivery;
  }
}

export { FindAllAvailableUseCase };
