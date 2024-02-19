import { InferSchemaType, Model, Schema, model } from "mongoose";

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
      required: true,
    },
    imgPath: {
      type: String,
      default: null,
      required: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export type Item = InferSchemaType<typeof itemSchema>;

export const ItemModel: Model<Item> = model("Item", itemSchema);
