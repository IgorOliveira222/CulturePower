import { RescueProductDTO } from "../dtos/rescue-product-DTO";
import { RescueProduct } from "../models/rescue-model";

export interface IRescueProductService {
  addRescueTransaction(
    dataTransaction: RescueProductDTO
  ): Promise<RescueProduct>;
  getAllRescueTransaction(): Promise<Array<RescueProduct>>;
}
