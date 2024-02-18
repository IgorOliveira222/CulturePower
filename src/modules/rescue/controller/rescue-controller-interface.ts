import { Request, Response } from "express";

export interface IRescueProductController {
  addRescueTransaction(req: Request, res: Response): Promise<void>;
  getAllRescueTransfer(req: Request, res: Response): Promise<void>;
}
