import { ActionType } from "../constant/actionType";

export const Increment = () => {
  return { type: "Increment" };
};

export const Decrement = () => {
  return { type: "Decrement" };
};

//Pure Function Reducer Study Topic

export const setProduct = (products) => {
  return { type: ActionType.SET_PRODUCT, payLoad: products };
};

export const selectedProduct = (product) => {
  return { type: ActionType.SELECT_PRODUCT, payLoad: product };
};
