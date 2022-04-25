import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import DashboardComponent from "../components/DashboardComponent";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserAction, getUserList } from "../actions/userActions";
import { LOGIN_REDUCER, USER_REDUCER } from "../shared/actionConstants";
import HeaderComponent from "../components/layouts/HeaderComopnent";

const DashboardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  const users = useSelector((state) => state.userReducer.users);

  const getUsers = () => {
    dispatch(getUserList());
  };

  const deleteUserWrapper = (id) => {
    dispatch(deleteUserAction(id));
  };
  return (
    <>
      <HeaderComponent />
      <Container>
        <h3>User List</h3>
        <Row className="col-sm-12">
          {users &&
            users.map((user) => {
              return (
                <Col key={user.id} className="col-sm-4">
                  <DashboardComponent
                    user={user}
                    deleteUserWrapper={deleteUserWrapper}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default DashboardContainer;
