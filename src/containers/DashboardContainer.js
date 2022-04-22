import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import DashboardComponent from "../components/DashboardComponent";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../actions/userActions";
import { loginOut } from "../actions/loginActions";
import { LOGIN_REDUCER } from "../shared/actionConstants";
import { Link } from "react-router-dom";

const DashboardContainer = () => {
  // const [users, setUser] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers(1);
  }, []);

  const userInfo = useSelector((state) => state.loginReducer.userInfo);

  const users = useSelector((state) => state.userReducer.users);

  const getUsers = () => {
    dispatch(getUserList());
  };

  const logout = () => {
    dispatch({ type: LOGIN_REDUCER.LOGOUT });
  };
  return (
    <>
      <Container>
        {userInfo.token && userInfo.token.length > 0 && (
          <span>
            Welcome <b>{userInfo.email}</b>,You have logged in <br></br>
            <Link to="/" color="warning" onClick={logout}>
              Logout
            </Link>
          </span>
        )}
        <h3>User List</h3>
        <Row className="col-sm-12">
          {users &&
            users.map((user) => {
              return (
                <Col key={user.id} className="col-sm-4">
                  <DashboardComponent user={user} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default DashboardContainer;
