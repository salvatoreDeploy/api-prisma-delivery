import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { deliveryRouter } from "./delivery.routes";
import { deliverymanRoutes } from "./deliveryman.routes";

const router = Router();

/* Rotas Cliente */

router.use("/client", clientRoutes);
router.use("/deliveryman", deliverymanRoutes);
router.use("/delivery", deliveryRouter);

/* Rotas Entregador */

//outer.use("/deliveryman");

/* Rotas Entregas */

//router.use("/delivery");

export { router };
