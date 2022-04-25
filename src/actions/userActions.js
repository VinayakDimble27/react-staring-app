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

export const setName = (data) => {
  return {
    type: USER_REDUCER.SET_NAME,
    value: data,
  };
};

export const setJob = (data) => {
  return {
    type: USER_REDUCER.SET_JOB,
    value: data,
  };
};

export const addUserAction = (data) => {
  return {
    type: USER_REDUCER.ADD_USER,
    value: data,
  };
};

export const deleteUserAction = (data) => {
  return {
    type: USER_REDUCER.DELETE_USER,
    value: data,
  };
};

export const getUserDetailAction = (data) => {
  return {
    type: USER_REDUCER.GET_USER_DETAIL,
    value: data,
  };
};

export const setUserDetailAction = (data) => {
  return {
    type: USER_REDUCER.SET_USER_DETAIL,
    value: data,
  };
};

export const updateUserDetailAction = (data) => {
  return {
    type: USER_REDUCER.UPDATE_USER_DETAIL,
    value: data,
  };
};

export const setError = (ele) => {
  return {
    type: `SET_${ele.path.toUpperCase()}_ERROR`,
    value: ele.message,
  };
};
export const setFirstNameAction = (data) => {
  return {
    type: USER_REDUCER.SET_FIRST_NAME,
    value: data,
  };
};

export const setLastNameAction = (data) => {
  return {
    type: USER_REDUCER.SET_LAST_NAME,
    value: data,
  };
};

export const setEmailAction = (data) => {
  return {
    type: USER_REDUCER.SET_EMAIL,
    value: data,
  };
};
