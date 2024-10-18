import React, { useState } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import Alert from "../../components/Alerts/Alert";
import {
    Input,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Label
} from "reactstrap";

const ForgotPassword = ({ modal, setModal, formFocus, forgotPassHandler,errorMessage,successMessage }) => {
    const [email, setEmail] = useState('');
    return (
        <Aux>
            <Modal
                isOpen={modal}
                toggle={() => setModal(!modal)}
                role="dialog"
                centered
            >
                <ModalBody className="p-5">
                    <div className="position-absolute end-0 top-0 p-3">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setModal(!modal)}
                        ></button>
                    </div>
                    <div className="auth-content">
                        <div className="w-100">
                            <div className="text-center mb-4">
                                {errorMessage && <Alert message={errorMessage} contactLink={true} alertIcon={true} />}
                                {successMessage && <Alert message={successMessage} contactLink={true} alertIcon={true} />}
                                <h5>Forgot Password</h5>
                                <p className="text-muted">
                                    Reset your password here.
                                </p>
                            </div>
                            <Form onSubmit={(event) => forgotPassHandler(event, email)} className="auth-form">
                                <FormGroup className="mb-3">
                                    <Label
                                        htmlFor="emailInput"
                                        className="form-label"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder="Enter your email"
                                        innerRef={formFocus}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </FormGroup>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Forgot Password
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )

}

export default ForgotPassword;