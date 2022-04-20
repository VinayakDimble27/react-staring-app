import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REDUCER } from "../shared/actionConstants";
import { login } from "../apis/loginAPI";
import { setLoginDetail } from "../actions/loginActions";

function* loginSaga(action) {
  try {
    const { email, password, redirect, path } = action.value;
    const response = yield call(login, { email, password });
    yield put(setLoginDetail(response.data.token));
    redirect(path);
  } catch (error) {
    console.log(error);
    alert("Invalid credentials");
  }
}

function* userSaga() {
  yield takeLatest(LOGIN_REDUCER.LOGIN_REQUEST, loginSaga);
}

export default userSaga;
