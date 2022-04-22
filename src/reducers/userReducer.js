import { USER_REDUCER } from "../shared/actionConstants";

export const userInitialState = { users: [] };
export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    // case USER_REDUCER.USER_REQUEST:

    case USER_REDUCER.SET_USER_LIST:
      return { ...state, users: action.value };
    default:
      return state;
  }
};

export default userReducer;
