import { prisma } from "../database/prismaClient";
import { ICreateDeliveryDTO } from "./dtos/ICreateDeliveryDTO";
import { IUpdateDeliverymanDTO } from "./dtos/IUpdateDeliverymanDTO";
import { IUpdateEndDateDeliverymanDTO } from "./dtos/IUpdateEndDateDeliverieDTO";

class DeliveryRepository {
  public async create({ id_client, item_name }: ICreateDeliveryDTO) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }

  public async findAllAvailable() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        available: true,
      },
    });

    return deliveries;
  }

  public async UpdateDeliveryman({
    id_delivery,
    id_deliveryman,
  }: IUpdateDeliverymanDTO) {
    const deliveries = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_delivery: id_deliveryman,
        available: false,
      },
    });

    return deliveries;
  }

  public async UpdateEndDateDeliverie({
    id_delivery,
    id,
  }: IUpdateEndDateDeliverymanDTO) {
    const deliverie = await prisma.deliveries.updateMany({
      where: {
        id,
        id_delivery,
      },
      data: {
        end_at: new Date(),
      },
    });
    return deliverie;
  }
}

export { DeliveryRepository };
