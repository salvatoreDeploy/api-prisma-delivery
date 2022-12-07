import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { DeliverymanRepository } from "../../repositories/DeliverymanRepository";
import { IAuthenticateDeliverymanDTO } from "../../repositories/dtos/IAuthenticateDeliverymanDTO";

class AutehticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliverymanDTO) {
    const deliverymanRepository = new DeliverymanRepository();

    const deliverymanExists = await deliverymanRepository.findByUsername(
      username
    );

    if (!deliverymanExists) {
      throw new Error("Username or Password invalid!");
    }

    const passwordMatch = compare(password, deliverymanExists.password);

    if (!passwordMatch) {
      throw new Error("Username or Password invalid!");
    }

    const token = sign({}, "7108537956afa2a526f96cc9da7b0c36", {
      subject: deliverymanExists.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AutehticateDeliverymanUseCase };
