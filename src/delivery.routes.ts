import { Router } from "express";
import { ensureAuthenticateClient } from "./middleware/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middleware/ensureAuthenticateDeliryman";
import { CreateDeliveryController } from "./useCase/createDelivery/createDeliveryController";
import { FindAllAvailableController } from "./useCase/findAllWithoutEndDate/FindAllAvailableController";
import { UpadateDeliverymanController } from "./useCase/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./useCase/UpdateEndDate/UpdateEndDateController";

const createDeliveryController = new CreateDeliveryController();
const findAllAvailable = new FindAllAvailableController();
const updateDeliverymanController = new UpadateDeliverymanController();
const updateEndDate = new UpdateEndDateController();

const deliveryRouter = Router();

deliveryRouter.post(
  "/createdelivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

deliveryRouter.put(
  "/updatedeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

deliveryRouter.get(
  "/findallavailable",
  ensureAuthenticateDeliveryman,
  findAllAvailable.handle
);

deliveryRouter.put(
  "/updateenddate/:id",
  ensureAuthenticateDeliveryman,
  updateEndDate.handle
);

export { deliveryRouter };
