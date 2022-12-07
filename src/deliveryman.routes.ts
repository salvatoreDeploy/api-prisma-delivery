import { Router } from "express";
import { ensureAuthenticateDeliveryman } from "./middleware/ensureAuthenticateDeliryman";
import { AuthenticateDeliverymanController } from "./useCase/authenticateDeliveryman/AuthenticateDelieverymanController";

import { CreateDeliverymanController } from "./useCase/createDeliveryman/createDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./useCase/findAllDeliveriesDeliveryman/findAllDeliveriesDeliverymanController";

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

const deliverymanRoutes = Router();

deliverymanRoutes.post(
  "/createdeliveryman",
  createDeliverymanController.handle
);
deliverymanRoutes.post(
  "/authenticate",
  authenticateDeliverymanController.handle
);

deliverymanRoutes.get(
  "/showDeliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

export { deliverymanRoutes };
