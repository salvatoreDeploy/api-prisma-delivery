import { Router } from "express";
import { ensureAuthenticateClient } from "./middleware/ensureAuthenticateClient";
import { AuthenticateClientController } from "./useCase/authenticateClient/authenticateClientController";
import { CreateClientController } from "./useCase/createClient/createClientController";
import { FindAllDeliveriesController } from "./useCase/findAllDeliveries/FindAllDeliveriesController";

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

const clientRoutes = Router();

clientRoutes.post("/createclient", createClientController.handle);
clientRoutes.post("/authenticate", authenticateClientController.handle);
clientRoutes.get(
  "/showDeliveries",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

export { clientRoutes };
