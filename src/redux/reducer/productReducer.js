import { ActionType } from "../constant/actionType";

let initialState = [];
const productReducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case ActionType.SET_PRODUCT:
      return { ...state, product: payLoad };

    default:
      return state;
      
  }
};

export const selectedProductsReducer = (state = {}, { type, payLoad }) => {
  console.log(type);
  switch (type) {
    case ActionType.SELECT_PRODUCT:
      return { ...state, ...payLoad };
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export default productReducer;
