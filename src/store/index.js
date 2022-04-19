import { createStore } from "redux";
import loginReducer from "../reducers/loginReducer";
import { LOGIN_ACTION } from "../actions/loginActions";

const store = createStore(loginReducer);

let token = sessionStorage.getItem("token");

if (token && token.length > 0) {
  store.userInfo = token;
  store.dispatch({ type: LOGIN_ACTION.SET_USER_DETAILS, value: token });
}

export default store;
