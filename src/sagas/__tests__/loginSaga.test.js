import { call, put } from "redux-saga/effects";
import { loginRequest, setLoginDetail } from "../../actions/loginActions";
import { login } from "../../apis/loginAPI";
import { loginWorkerSaga } from "../loginSaga";
describe("Login saga", () => {
  let iterator, action;

  const response = {
    data: { token: "sdfj" },
  };
  beforeEach(() => {
    action = loginRequest({ email: "react.test.com", password: "password" });
    iterator = loginWorkerSaga(action);
  });

  it("Must call API", () => {
    expect(iterator.next().value).toEqual(call(login, action.value));
  });

  it("must dispatch success action", () => {
    expect(iterator.next().value).toEqual(call(login, action.value));
    //iterator.next();
    // console.log("response:", response);
    expect(iterator.next(response).value).toEqual(
      put(
        setLoginDetail({ token: response.data.token, email: "react.test.com" })
      )
    );
  });
  //   it("must dispatch failure action", () => {});
});
