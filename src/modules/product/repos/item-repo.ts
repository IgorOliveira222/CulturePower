import { Model } from "mongoose";
import { Item } from "../models/item-model";
import { UpdateItemDTO } from "../dtos/update-item-DTO";
import { CreateItemDto } from "../dtos/create-item-Dto";
import { IItemRepo } from "./item-repo-interface";

export class ItemRepo implements IItemRepo {
  constructor(private itemModel: Model<Item>) {}

  async createItem(itemData: CreateItemDto): Promise<Item | null> {
    const newItem = await this.itemModel.create(itemData);
    return newItem;
  }

  async getAll(): Promise<Item[]> {
    const items = await this.itemModel.find({ deletedAt: null });
    return items;
  }

  async getItemById(id: string): Promise<Item | null> {
    const item = await this.itemModel.findById(id);
    return item;
  }

  async updateItem(id: string, itemData: UpdateItemDTO): Promise<Item | null> {
    const item = await this.itemModel.findByIdAndUpdate(id, itemData, {
      new: true,
    });
    return item;
  }
}
