import { ClientRepository } from "../../repositories/ClientRepository";

class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    const clientRepository = new ClientRepository();

    const deliveries = await clientRepository.findAllDeliveries(id_client);

    return deliveries;
  }
}

export { FindAllDeliveriesUseCase };
