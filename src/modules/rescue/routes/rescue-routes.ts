import { Router } from "express";
import { rescueProductModule } from "../factories/rescue-factory";
import { AuthMiddleware } from "../../../authentiction/authMiddleware";

export const rescueProductRoutes = Router();

rescueProductRoutes.post(
  "/rescue-product",
  AuthMiddleware.handler,
  rescueProductModule.addRescueTransaction.bind(rescueProductModule)
);
rescueProductRoutes.get(
  "/transfer",
  AuthMiddleware.handler,
  rescueProductModule.getAllRescueTransfer.bind(rescueProductModule)
);
