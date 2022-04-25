import React, { useEffect } from "react";
import EditUserComponent from "../components/EditUserComponent";
import HeaderComponent from "../components/layouts/HeaderComopnent";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetailAction,
  setEmailAction,
  setFirstNameAction,
  setLastNameAction,
  updateUserDetailAction,
} from "../actions/userActions";

const EditUserContainer = () => {
  const { userID } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetailAction(userID));
  }, []);

  const { email, first_name, last_name } = useSelector(
    (state) => state.userReducer
  );
  // console.log(userDetail);
  const setFirstNameWrapper = (e) => {
    console.log(e.target.value);
    dispatch(setFirstNameAction(e.target.value));
  };

  const setLastNameWrapper = (e) => {
    dispatch(setLastNameAction(e.target.value));
  };

  const setEmailWrapper = (e) => {
    dispatch(setEmailAction(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUserDetailAction({ id: userID, email, first_name, last_name })
    );
  };

  return (
    <>
      <HeaderComponent />
      <EditUserComponent
        userID={userID}
        first_name={first_name}
        last_name={last_name}
        email={email}
        setFirstNameWrapper={setFirstNameWrapper}
        setLastNameWrapper={setLastNameWrapper}
        setEmailWrapper={setEmailWrapper}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default EditUserContainer;
