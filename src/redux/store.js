import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducerCombine from "../redux/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore( reducerCombine,composeEnhancers(applyMiddleware(thunk)));
console.log(reducerCombine);
