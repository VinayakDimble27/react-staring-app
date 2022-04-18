import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import apiHelper from "../apis/apiHelper";
import DashboardComponent from "../components/DashboardComponent";
import { useSelector } from "react-redux";
const DashboardContainer = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers(1);
  }, []);

  let userInfo = useSelector((state) => state.userInfo);
  const getUsers = (page = 1) => {
    apiHelper("get", `users?page=${page}`)
      .then((response) => {
        console.log(response.data);
        let userInfo = response.data.data;
        console.log(userInfo);
        setUser(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        {userInfo.length > 0 && <h1>Welcome user,You have logged in</h1>}
        <h3>User List</h3>
        <Row className="col-sm-12">
          {users.map((user) => {
            return (
              <Col>
                <DashboardComponent
                  className="col-sm-3"
                  key={user.id}
                  user={user}
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
