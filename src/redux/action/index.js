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

// fetchProduct is an asynchronous function that gets the product list from an API call
export const fetchProduct = () => {
  return async (dispatch) => {
    // Declare products variable to store response data
    let products;
    // Use ajax function to make API request
    await ajax("get", "products")
      .then((response) => {
        // Store API response in the products variable
        products = response.data;
      })
      .catch((error) => {
        // Log any errors
        console.log(error);
      });
    // Dispatch action to set the products, passing the response data
    dispatch({ type: ActionType.SET_PRODUCT, payLoad: products });
  };
};

export const fetchProductDetail = (id=0) => {
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
