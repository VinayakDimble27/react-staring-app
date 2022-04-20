import { createStore, applyMiddleware, combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import userReducer from "../reducers/userReducer";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { LOGIN_REDUCER } from "../shared/actionConstants";

import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// console.log(store.getState());
sagaMiddleware.run(rootSaga);

let userInfo = {};
if (sessionStorage.userInfo) {
  userInfo = JSON.parse(sessionStorage.userInfo);
}

if (userInfo.token && userInfo.token.length > 0) {
  store.userInfo = userInfo;
  store.dispatch({
    type: LOGIN_REDUCER.SET_USER_DETAILS,
    value: userInfo,
  });
}
export default store;
