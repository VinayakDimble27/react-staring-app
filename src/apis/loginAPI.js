import apiHelper from "./apiHelper";

export const login = (data) => {
  return apiHelper("post", "login", data);
};
