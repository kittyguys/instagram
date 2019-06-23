import { createStore, combineReducers } from "redux";
import loginReducer from "./reducers/login";
import uploadReducer from "./reducers/upload";

const rootReducer = combineReducers({
  login: loginReducer,
  upload: uploadReducer
});

const store = createStore(rootReducer);

export default store;
