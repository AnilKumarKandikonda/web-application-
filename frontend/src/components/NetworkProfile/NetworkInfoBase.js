import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { Col, Row, Card, CardBody } from 'reactstrap';
import femaleIcon from '../../assets/images/femaleicon.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare, faLocationDot, faArrowRightLong, faLink
} from "@fortawesome/free-solid-svg-icons";
import NetworkUserCard from "../../components/UserCards/NetworkUserCard";
import SkillCard from "../../components/UserCards/SkillCard";
import NetworkModal from "../../components/NetworkProfile/NetworkModal";
import { NavLink } from "react-router-dom";


const NetworkInfoBase = ({ modalWindowHandler, modalToggle, modal, modalType, networkinfo, networkClassName }) => {
    return (
        <Aux>
            <div className={networkClassName}>
                <NetworkModal modal={modal} modalToggle={modalToggle} />
                <Row>
                    <Col sm={12}>
                        <div className="projectb-networkinfo-flexbox">
                            <div className="projectb-networkinfo-image">
                                <img src={femaleIcon} alt="woman icon" className="projectb-networkinfo-icon" />
                                <div>
                                    <NavLink to="#" target="_blank" style={{ color: 'orangered' }}>website{" "}<FontAwesomeIcon icon={faLink} />{" "}</NavLink>
                                </div>
                            </div>
                            <div className="projectb-networkinfo-personal">
                                <h5 className="fs-17 mb-0">
                                    Candidate name
                                </h5>
                                <p className="mb-1">position title</p>
                                <ul className="list-inline mb-0 text-muted fs-13">
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                                        user location, country
                                    </li>
                                </ul>
                                <span
                                    className={`badge bg-success-subtle text-dark fs-10 mt-0 p-1`}
                                >
                                    looking for job or hiring or something
                                </span>
                            </div>
                        </div>
                        <button className="btn btn-primary projectb-networkinfo-messagebutton" type="button">
                            Message{" "}<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </button>
                    </Col>
                </Row>
                <hr />
                <Card className="candidate-details ms-lg-2 mt-2 mt-lg-0 projectb-networkinfo-profilebody">
                    <CardBody className="p-2 candidate-personal-detail">
                        <div>
                            <h6 className="fs-17 fw-semibold mb-2 projectb-general-titlebar">About Me</h6>
                            <p className="text-muted mb-2">
                                Very well thought out and articulate communication. Clear
                                milestones, deadlines and fast work. Patience. Infinite
                                patience. No shortcuts. Even if the client is being careless.
                                Some quick example text to build on the card title and bulk the
                                card's content Moltin gives you platform.
                            </p>
                        </div>
                        {/* USER EDUCATION */}
                        <div>
                            <div className="candidate-education-details mt-4 pt-0">
                                <h6 className="fs-17 fw-bold mb-0 projectb-general-titlebar">Education</h6>
                                <NetworkUserCard />
                            </div>
                            <p className="m-0 projectb-networkinfo-more" style={{ cursor: 'pointer' }}
                                onClick={() => modalWindowHandler('education')}
                            >...more{" "}<FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>


                        {/* USER EXPERIENCE */}
                        <div>
                            <div className="candidate-education-details mt-4 pt-0">
                                <h6 className="fs-17 fw-bold mb-0 projectb-general-titlebar">Experience</h6>
                                <NetworkUserCard />
                            </div>
                            <p className="m-0 projectb-networkinfo-more" style={{ cursor: 'pointer' }}
                                onClick={() => modalWindowHandler('experience')}
                            >...more{" "}<FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>


                        {/* USER SKILLS */}
                        <div>
                            <div className="mt-4 pt-0">
                                <h6 className="fs-17 fw-bold mb-0 projectb-general-titlebar">Skills</h6>
                                <div className="d-flex flex-wrap align-items-start gap-1">
                                    <SkillCard />
                                </div>
                            </div>
                        </div>
                        {/* USER CERTIFICATIONS */}
                        <div>
                            <div className="candidate-education-details mt-4 pt-0">
                                <h6 className="fs-17 fw-bold mb-0 projectb-general-titlebar">Certifications</h6>
                                <NetworkUserCard />
                            </div>
                            <p className="m-0 projectb-networkinfo-more" style={{ cursor: 'pointer' }}
                                onClick={() => modalWindowHandler('certification')}
                            >...more{" "}<FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>
                        {/* OTHER DETAILS */}
                        <div>
                            <h6 className="fs-17 fw-semibold mb-2 projectb-general-titlebar">Other Details</h6>
                            <p className="text-muted mb-2">
                                Very well thought out and articulate communication. Clear
                                milestones, deadlines and fast work. Patience. Infinite
                                patience. No shortcuts. Even if the client is being careless.
                                Some quick example text to build on the card title and bulk the
                                card's content Moltin gives you platform.
                            </p>
                        </div>
                    </CardBody>
                </ Card>

            </div>
        </Aux>
    )
}

export default NetworkInfoBase;