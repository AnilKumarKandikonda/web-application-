import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Modal,
    ModalBody, ModalHeader, Form, Input, Row, Col
} from "reactstrap";
import Select from 'react-select';

const BaseProfileModal = (props) => {
    // console.log(props.profile)
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
                <ModalHeader className="p-2 text-primary" toggle={props.modalToggle}>Basic Details</ModalHeader>
                <ModalBody className="p-4">
                    <div className="auth-content">
                        <div className="w-100">
                            <div className="candidate-education-details mt-4 pt-0">
                                <Form onSubmit={props.userDetailsSubmit} className="auth-form">
                                    <Row className="mb-2">
                                        <Col>
                                            <label>First Name<span className="text-danger">*</span></label>
                                            <Input
                                                type="text"
                                                value={props.profile?.firstName}
                                                className="form-control projectb-basemodal-input mb-2"
                                                id="titleinput"
                                                placeholder="Full Name"
                                                onChange={(event) => props.setUserProfile({ ...props.profile, firstName: event.target.value })}
                                                required
                                            />
                                        </Col>
                                        <Col>
                                            <label>Last Name<span className="text-danger">*</span></label>
                                            <Input
                                                type="text"
                                                value={props.profile?.lastName}
                                                className="form-control projectb-basemodal-input mb-2"
                                                id="titleinput"
                                                placeholder="Full Name"
                                                onChange={(event) => props.setUserProfile({ ...props.profile, lastName: event.target.value })}
                                                required
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label>Display Position</label>
                                            <Input
                                                type="text"
                                                value={props.profile?.displayPosition}
                                                className="form-control projectb-basemodal-input mb-2"
                                                id="titleinput"
                                                placeholder="Full Name"
                                                onChange={(event) => props.setUserProfile({ ...props.profile, displayPosition: event.target.value })}
                                                required
                                            />
                                        </Col>

                                    </Row>

                                    <Row className="mb-2">
                                        <Col>
                                            <label>Country<span className="text-danger">*</span></label>
                                            <Select
                                                className="projectb-select-container"
                                                classNamePrefix="projectb-select"
                                                defaultValue={props.profile?.country}
                                                onChange={(event) => props.setUserProfile({ ...props.profile, country: event.target.value })}
                                                placeholder="Select Country"
                                                options={props.countryOptions}
                                                isMulti={false}
                                                isLoading={false}
                                            />
                                        </Col>
                                        <Col>
                                            <label>State<span className="text-danger">*</span></label>
                                            <Select
                                                className="projectb-select-container"
                                                classNamePrefix="projectb-select"
                                                defaultValue={props.profile?.state}
                                                onChange={(event) => props.setUserProfile({ ...props.profile, state: event.target.value })}
                                                placeholder="Select State"
                                                options={props.stateOptions}
                                                isMulti={false}
                                                isLoading={false}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2">
                                        <Col>
                                            <label>Tags</label>
                                            <Select
                                                className="projectb-select-container"
                                                classNamePrefix="projectb-select"
                                                defaultValue={props.profile?.userTags}
                                                onChange={(event) => props.setUserProfile({ ...props.profile, userTags: [...props.profile.userTags,event.target.value] })}
                                                placeholder="Select Tags"
                                                options={props.userTags}
                                                isMulti
                                                isLoading={false}
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

export default BaseProfileModal;