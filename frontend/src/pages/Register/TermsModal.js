import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Modal,
    ModalBody, ModalHeader, Row, Col
} from "reactstrap";


const TermsModal = (props) => {
    return (
        <Aux>
            <Modal
                isOpen={props.modal}
                toggle={props.modalToggle}
                role="dialog"
                centered
                scrollable
                className="projectb-networkmodal-modal"
            >
                <ModalHeader className="p-2 text-primary" toggle={props.modalToggle}>Terms & Conditions</ModalHeader>
                <ModalBody className="p-4">
                    {/* <div className="auth-content">
                        termsn and consitions
                    </div> */}
                    <Row>
                        <Col xm={4}></Col>
                        <Col xm={4}>
                            <div>
                                <button className="btn btn-danger btn-hover w-100" onClick={props.modalToggle}>Reject</button>
                            </div>
                        </Col>
                        <Col xm={4}>
                            <div>
                                <button className="btn btn-success btn-hover w-100" onClick={() => props.handleTermsConditions('termsConditions', true)}>Accept</button>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default TermsModal;