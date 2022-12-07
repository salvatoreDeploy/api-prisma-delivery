import { prisma } from "../database/prismaClient";

class ClientRepository {
  public async findByUsername(username: string) {
    const clientExists = await prisma.client.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    return clientExists;
  }

  public async create({ username, password }: ICreateClientDTO) {
    const client = await prisma.client.create({
      data: {
        username,
        password,
      },
    });

    return client;
  }

  public async findAllDeliveries(id_client: string) {
    const deliveries = await prisma.client.findMany({
      where: {
        id: id_client,
      },
      select: {
        id: true,
        username: true,
        Deliveries: true,
      },
    });

    return deliveries;
  }
}

export { ClientRepository };
