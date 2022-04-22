import { initialState } from "../loginReducer";
import userReducer from "../userReducer";

describe("user list", () => {
  it("get default state", () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });
});
