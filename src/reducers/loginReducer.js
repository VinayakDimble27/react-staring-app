import { Navigate } from "react-router-dom";
import { LOGIN_REDUCER } from "../shared/actionConstants";

export const initialState = {
  email: "",
  password: "",
  emailError: null,
  passwordError: null,
  userInfo: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REDUCER.SET_EMAIL:
      return { ...state, email: action.value };
    case LOGIN_REDUCER.SET_PASSWORD:
      return { ...state, password: action.value };
    // case LOGIN_REDUCER.LOGIN_REQUEST:
    //   return { ...state, userInfo: action.value };
    //   break;
    case LOGIN_REDUCER.SET_EMAIL_ERROR:
      return { ...state, emailError: action.value };
    case LOGIN_REDUCER.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.value };
    case LOGIN_REDUCER.SET_USER_DETAILS:
      // console.log("actions details___", JSON.stringify(action.value));
      // console.log("state details____", JSON.stringify(state));
      sessionStorage.setItem("userInfo", JSON.stringify(action.value));
      return { ...state, userInfo: action.value };
    case LOGIN_REDUCER.LOGOUT:
      sessionStorage.setItem("userInfo", null);
      return { ...state, userInfo: {} };

    default:
      return state;
  }
};

export default loginReducer;
