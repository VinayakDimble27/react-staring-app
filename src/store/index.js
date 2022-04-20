import { createStore, applyMiddleware } from "redux";
import loginReducer from "../reducers/loginReducer";
import createSagaMiddleware from "redux-saga";
import { LOGIN_REDUCER } from "../shared/actionConstants";

import userSaga from "../sagas/loginSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(loginReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

let token = sessionStorage.getItem("token");

if (token && token.length > 0) {
  store.userInfo = token;
  store.dispatch({ type: LOGIN_REDUCER.SET_USER_DETAILS, value: token });
}

export default store;
