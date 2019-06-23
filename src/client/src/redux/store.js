import { createStore, combineReducers } from "redux";
import userReducer from "./reducers";

const store = createStore(userReducer);

export default store;
