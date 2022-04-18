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
    <div>
      Login
      <Container>
        <Row className="align-items-center">
          <Col sm={{ size: 6, offset: 3 }} className="text-center">
            <Card className="d-flex">
              <CardBody>
                <Form>
                  <FormGroup>
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
                    <FormFeedback>{emailError}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
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
                    <FormFeedback>{passwordError}</FormFeedback>
                  </FormGroup>
                  <Button onClick={submitHandler} disabled={formDisabled}>
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
