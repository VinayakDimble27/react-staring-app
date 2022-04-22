import loginReducer, { initialState } from "../loginReducer";
import { setEmail, setPassword } from "../../actions/loginActions";

describe("login reducer", () => {
  it("return default state", () => {
    expect(loginReducer(initialState, {})).toEqual(initialState);
  });

  it("set email", () => {
    const email = "eve.holt@reqres.in";
    expect(loginReducer(initialState, setEmail(email))).toEqual({
      ...initialState,
      email,
    });
  });

  it("set password", () => {
    const password = "password";
    expect(loginReducer(initialState, setPassword(password))).toEqual({
      ...initialState,
      password,
    });
  });
});
