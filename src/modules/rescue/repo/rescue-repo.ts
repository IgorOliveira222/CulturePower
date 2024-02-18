import { Model } from "mongoose";
import { RescueProductDTO } from "../dtos/rescue-product-DTO";
import { IRescueRepo } from "./rescue-repo-interface";
import { RescueProduct } from "../models/rescue-model";

export class RescueProductRepo implements IRescueRepo {
  constructor(private rescueModel: Model<RescueProduct>) {}

  async addRescueTransaction(
    dataTransaction: RescueProductDTO
  ): Promise<RescueProduct | null> {
    const transaction = await this.rescueModel.create(dataTransaction);
    return transaction;
  }

  async getAllRescueTransaction(): Promise<RescueProduct[]> {
    const transfer = await this.rescueModel.find();
    return transfer;
  }
}
