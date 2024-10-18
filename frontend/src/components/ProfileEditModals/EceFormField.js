import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Col, Row, Input, Modal,
    ModalBody, ModalHeader
} from 'reactstrap';
import Select from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMinus
} from "@fortawesome/free-solid-svg-icons";

const EceFormField = ({ modal, modalToggle, modalType, eceDetail, updateEceModalDetails, handleremoveAnotherField, deleteField }) => {

    return (
        <Aux>
            <Modal
                isOpen={modal}
                toggle={modalToggle}
                role="dialog"
                centered
                scrollable
                className="projectb-networkmodal-modal"
            >
                <ModalHeader className="p-2 text-primary" toggle={modalToggle}>{modalType}</ModalHeader>
                <ModalBody className="p-4">
                    <div className="auth-content">
                        <div>
                            <div>
                                <h6>Experience</h6>
                                {deleteField && <div style={{ cursor: 'pointer' }} onClick={() => handleremoveAnotherField(eceDetail)} className="text-danger">
                                    delete <FontAwesomeIcon icon={faMinus} /></div>}
                            </div>

                            <Row className="mb-2">
                                <Col>
                                    <label className="fs-14">Title<span className="text-danger">*</span></label>
                                    <Input
                                        type="text"
                                        value={eceDetail?.title}
                                        className="form-control projectb-basemodal-input mb-2"
                                        id="titleinput"
                                        placeholder="Full Name"
                                        onChange={(event) => updateEceModalDetails({ ...eceDetail, title: event.target.value })}
                                        required
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <label className="fs-14">Subtitle<span className="text-danger">*</span></label>
                                    <Input
                                        type="text"
                                        value={eceDetail?.subtitle}
                                        className="form-control projectb-basemodal-input mb-2"
                                        id="titleinput"
                                        placeholder="Full Name"
                                        onChange={(event) => updateEceModalDetails({ ...eceDetail, subtitle: event.target.value })}
                                        required
                                    />
                                </Col>
                            </Row>
                            <div>
                                <Row className="mb-1">
                                    <Col>
                                        <label className="fs-14">Select Course</label>
                                        <Select
                                            className="projectb-select-container"
                                            classNamePrefix="projectb-select"
                                            defaultValue={eceDetail?.subtitle}
                                            onChange={(event) => updateEceModalDetails({ ...eceDetail, subtitle: event.target.value })}
                                            placeholder="Select Tags"
                                            isMulti
                                            isLoading={false}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>
                                        <Input
                                            type="text"
                                            value={eceDetail?.subtitle}
                                            className="form-control projectb-basemodal-input mb-2"
                                            id="titleinput"
                                            placeholder="Full Name"
                                            onChange={(event) => updateEceModalDetails({ ...eceDetail, subtitle: event.target.value })}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <Row className="mb-2">
                                <Col>
                                    <label className="fs-14">Start Date<span className="text-danger">*</span></label>
                                    <div style={{ display: 'flex' }}>
                                        <div >
                                            <Input
                                                type="text"
                                                value={eceDetail?.title}
                                                className="form-control projectb-basemodal-input mb-2"
                                                id="titleinput"
                                                placeholder="MM"
                                                onChange={(event) => updateEceModalDetails({ ...eceDetail, title: event.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="text"
                                                value={eceDetail?.title}
                                                className="form-control projectb-basemodal-input mb-2"
                                                id="titleinput"
                                                placeholder="YYYY"
                                                onChange={(event) => updateEceModalDetails({ ...eceDetail, title: event.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <label className="fs-14">End Date</label>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <Input
                                                type="text"
                                                value={eceDetail?.title}
                                                className="form-control projectb-basemodal-input mb-2"
                                                id="titleinput"
                                                placeholder="MM"
                                                onChange={(event) => updateEceModalDetails({ ...eceDetail, title: event.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="text"
                                                value={eceDetail?.title}
                                                className="form-control projectb-basemodal-input mb-2"
                                                id="titleinput"
                                                placeholder="YYYY"
                                                onChange={(event) => updateEceModalDetails({ ...eceDetail, title: event.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <label className="fs-14">Country<span className="text-danger">*</span></label>
                                    <Select
                                        className="projectb-select-container"
                                        classNamePrefix="projectb-select"
                                        defaultValue={eceDetail?.country}
                                        onChange={(event) => updateEceModalDetails({ ...eceDetail, country: event.target.value })}
                                        placeholder="Select Country"

                                        isMulti={false}
                                        isLoading={false}
                                    />
                                </Col>
                                <Col >
                                    <label className="fs-14">State<span className="text-danger">*</span></label>
                                    <Select
                                        className="projectb-select-container"
                                        classNamePrefix="projectb-select"
                                        defaultValue={eceDetail?.state}
                                        onChange={(event) => updateEceModalDetails({ ...eceDetail, state: event.target.value })}
                                        placeholder="Select State"

                                        isMulti={false}
                                        isLoading={false}
                                    />
                                </Col>

                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <label className="fs-14">Description</label>
                                    <textarea rows={4} style={{ width: '100%' }}
                                        value={eceDetail?.title}
                                        onChange={(event) => updateEceModalDetails({ ...eceDetail, title: event.target.value })}
                                    />
                                </Col>
                            </Row>
                            <hr />
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default EceFormField;