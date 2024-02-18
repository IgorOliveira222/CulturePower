import { CreateItemDto } from "../dtos/create-item-Dto";
import { UpdateItemDTO } from "../dtos/update-item-DTO";
import { Item } from "../models/item-model";

export interface IItemService {
  createItem(itemData: CreateItemDto): Promise<Item>;
  getAll(): Promise<Array<Item>>;
  getItemById(id: string): Promise<Item>;
  updateItem(id: string, itemData: UpdateItemDTO): Promise<Item>;
}
