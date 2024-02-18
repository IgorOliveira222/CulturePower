import { Request, Response } from "express";

export interface IUserController {
  getAll(req: Request, res: Response): Promise<void>;
  getUserById(req: Request, res: Response): Promise<void>;
  softDelete(req: Request, res: Response): Promise<void>;
  updateUser(req: Request, res: Response): Promise<void>;
  insertGems(req: Request, res: Response): Promise<void>;
}
