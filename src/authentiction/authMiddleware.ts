import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import "dotenv/config";

export class AuthMiddleware {
  static async handler(req: Request, res: Response, next: NextFunction) {
    const { headers }: any = req;
    try {
      if (!headers.authorization) throw new Error("User not logged");
      const [, token] = headers.authorization.split(" ");
      jwt.verify(token, process.env.JWT_SECRET as string);
      return next();
    } catch (error: any) {
      res.status(401).json({ error: error.message, mensage: "access denied" });
    }
  }
}
