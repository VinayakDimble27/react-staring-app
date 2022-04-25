import React from "react";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const EditUserComponent = (props) => {
  const {
    userID,
    setFirstNameWrapper,
    setLastNameWrapper,
    setEmailWrapper,
    submitHandler,
  } = props;

  const { email, first_name, last_name } = props;

  return (
    <>
      <Container>
        <h1>Edit User {userID}</h1>
        <Row className="col-sm-12">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody>
                <Form onSubmit={submitHandler}>
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input
                      name="first_name"
                      placeholder="Enter first name"
                      value={first_name}
                      onChange={setFirstNameWrapper}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>last Name</Label>
                    <Input
                      name="last_name"
                      placeholder="Enter last name"
                      value={last_name}
                      onChange={setLastNameWrapper}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      name="job"
                      placeholder="Enter job title"
                      value={email}
                      onChange={setEmailWrapper}
                    />
                  </FormGroup>
                  <Button color="primary">Submit</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditUserComponent;
