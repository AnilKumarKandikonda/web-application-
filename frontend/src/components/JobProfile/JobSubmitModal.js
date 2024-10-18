import React from "react";
import Aux from '../../hoc/Auxilliary/Auxilliary';
import {
    Modal,
    ModalBody, ModalHeader, Input, Row, Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileImport
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const JobSubmitModal = (props) => {
    console.log('modal with modal');
    return (
        <Aux>
            <Modal
                isOpen={props.submitmodal}
                toggle={props.submitmodalToggle}
                role="dialog"
                centered
                scrollable
                className="projectb-networkmodal-modal"
            >
                <ModalHeader className="p-2 text-primary" toggle={props.submitmodalToggle}>Modal title</ModalHeader>
                <ModalBody className="p-4">
                    <div className="auth-content">
                        <div className="w-100">
                            <div className="candidate-education-details mt-4 pt-0">
                                <label>number 1</label>
                                <Input
                                    type="text"
                                    // value={eceDetail?.title}
                                    className="form-control projectb-basemodal-input mb-2"
                                    id="titleinput"
                                    placeholder="Full Name"
                                    onChange={(event) => props.updateJobSubmitQuestions({
                                        ...{
                                            id: 1,
                                            question: 'question 1',
                                            answer: ''
                                        }, answer: event.target.value
                                    })}
                                    required
                                />
                                <Row>
                                    <Col sm={8}>
                                        <div style={{ padding: '10px' }}>
                                            <NavLink to="#" className="projectb-profile-resumedownload">{props.resumeFileName === '' ? 'No Resume' : props.resumeFileName}</NavLink>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div style={{ height: '100%' }}>
                                            <Input
                                                type="file"
                                                ref={props.resumeFileRef}
                                                style={{ display: 'none' }}
                                                accept=".txt, .pdf, .docx"
                                                onChange={props.handleFileChange}
                                            />
                                            <button onClick={props.resumeReplaceClick} className="btn btn-primary w-100">Replace{" "}
                                                <FontAwesomeIcon icon={faFileImport} style={{ fontSize: '110%' }} /></button>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="projectb-jobsubmitmodal-footerbuttons">
                                    <div>
                                        <p className="text-danger projectb-jobsubmitmodal-cancelbutton" onClick={props.closeJobSubmitModal}>
                                            Cancel
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-primary" onClick={props.submitJobFromModal}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default JobSubmitModal;