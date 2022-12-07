import { ClientRepository } from "../../repositories/ClientRepository";
import { IAuthenticateClientDTO } from "../../repositories/dtos/IAutheticateClientDTO";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClientDTO) {
    const clientRepository = new ClientRepository();

    const clientExists = await clientRepository.findByUsername(username);

    if (!clientExists) {
      throw new Error("Username or Password invalid!");
    }

    const passwordMatch = await compare(password, clientExists.password);

    if (!passwordMatch) {
      throw new Error("Username or Password invalid!");
    }

    const token = sign({}, "4983a0ab83ed86e0e7213c8783940193", {
      subject: clientExists.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateClientUseCase };
