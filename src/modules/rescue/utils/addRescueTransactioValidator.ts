import * as yup from "yup";

export const addRescueTransactioValidator = yup.object({
  userID: yup.string().required("User ID is required"),
  productID: yup.string().required("Product ID is required"),
});
