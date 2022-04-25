import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import {
  addUserWatcher,
  userInfoSaga,
  deleteUserWatcher,
  editUserWatcher,
  updateUserWatcher,
} from "./userSaga";
// import addUserWatcher from "./userSaga";
// import deleteUserWatcher from "./userSaga";
function* rootSaga() {
  yield all([
    loginSaga(),
    userInfoSaga(),
    addUserWatcher(),
    editUserWatcher(),
    deleteUserWatcher(),
    updateUserWatcher(),
  ]);
}
export default rootSaga;
