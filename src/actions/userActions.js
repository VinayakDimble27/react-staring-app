import { USER_REDUCER } from "../shared/actionConstants";

export const getUserList = (data) => {
  return {
    type: USER_REDUCER.USER_REQUEST,
    value: data,
  };
};

export const setUserList = (data) => {
  return {
    type: USER_REDUCER.SET_USER_LIST,
    value: data,
  };
};
