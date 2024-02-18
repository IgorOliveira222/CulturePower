import { CreateItemDto } from "../dtos/create-item-Dto";
import { UpdateItemDTO } from "../dtos/update-item-DTO";
import { Item } from "../models/item-model";

export interface IItemRepo {
  createItem(itemData: CreateItemDto): Promise<Item | null>;
  getAll(): Promise<Array<Item>>;
  getItemById(id: string): Promise<Item | null>;
  updateItem(id: string, itemData: UpdateItemDTO): Promise<Item | null>;
}
