import { Request, Response } from "express";
import { IItemController } from "./item-controller-interface";
import { IItemService } from "../services/item-service-interface";
import { createItemValidator } from "../utils/createItemValidator";

export class ItemController implements IItemController {
  constructor(private itemService: IItemService) {}

  async createItem(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      await createItemValidator.validate(body, { abortEarly: true });
      const newItem = await this.itemService.createItem(body);
      res.status(201).json(newItem);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const items = await this.itemService.getAll();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getItemById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const item = await this.itemService.getItemById(id);
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateItem(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { body } = req;
      const newItem = await this.itemService.updateItem(id, body);
      res.status(200).json(newItem);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
