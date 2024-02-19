import { isValidObjectId } from "mongoose";
import { RescueProductDTO } from "../dtos/rescue-product-DTO";
import { RescueProduct } from "../models/rescue-model";
import { IRescueRepo } from "../repo/rescue-repo-interface";
import { IRescueProductService } from "./rescue-services-interface";
import { UserModel } from "../../user/models/user-model";
import { ItemModel } from "../../item/models/item-model";

export class RescueProductService implements IRescueProductService {
  constructor(private rescueRepo: IRescueRepo) {}

  async addRescueTransaction(
    dataTransaction: RescueProductDTO
  ): Promise<RescueProduct> {
    const { userID, productID } = dataTransaction;
    if (!(isValidObjectId(userID) && isValidObjectId(productID)))
      throw new Error("userID or productID is not found!");

    const user = await UserModel.findById(userID);
    const product = await ItemModel.findById(productID);

    if (!user) throw new Error("user not found");
    if (!product) throw new Error("product not found");
    if (user.gems < product.value) throw new Error("User has no Gems!");
    user.gems -= product.value;
    await user.save();
    const rescueFull = {
      ...dataTransaction,
    };

    rescueFull.nameUser = user.name;
    rescueFull.nameProduct = product.name;
    rescueFull.productValue = product.value;

    const rescueTransaction = await this.rescueRepo.addRescueTransaction(
      rescueFull
    );
    if (!rescueTransaction) throw new Error("Error register transaction");

    return rescueTransaction;
  }

  async getAllRescueTransaction(): Promise<RescueProduct[]> {
    const transfer = await this.rescueRepo.getAllRescueTransaction();
    if (!transfer || transfer.length === 0)
      throw new Error("Rescue Product not found!");
    return transfer;
  }
}
