import { ItemController } from "../controller/item-controller";
import { ItemModel } from "../models/item-model";
import { ItemRepo } from "../repos/item-repo";
import { ItemService } from "../services/item-service";

class ItemFactory {
  static getInstance() {
    const itemRepo = new ItemRepo(ItemModel);
    const itemService = new ItemService(itemRepo);
    const itemController = new ItemController(itemService);

    return itemController;
  }
}
export const itemModule = ItemFactory.getInstance();
