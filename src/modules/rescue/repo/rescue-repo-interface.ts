import { RescueProductDTO } from "../dtos/rescue-product-DTO";
import { RescueProduct } from "../models/rescue-model";

export interface IRescueRepo {
  addRescueTransaction(
    dataTransaction: RescueProductDTO
  ): Promise<RescueProduct | null>;
  getAllRescueTransaction(): Promise<Array<RescueProduct>>;
}
