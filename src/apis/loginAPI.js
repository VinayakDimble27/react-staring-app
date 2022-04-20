import apiHelper from "./apiHelper";

export const login = (data) => {
  return apiHelper("post", "login", data);
};

//   email,
//   password,
// })
//   .then((response) => {
//     //console.log(response);
//     if (response.data.token) {
//       userDispatch(setLoginDetail(response.data.token));
//       // userDispatch({
//       //   type: LOGIN_REDUCER.SET_USER_DETAILS,
//       //   value: response.data.token,
//       // });
//       console.log("token" + response.data.token);
//       alert("success !");
//       navigate("/dashboard");
//     }
//   })
//   .catch((e) => {
//     console.log(e);
//     alert("failed !");
//   });
