import { Router } from "express";
import { AuthMiddleware } from "../../../authentiction/authMiddleware";
import { Authorization } from "../../../authorization/authorization";
import { itemModule } from "../factories/item-factories";

export const itemRoutes = Router();

itemRoutes.post(
  "/create-item",
  AuthMiddleware.handler,
  Authorization.authAdmin,
  itemModule.createItem.bind(itemModule)
);

itemRoutes.get(
  "/items",
  AuthMiddleware.handler,
  itemModule.getAll.bind(itemModule)
);

itemRoutes.get(
  "/item/:id",
  AuthMiddleware.handler,
  itemModule.getItemById.bind(itemModule)
);

itemRoutes.put(
  "/item/update/:id",
  AuthMiddleware.handler,
  Authorization.authAdmin,
  itemModule.updateItem.bind(itemModule)
);
