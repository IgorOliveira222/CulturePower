export class CreateItemDto {
  name?: string;
  value?: number;
  imgPath?: string;

  constructor(itemData: createItem) {
    this.name = itemData.name;
    this.value = itemData.value;
    this.imgPath = itemData.imgPath;
  }
}
type createItem = {
  name?: string;
  value?: number;
  imgPath?: string;
};
