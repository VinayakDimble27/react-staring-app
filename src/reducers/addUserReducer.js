import { Alert } from "bootstrap";
import { USER_REDUCER } from "../shared/actionConstants";

export const initialState = {
  name: "",
  job: "",
  nameError: null,
  jobError: null,
};

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REDUCER.SET_NAME:
      return { ...state, name: action.value };
    case USER_REDUCER.SET_JOB:
      return { ...state, job: action.value };
    case USER_REDUCER.SET_NAME_ERROR:
      return { ...state, nameError: action.value };
    case USER_REDUCER.SET_JOB_ERROR:
      return { ...state, jobError: action.value };
    default:
      return state;
  }
};

export default addUserReducer;
