import React from "react";
import {
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  Container,
  Row,
  Col,
  CardBody,
  Card,
  FormFeedback,
} from "reactstrap";

const AddUserComponent = ({
  name,
  job,
  nameError,
  jobError,
  setNameWrapper,
  setJobWrapper,
  addUserSubmithandler,
}) => {
  return (
    <>
      <Container>
        <h1>Create User</h1>
        <Row className="col-sm-12">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody>
                <Form onSubmit={addUserSubmithandler}>
                  <FormGroup>
                    <Label>User Name</Label>
                    <Input
                      name="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={setNameWrapper}
                      invalid={nameError !== null}
                    />
                    <FormFeedback>{nameError}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label>Job</Label>
                    <Input
                      name="job"
                      placeholder="Enter job title"
                      value={job}
                      onChange={setJobWrapper}
                      invalid={jobError !== null}
                    />
                    <FormFeedback>{jobError}</FormFeedback>
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
export default AddUserComponent;
