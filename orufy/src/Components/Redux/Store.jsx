import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AppReducer from "./AppReducer/AppReducer";

export const store = legacy_createStore(AppReducer, applyMiddleware(thunk));
