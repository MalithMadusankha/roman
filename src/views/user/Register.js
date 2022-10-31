// reactstrap components
import SlidingButton from "components/button/SlidingButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Register = () => {
  const [isSlide, setIsSlide] = useState(false);

  const onSucces = () => {
    console.log("slide");
    setIsSlide(true);
  };
  return (
    <>
      <Col lg="4" md="6" sm="7">
        <Card className="bg-translucent-info shadow-lg border-0">
          {!isSlide ? (
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <h3 className="text-white fs-3">Sign Up Here</h3>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="bg-translucent-info">
                        <i className="ni ni-single-02-83 text-white" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="bg-translucent-info text-white"
                      placeholder="Name"
                      type=" text"
                      autoComplete="new-email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="bg-translucent-info">
                        <i className="ni ni-email-83 text-white" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="bg-translucent-info text-white"
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="bg-translucent-info">
                        <i className="ni ni-lock-circle-open text-white" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="bg-translucent-info text-white"
                      placeholder="Password"
                      type=" password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="bg-translucent-info">
                        <i className="ni ni-lock-circle-open text-white" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="bg-translucent-info text-white"
                      placeholder="Re-Password"
                      type=" password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                </FormGroup>
                <div>
                  <SlidingButton onSucces={onSucces} isSlide={isSlide} />
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Continue
                  </Button>
                </div>
              </Form>
            </CardBody>
          ) : (
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <h5 className="text-white fs-3">
                  Sent one-time two factor authenticate code admin***@gmail.com
                </h5>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="bg-translucent-info">
                        <i className="bx bxs-key text-white fs-5"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="bg-translucent-info text-white"
                      placeholder=" type code"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Link className="text-secondary text-sm">
                    <i className="bx bx-key bx-fade-left"></i> resend code
                  </Link>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign In
                  </Button>
                </div>
              </Form>
            </CardBody>
          )}
        </Card>

        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-white"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-white"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>SignIn</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Register;
