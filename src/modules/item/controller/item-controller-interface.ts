import { Request, Response } from "express";

export interface IItemController {
  createItem(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  getItemById(req: Request, res: Response): Promise<void>;
  updateItem(req: Request, res: Response): Promise<void>;
}
