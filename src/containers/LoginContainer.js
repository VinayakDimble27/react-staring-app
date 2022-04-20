import React, { useReducer, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import loginReducer, { initialState } from "../reducers/loginReducer";
import {
  setEmail,
  setPassword,
  setError,
  loginRequest,
} from "../actions/loginActions";
import { LOGIN_REDUCER } from "../shared/actionConstants";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginContainer = () => {
  const [loginDetails, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, emailError, passwordError } = loginDetails;

  const setEmailWrapper = (e) => {
    // setEmail(e.target.value);
    dispatch(setEmail(e.target.value));
    //dispatch({ type: LOGIN_REDUCER.SET_EMAIL, value: e.target.value });
  };

  const setPasswordWrapper = (e) => {
    dispatch(setPassword(e.target.value));
    //dispatch({ type: LOGIN_REDUCER.SET_PASSWORD, value: e.target.value });
  };
  const [formDisabled, setFormStatus] = useState(false);

  const userDispatch = useDispatch();

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const navigate = useNavigate();
  const submitHandler = () => {
    setFormStatus((prevState) => !prevState);
    schema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        // setError();
        dispatch({
          type: LOGIN_REDUCER.SET_EMAIL_ERROR,
          value: null,
        });
        dispatch({
          type: LOGIN_REDUCER.SET_PASSWORD_ERROR,
          value: null,
        });

        userDispatch(
          loginRequest({
            email,
            password,
            redirect: navigate,
            path: "/dashboard",
          })
        );

        // apiHelper("post", "login", {
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
        setFormStatus((prevState) => !prevState);
        //navigate("/dashboard");
      })
      .catch((e) => {
        setFormStatus((prevState) => !prevState);
        console.log(e);
        e.inner.forEach((element) => {
          // console.log(element.path);
          dispatch(setError(element));
          // if (element.path === "email")
          //   dispatch({
          //     type: LOGIN_REDUCER.SET_EMAIL_ERROR,
          //     value: element.message,
          //   });
          // if (element.path === "password")
          //   dispatch({
          //     type: LOGIN_REDUCER.SET_PASSWORD_ERROR,
          //     value: element.message,
          //   });
        });
      });
  };
  return (
    <LoginComponent
      email={email}
      password={password}
      emailError={emailError}
      passwordError={passwordError}
      formDisabled={formDisabled}
      setEmailWrapper={setEmailWrapper}
      setPasswordWrapper={setPasswordWrapper}
      submitHandler={submitHandler}
    />
  );
};

export default LoginContainer;
