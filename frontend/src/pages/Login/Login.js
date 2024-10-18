import React, { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardBody, Col, Container, Input, Row,Form } from "reactstrap";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { connect } from "react-redux";
import { userLogin, userForgotPassword } from './actions/loginAction';
import Spinner from "../../components/Spinner/Spinner";
import Alert from "../../components/Alerts/Alert";
import ForgotPassword from "./ForgotPassword";


const Login = (props) => {
    document.title = "Sign In | project-B";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const focusField = useRef(null);
    const forgotPassFocus = useRef(null);
    const [forgotPassModal, setForgotPassModal] = useState(false);

    useEffect(() => {
        if (focusField.current) {
            focusField.current.focus();
        }
    }, [forgotPassModal]);
    useEffect(() => {
        if (forgotPassFocus.current) {
            forgotPassFocus.current.focus();
        }
    }, [forgotPassModal]);
    const submitLoginForm = (event) => {
        event.preventDefault();
        props.onUserLogin(email, password, remember);
        document.getElementById('projectbLoginForm').reset();
    }
    const forgotPassHandler = useCallback((event, forgotEmail) => {
        event.preventDefault();
        props.onUserForgotPassword(forgotEmail);
    }, [props]);
    return (
        <Aux>
            <div>
                <ForgotPassword modal={forgotPassModal} formFocus={forgotPassFocus}
                    setModal={setForgotPassModal} forgotPassHandler={forgotPassHandler} 
                    errorMessage={props.forgotPassFail} successMessage={props.forgotPassSuccess}
                    />
                <div className="main-content">
                    <div className="page-content">
                        <section className="bg-auth">
                            {(props.loginLoading || props.forgotPassLoading) && <Spinner />}
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
                                                                <h5>Welcome Back !</h5>
                                                                <p className="text-white-70">
                                                                    Sign in to continue to Jobcy.
                                                                </p>
                                                            </div>
                                                            <Form onSubmit={submitLoginForm} className="auth-form" id='projectbLoginForm'>
                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="usernameInput"
                                                                        className="form-label"
                                                                    >
                                                                        Username
                                                                    </label>
                                                                    <Input
                                                                        type="email"
                                                                        innerRef={focusField}
                                                                        className="form-control projectb-login-custominput"
                                                                        id="usernameInput"
                                                                        placeholder="Enter your E-mail"
                                                                        onChange={(event) => setEmail(event.target.value)}
                                                                        required
                                                                    />
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="passwordInput"
                                                                        className="form-label"
                                                                    >
                                                                        Password
                                                                    </label>
                                                                    <Input
                                                                        type="password"
                                                                        className="form-control projectb-login-custominput"
                                                                        id="passwordInput"
                                                                        placeholder="Enter your password"
                                                                        onChange={(event) => setPassword(event.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="mb-4">
                                                                    <div className="form-check">
                                                                        <input
                                                                            className="form-check-input projectb-login-checkbox"
                                                                            type="checkbox"
                                                                            onChange={() => setRemember(!remember)}
                                                                            id="flexCheckDefault"
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="flexCheckDefault"
                                                                        >
                                                                            Remember me
                                                                        </label>
                                                                        <p
                                                                            style={{ cursor: 'pointer' }}
                                                                            onClick={() => setForgotPassModal(!forgotPassModal)}
                                                                            className="float-end text-white projectb-login-resetpassword"
                                                                        >
                                                                            Forgot Password?
                                                                        </p>

                                                                    </div>
                                                                </div>
                                                                <div className="text-center">
                                                                    <button
                                                                        type="submit"
                                                                        className="btn btn-white btn-hover w-100"
                                                                    >
                                                                        Sign In
                                                                    </button>
                                                                </div>
                                                            </Form>
                                                            <div className="mt-4 text-center">
                                                                <p className="mb-0">
                                                                    Don't have an account ?{" "}
                                                                    <Link
                                                                        to="/signup"
                                                                        className="fw-medium text-white text-decoration-underline"
                                                                    >
                                                                        {" "}
                                                                        Sign Up{" "}
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
            </div>
        </Aux>
    );
};

const mapStateToProps = (state) => {
    return {
        // user login state details
        loginLoading: state.userLogin.loginLoading,
        loginFail: state.userLogin.loginFail,

        // password reset state details
        forgotPassLoading: state.userLogin.loginLoading,
        forgotPassSuccess: state.userLogin.forgotPassSuccess,
        forgotPassFail: state.userLogin.forgotPassFail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (username, password, remember) => dispatch(userLogin(username, password, remember)),
        onUserForgotPassword: (forgotEmail) => dispatch(userForgotPassword(forgotEmail))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
