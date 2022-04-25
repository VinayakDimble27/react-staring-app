import { call, takeLatest, put } from "redux-saga/effects";
import { setUserList, setUserDetailAction } from "../actions/userActions";
import {
  userList,
  addUserAPI,
  deleteUserAPI,
  editUserAPI,
  updateUserAPI,
} from "../apis/userAPI";
import { USER_REDUCER } from "../shared/actionConstants";

//USER LIST
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
export function* userInfoSaga() {
  yield takeLatest(USER_REDUCER.USER_REQUEST, getUserWorkerList);
}
//ADD USER
function* addUserWorker(action) {
  try {
    const response = yield call(addUserAPI, action.value);
    alert("User added successfully");
  } catch (e) {
    alert(e);
    console.log(e);
  }
}

export function* addUserWatcher() {
  yield takeLatest(USER_REDUCER.ADD_USER, addUserWorker);
}

function* editUserWorker(action) {
  try {
    // console.log(action);
    const response = yield call(editUserAPI, action.value);
    yield put(setUserDetailAction(response.data.data));
    // console.log(response);
  } catch (e) {
    console.log(e);
  }
}
export function* editUserWatcher() {
  console.log("inside  editUserWatcher");
  yield takeLatest(USER_REDUCER.GET_USER_DETAIL, editUserWorker);
}
//DELETE USER
function* deleteUserWorker(action) {
  try {
    const response = yield call(deleteUserAPI, action.value);
    // console.log(response);
    if (response.status === 204) {
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

//UPDATE

function* updateUserWorker(action) {
  try {
    console.log(action);
    const response = yield call(updateUserAPI, action.value);
    alert("User updated successfully");
  } catch (e) {}
}
export function* updateUserWatcher() {
  yield takeLatest(USER_REDUCER.UPDATE_USER_DETAIL, updateUserWorker);
}
