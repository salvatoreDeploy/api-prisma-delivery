import { prisma } from "../database/prismaClient";

class DeliverymanRepository {
  public async findByUsername(username: string) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    return deliverymanExists;
  }

  public async create({ username, password }: ICReateDeliverymanDTO) {
    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password,
      },
    });

    return deliveryman;
  }

  public async findAllDeliveries(id_delivery: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_delivery,
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

export { DeliverymanRepository };
