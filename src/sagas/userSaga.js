import { call, takeLatest, put } from "redux-saga/effects";
import { setUserList } from "../actions/userActions";
import { userList } from "../apis/userAPI";
import { USER_REDUCER } from "../shared/actionConstants";

//worker saga
function* getUserWorkerList() {
  try {
    const response = yield call(userList);
    yield put(setUserList(response.data.data));
  } catch (e) {
    console.log(e);
    alert(e);
  }
}

//watcher saga
function* userInfoSaga() {
  yield takeLatest(USER_REDUCER.USER_REQUEST, getUserWorkerList);
}

export default userInfoSaga;
