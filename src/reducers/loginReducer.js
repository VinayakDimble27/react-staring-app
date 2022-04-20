import React from "react";
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
    case LOGIN_REDUCER.LOGIN_REQUEST:
      console.log("inside __login reducer");
    case LOGIN_REDUCER.SET_EMAIL_ERROR:
      return { ...state, emailError: action.value };
    case LOGIN_REDUCER.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.value };
    case LOGIN_REDUCER.SET_USER_DETAILS:
      // console.log("inside set user details");
      sessionStorage.setItem("token", action.value);
      return { ...state, userInfo: action.value };
    default:
      return state;
  }
};

export default loginReducer;
