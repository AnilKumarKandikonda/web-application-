import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot, faWallet, faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, CardBody } from 'reactstrap';

const JobProfile = (props) => {
    return (
        <Aux>
            <div className={"candidate-list-box card mt-2"} onClick={() => props.jobsProfileClicked("123")}>
                <CardBody className="p-2">
                    <Row className="align-items-center">
                        <Col sm={12}>
                            <div className="candidate-list-content mt-3 mt-lg-0">
                                <h5 className="fs-17 mb-0">
                                    company position
                                </h5>
                                <p className="mb-1 fs-14 projectb-mainnetwwork-completedesignation">
                                    {" "}
                                    <span className="projectb-mainnetwwork-designation">Company name</span>
                                </p>
                                <ul className="list-inline mb-0 text-muted fs-13">
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                                        location
                                    </li>
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faWallet} />{" "}
                                        salary offered in range or number
                                    </li>
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faCalendar} />{" "}
                                        posted date
                                    </li>
                                </ul>
                                <p className="mb-0 fs-13">experience: 3+ years</p>
                                <span
                                    className={`badge bg-primary-subtle text-primary fs-10 mt-0 p-1`}
                                >
                                    all tags sepapated by each span element
                                </span>
                            </div>
                        </Col>


                    </Row>
                    <div className="featured-label fs-12">
                        <span className="featured">
                            hlf
                        </span>
                    </div>
                </CardBody>
            </div>
        </Aux>
    )
}

export default JobProfile;