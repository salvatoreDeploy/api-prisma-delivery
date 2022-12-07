import { hash } from "bcrypt";
import { DeliverymanRepository } from "../../repositories/DeliverymanRepository";

class CreateDeliverymanUseCase {
  async execute({ username, password }: ICReateDeliverymanDTO) {
    const deliverymanRepository = new DeliverymanRepository();

    const deliverymanExists = await deliverymanRepository.findByUsername(
      username
    );

    if (deliverymanExists) {
      throw new Error("Deliveryman already exists");
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await deliverymanRepository.create({
      username,
      password: hashPassword,
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
