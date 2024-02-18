import { InferSchemaType, Model, Schema, model } from "mongoose";

const rescueProductSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
  nameUser: {
    type: String,
    required: true,
  },
  nameProduct: {
    type: String,
    required: true,
  },
  productValue: {
    type: Number,
    required: true,
  },
});

export type RescueProduct = InferSchemaType<typeof rescueProductSchema>;

export const rescueModel: Model<RescueProduct> = model(
  "rescueProduct",
  rescueProductSchema
);
