import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import userInfoSaga from "./userSaga";

function* rootSaga() {
  yield all([loginSaga(), userInfoSaga()]);
}
export default rootSaga;
