import React, { useState, useRef } from "react";
import Aux from '../../hoc/Auxilliary/Auxilliary';
import {
    Container, Row, Col, Card,
    CardBody, Input, Form, Button
} from "reactstrap";
import Alert from "../../components/Alerts/Alert";
import { Link } from "react-router-dom";

const ResetPassword = (props) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const focusField = useRef(null);
    const submitLoginForm = (event) => {
        event.preventDefault();
    }
    // console.log(window.location.pathname);
    return (
        <Aux>
            <div className="main-content">
                <div className="page-content">
                    <section className="bg-auth">
                        <Container className="projectb-login-container">
                            <Row className="justify-content-center">
                                <Col xl={10} lg={12}>
                                    {props.loginFail && <Alert message={props.loginFail} contactLink={true} alertIcon={true} />}
                                    <Card className="auth-box ">
                                        <Row className="g-0">
                                            <Col lg={12}>
                                                <CardBody className="auth-content h-100 text-white projectb-login-card ">
                                                    <div className="w-100">
                                                        <div className="text-center mb-4">
                                                            <h5>Reset Password</h5>
                                                        </div>
                                                        <Form onSubmit={submitLoginForm} className="auth-form" id='projectbLoginForm'>
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="passwordlabel"
                                                                    className="form-label"
                                                                >
                                                                    Password
                                                                </label>
                                                                <Input
                                                                    type="password"
                                                                    innerRef={focusField}
                                                                    className="form-control projectb-login-custominput"
                                                                    id="passwordlabel"
                                                                    placeholder="Password"
                                                                    onChange={(event) => setPassword(event.target.value)}
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="confirmpasswordInput"
                                                                    className="form-label"
                                                                >
                                                                    Confirm Password
                                                                </label>
                                                                <Input
                                                                    type="password"
                                                                    className="form-control projectb-login-custominput"
                                                                    id="confirmpasswordInput"
                                                                    placeholder="Comfirm Password"
                                                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="text-center">
                                                                <Button
                                                                    type="submit"
                                                                    className="btn btn-white btn-hover w-100">
                                                                    Reset Password
                                                                </Button>
                                                            </div>
                                                        </Form>
                                                        <div className="mt-4 text-center">
                                                            <p className="mb-0">
                                                                Don't have an account ?{" "}
                                                                <Link
                                                                    to="/signin"
                                                                    className="fw-medium text-white text-decoration-underline"
                                                                >
                                                                    {" "}
                                                                    Sign in{" "}
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </Aux>
    )
}

export default ResetPassword;