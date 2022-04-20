import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

import { combineReducers } from "redux";

export default combineReducers({
  loginReducer,
  userReducer,
});
