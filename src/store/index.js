import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { LOGIN_REDUCER } from "../shared/actionConstants";

import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

let userInfo = {
  token: "",
  email: "",
};

if (sessionStorage.userInfo) {
  userInfo = JSON.parse(sessionStorage.userInfo);
}

if (userInfo && userInfo.token.length > 0) {
  store.userInfo = userInfo;
  store.dispatch({
    type: LOGIN_REDUCER.SET_USER_DETAILS,
    value: userInfo,
  });
}
export default store;
