import * as yup from "yup";

export const createItemValidator = yup.object({
  name: yup.string().required("Name item is required"),
  value: yup
    .number()
    .required("Value of item is required")
    .positive("Negative values are not allowed")
    .integer("Float values are not allowed!")
    .max(10, "Maximum value is 10 Gems"),
  imgPath: yup.string().required("Image path is required"),
});
