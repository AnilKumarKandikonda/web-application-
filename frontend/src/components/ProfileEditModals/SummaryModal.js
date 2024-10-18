import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Modal,
    ModalBody, ModalHeader, Row, Col,Form
} from "reactstrap";
const SummaryModal = (props) => {
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
                <ModalHeader className="p-2 text-primary" toggle={props.modalToggle}>Summary</ModalHeader>
                <ModalBody className="p-4">
                    <div className="auth-content">
                        <div className="w-100">
                            <div className="candidate-education-details mt-4 pt-0">
                                <Form onSubmit={props.userSummarySubmit} className="auth-form">
                                    <Row>
                                        <Col>
                                            {/* 
                                    max of 150 words and cannot be more than that, throw or dipslay error if it exceeds.
                                     */}
                                            <textarea rows={4} style={{ width: '100%' }}
                                                value={props.userSummary}
                                                onChange={e => props.setUserSummary(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <button type="submit" className="btn btn-primary rounded-pill text-centered">
                                        Save
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default SummaryModal;