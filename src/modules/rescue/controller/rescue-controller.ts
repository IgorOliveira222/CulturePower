import { Request, Response } from "express";
import { addRescueTransactioValidator } from "../utils/addRescueTransactioValidator";
import { IRescueProductService } from "../services/rescue-services-interface";
import { IRescueProductController } from "./rescue-controller-interface";

export class RescueProductController implements IRescueProductController {
  constructor(private rescueService: IRescueProductService) {}

  async addRescueTransaction(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      await addRescueTransactioValidator.validate(body, { abortEarly: true });
      const rescueTransaction = await this.rescueService.addRescueTransaction(
        body
      );
      res.status(201).json(rescueTransaction);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  async getAllRescueTransfer(req: Request, res: Response): Promise<void> {
    try {
      const rescueTransfer = await this.rescueService.getAllRescueTransaction();
      res.status(200).json(rescueTransfer);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
