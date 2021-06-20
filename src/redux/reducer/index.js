import { combineReducers } from "redux";
import productReducer, { selectedProductsReducer } from "./productReducer";


const reducerCombine = combineReducers({ productReducer,productDetail:selectedProductsReducer });

export default reducerCombine;
