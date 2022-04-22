import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import {
  setEmail,
  setPassword,
  setError,
  loginRequest,
} from "../actions/loginActions";
import schema from '../validation/loginValidation'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginContainer = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.loginReducer
  );
  const [formDisabled, setFormStatus] = useState(false);

  const dispatch = useDispatch();

  const setEmailWrapper = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const setPasswordWrapper = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const navigate = useNavigate();
  
  const submitHandler = () => {
    setFormStatus((prevState) => !prevState);
    schema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        dispatch(
          loginRequest({
            email,
            password
          })
        );
       
       setFormStatus((prevState) => !prevState);
       navigate("/dashboard");
      })
      .catch((e) => {
        setFormStatus((prevState) => !prevState);
        console.log(e);
        e.inner.forEach((element) => {
          dispatch(setError(element));
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
