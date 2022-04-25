import userEvent from "@testing-library/user-event";

import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  Button,
  CardFooter,
} from "reactstrap";

const DashboardComponent = (props) => {
  const { id, first_name, last_name, avatar, email } = props.user;
  const { deleteUserWrapper } = props;
  return (
    <div>
      <Card className="m-4">
        <CardImg top width="100%" src={avatar} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <b>{`${first_name} ${last_name}`}</b>
          </CardTitle>
          <CardSubtitle>
            <u>{email}</u>
          </CardSubtitle>
        </CardBody>
        <CardFooter>
          <Link
            to={`/edit-user/${id}`}
            params={id}
            className="btn btn-warning m-3 btn-sm"
          >
            Edit
          </Link>
          <Button
            className="btn btn-danger m-3 btn-sm"
            onClick={() => deleteUserWrapper(id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardComponent;
