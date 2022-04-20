import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REDUCER } from "../shared/actionConstants";
import { login } from "../apis/loginAPI";
import { setLoginDetail } from "../actions/loginActions";

function* loginWorkerSaga(action) {
  try {
    const { email, password, redirect, path } = action.value;
    const response = yield call(login, { email, password });
    yield put(setLoginDetail({ token: response.data.token, email }));
    redirect(path);
  } catch (error) {
    console.log(error);
    alert("Invalid credentials");
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN_REDUCER.LOGIN_REQUEST, loginWorkerSaga);
}
export default loginSaga;
