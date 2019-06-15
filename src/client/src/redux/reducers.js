//import { CHANGE_PHOTOLIST } from "./actions";
import { combineReducers } from "redux";

const photoListReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_PHOTOLIST:
      return action.photoList;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  photoList: photoListReducer
});

export default rootReducer;
