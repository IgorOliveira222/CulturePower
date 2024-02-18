import { Router } from "express";
import { userModule } from "../factories/user-factories";
import { Authorization } from "../../../authorization/authorization";
import { AuthMiddleware } from "../../../authentiction/authMiddleware";

export const userRoutes = Router();

userRoutes.get(
  "/user/:id",
  AuthMiddleware.handler,
  userModule.getUserById.bind(userModule)
);

userRoutes.put(
  "/user/update/:id",
  AuthMiddleware.handler,
  userModule.updateUser.bind(userModule)
);

userRoutes.get(
  "/users",
  AuthMiddleware.handler,
  Authorization.authAdmin,
  userModule.getAll.bind(userModule)
);

userRoutes.put(
  "/user/delete/:id",
  AuthMiddleware.handler,
  Authorization.authAdmin,
  userModule.softDelete.bind(userModule)
);

userRoutes.put(
  "/insert-gems/:id",
  AuthMiddleware.handler,
  Authorization.authAdmin,
  userModule.insertGems.bind(userModule)
);
