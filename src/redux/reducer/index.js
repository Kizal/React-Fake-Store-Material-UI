import { combineReducers } from "redux";
import productReducer from "./productReducer";

const reducerCombine = combineReducers({ productReducer });

export default reducerCombine;
