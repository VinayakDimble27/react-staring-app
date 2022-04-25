import apiHelper from "./apiHelper";

export const userList = (page = 1) => {
  return apiHelper("get", `users`);
};

export const addUserAPI = (data) => {
  // console.log(data);
  return apiHelper("post", "users", data);
};

export const editUserAPI = (data) => {
  // console.log("edit:", data);
  return apiHelper("get", "users/" + data);
};

export const updateUserAPI = (data) => {
  console.log("edit:", data);
  return apiHelper("patch", "users/" + data.id, data);
};

export const deleteUserAPI = (data) => {
  console.log(data);
  return apiHelper("delete", "users" + data);
};
