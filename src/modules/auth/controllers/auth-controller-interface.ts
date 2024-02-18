import { Request, Response } from "express";

export interface IAuthController {
  signIn(req: Request, res: Response): Promise<void>;
  signUpUser(req: Request, res: Response): Promise<void>;
  loggedUser(req: Request, res: Response): Promise<void>;
}
