import userEvent from "@testing-library/user-event";

import React from "react";

import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
  CardGroup,
  Row,
  Col,
} from "reactstrap";

const DashboardComponent = (props) => {
  const { first_name, last_name, avatar, email } = props.user;
  return (
    <>
      <Card className="m-4">
        <CardImg top width="100%" src={avatar} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <b>{`${first_name} ${last_name}`}</b>
          </CardTitle>
          <CardSubtitle>
            <u mailto={email}>{email}</u>
          </CardSubtitle>
        </CardBody>
      </Card>
    </>
  );
};
export default DashboardComponent;
