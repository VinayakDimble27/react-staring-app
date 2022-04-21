import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  FormFeedback,
} from "reactstrap";
const LoginComponent = ({
  email,
  password,
  emailError,
  passwordError,
  formDisabled,
  setEmailWrapper,
  setPasswordWrapper,
  submitHandler,
}) => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Container>
        <h3>Login</h3>
        <Row>
          <Col className="col-sm-4 offset-4">
            <Card>
              <CardBody>
                <Form>
                  <FormGroup style={{ textAlign: "left" }}>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter email"
                      type="email"
                      value={email}
                      onChange={setEmailWrapper}
                      invalid={emailError !== null}
                    />
                    <FormFeedback style={{ textAlign: "left" }}>
                      {emailError}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup style={{ textAlign: "left" }}>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Enter password"
                      type="password"
                      value={password}
                      onChange={setPasswordWrapper}
                      invalid={passwordError !== null}
                    />
                    <FormFeedback style={{ textAlign: "left" }}>
                      {passwordError}
                    </FormFeedback>
                  </FormGroup>
                  <Button
                    onClick={submitHandler}
                    disabled={formDisabled}
                    color="primary"
                  >
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LoginComponent;
