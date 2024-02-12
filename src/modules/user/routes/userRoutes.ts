import { Request, Response, Router } from "express";
import { AuthMiddleware } from "../../../authMiddleware";

export const userRoutes = Router();

userRoutes.get(
  "/users",
  AuthMiddleware.handler,
  (req: Request, res: Response) => {
    console.log("passou do middle");
    res.status(200).json({ mensage: "Usuario Autorizado" });
  }
);
