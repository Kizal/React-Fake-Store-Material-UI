import { ActionType } from "../constant/actionType";
import ajax from "../../common/ajax";
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

export const fetchProduct = () => {
  return async (dispatch) => {
    let products;
    await ajax("get", "products")
      .then((response) => {
        products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch({ type: ActionType.SET_PRODUCT, payLoad: products });
  };
};

export const fetchProductDetail = (id) => {
  return async (dispatch) => {
    let product;
    await ajax("get", `products/${id}`)
      .then((response) => {
        product = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch({ type: ActionType.SELECT_PRODUCT, payLoad: product });
  };
};

export const selectedProduct = (product) => {
  return { type: ActionType.SELECT_PRODUCT, payLoad: product };
};

export const removeSelectedProduct = () => {
  return { type: ActionType.REMOVE_SELECTED_PRODUCT };
};
