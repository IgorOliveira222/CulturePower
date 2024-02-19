import { isValidObjectId } from "mongoose";
import { Item } from "../models/item-model";
import { UpdateItemDTO } from "../dtos/update-item-DTO";
import { CreateItemDto } from "../dtos/create-item-Dto";
import { IItemRepo } from "../repos/item-repo-interface";
import { IItemService } from "./item-service-interface";

export class ItemService implements IItemService {
  constructor(private itemRepo: IItemRepo) {}

  async createItem(itemData: CreateItemDto): Promise<Item> {
    const newItem = await this.itemRepo.createItem(itemData);

    if (!newItem) throw new Error("Item not created");

    return newItem;
  }

  async getAll(): Promise<Item[]> {
    const items = await this.itemRepo.getAll();

    if (!items || items.length === 0) {
      throw new Error("Item not found");
    }
    return items;
  }

  async getItemById(id: string): Promise<Item> {
    if (!isValidObjectId(id)) throw new Error("Item not found!");
    const item = await this.itemRepo.getItemById(id);
    if (!item) throw new Error("Item not found");
    return item;
  }

  async updateItem(id: string, itemData: UpdateItemDTO): Promise<Item> {
    if (!isValidObjectId(id)) throw new Error("Item not found!");
    const item = await this.itemRepo.updateItem(id, itemData);
    if (!item) throw new Error("Item not saved in database");
    return item;
  }
}
