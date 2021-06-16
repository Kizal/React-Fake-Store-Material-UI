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

export default productReducer;
