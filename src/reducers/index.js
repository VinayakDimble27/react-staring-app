import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

import addUserReducer from "./addUserReducer";
import { combineReducers } from "redux";

export default combineReducers({
  loginReducer,
  userReducer,
  addUserReducer,
});
