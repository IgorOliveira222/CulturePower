import { Router } from "express";
import { authModule } from "../factories/auth-factory";
import { AuthMiddleware } from "../../../authentiction/authMiddleware";
export const authRoutes = Router();

authRoutes.post("/sign-in", authModule.signIn.bind(authModule));
authRoutes.post("/sign-up", authModule.signUpUser.bind(authModule));
authRoutes.get(
  "/user-logged",
  AuthMiddleware.handler,
  authModule.loggedUser.bind(authModule)
);
