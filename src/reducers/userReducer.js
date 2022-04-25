import { USER_REDUCER } from "../shared/actionConstants";

export const userInitialState = {
  users: [],
  // userDetail: {},
  email: "",
  first_name: "",
  last_name: "",
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    // case USER_REDUCER.USER_REQUEST:

    case USER_REDUCER.SET_USER_LIST:
      return { ...state, users: action.value };
    case USER_REDUCER.SET_USER_DETAIL:
      // console.log("action data__", action.value);
      return {
        ...state,
        email: action.value.email,
        first_name: action.value.first_name,
        last_name: action.value.last_name,
      };
    case USER_REDUCER.SET_EMAIL:
      return { ...state, email: action.value };
    case USER_REDUCER.SET_FIRST_NAME:
      return { ...state, first_name: action.value };
    case USER_REDUCER.SET_LAST_NAME:
      return { ...state, last_name: action.value };
    default:
      return state;
  }
};

export default userReducer;
