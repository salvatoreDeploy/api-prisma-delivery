import { hash } from "bcrypt";
import { prisma } from "../../database/prismaClient";
import { ClientRepository } from "../../repositories/ClientRepository";

class CreateClientUseCase {
  async execute({ username, password }: ICreateClientDTO) {
    const clientRepository = new ClientRepository();

    // Validar se o clienbte existe

    const clientExists = await clientRepository.findByUsername(username);

    if (!clientExists) {
      throw new Error("Client already exists");
    }

    //Criptografar senha do cliente

    const hashPassword = await hash(password, 10);

    // Persisencia dos dados

    const client = await clientRepository.create({
      username,
      password: hashPassword,
    });

    return client;
  }
}

export { CreateClientUseCase };
