import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { LOGIN_REDUCER } from "../../shared/actionConstants";

const HeaderComponent = () => {
  const userInfo = useSelector((state) => state.loginReducer.userInfo);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: LOGIN_REDUCER.LOGOUT });
  };

  return (
    <header>
      <Nav className="navbar navbar-dark bg-dark">
        <NavItem>
          <NavLink to="/dashboard" className="text-light">
            {" "}
            Dashboard{" "}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/create-user" className="text-light">
            {" "}
            Create User{" "}
          </NavLink>
        </NavItem>
        <NavItem>
          {userInfo.token && userInfo.token.length > 0 && (
            <span className="text-light">
              Welcome <b>{userInfo.email} </b>
              <Link to="/" className="text-warning" onClick={logout}>
                Logout
              </Link>
            </span>
          )}
        </NavItem>
      </Nav>
    </header>
  );
};
export default HeaderComponent;
