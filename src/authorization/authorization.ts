import { NextFunction, Request, Response } from "express";
import { User } from "../modules/user/models/user-model";
import jwt from "jsonwebtoken";

export class Authorization {
  static async authAdmin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { authorization } = req.headers;

    try {
      if (!authorization) {
        throw new Error("Invalid authorization");
      }
      const [, token] = authorization.split(" ");

      const decode: any = jwt.verify(token, process.env.JWT_SECRET as string);
      const user: User = { ...decode._doc };
      if (user.typeUser !== "admin")
        throw new Error(`${user.typeUser} not permission to access`);
      return next();
    } catch (erro: any) {
      res
        .status(401)
        .json({ message: "access unauthorization", error: erro.message });
    }
  }
}
