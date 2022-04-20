import apiHelper from "./apiHelper";

export const userList = (page = 1) => {
  return apiHelper("get", `users`);
};
