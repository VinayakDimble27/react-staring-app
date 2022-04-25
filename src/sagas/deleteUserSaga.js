import { call, takeLatest } from "redux-saga/effects";
import { deleteUserAPI } from "../apis/userAPI";

import { USER_REDUCER } from "../shared/actionConstants";

function* deleteUserWorker(action) {
  try {
    const response = yield call(deleteUserAPI, action.value);
    // console.log(response);
    if (response.status == 204) {
      alert("User deleted successfully");
    }
  } catch (e) {
    console.log(e);
  }
}
//watcher
export function* deleteUserWatcher() {
  // alert("SDf");
  yield takeLatest(USER_REDUCER.DELETE_USER, deleteUserWorker);
}

export default deleteUserWatcher;
