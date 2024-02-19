export class UpdateItemDTO {
  name?: string;
  value?: number;
  imgPath?: string;

  constructor(itemData: updateItem) {
    this.name = itemData.name;
    this.value = itemData.value;
    this.imgPath = itemData.imgPath;
  }
}

type updateItem = {
  name?: string;
  value?: number;
  imgPath?: string;
};
