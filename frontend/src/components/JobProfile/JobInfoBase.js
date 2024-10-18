import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { Col, Row, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare, faLocationDot,
    faGlobe, faCalendar, faWallet, faUser
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const JobInfoBase = (props) => {
    return (
        <Aux>
            <div className={props.jobClassName}>
                <Row>
                    <Col sm={12}>
                        <div className="projectb-networkinfo-flexbox">
                            <div className="projectb-networkinfo-personal">
                                <h5 className="fs-17 mb-0">
                                    Position name
                                </h5>
                                <p className="mb-1">Company Name</p>
                                <ul className="list-inline mb-0 text-muted fs-13">
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faGlobe} />{" "}
                                        <NavLink to="">website</NavLink>
                                    </li>
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faCalendar} />{" "}
                                        psoted date
                                    </li>
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                                        user location, country
                                    </li>
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faWallet} />{" "}
                                        salary
                                    </li>
                                    <li className="list-item">
                                        <NavLink to="https://www.google.com" target="_blank">
                                            <FontAwesomeIcon icon={faUser} />{" "}
                                            Posted by
                                        </NavLink>
                                    </li>
                                </ul>
                                <span
                                    className={`badge bg-success-subtle text-dark fs-10 mt-0 p-1`}
                                >
                                    looking for job or hiring or something
                                </span>
                            </div>
                        </div>
                        <button className="btn btn-primary projectb-networkinfo-messagebutton" type="button" onClick={() => props.jobSubmitHandler({id:123})}>
                            Apply{" "}<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </button>
                        <button className="btn btn-primary projectb-networkinfo-messagebutton" type="button">
                            Apply{" "}<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </button>
                    </Col>
                </Row>
                <hr />
                <Card className="candidate-details ms-lg-2 mt-2 mt-lg-0 projectb-networkinfo-profilebody">
                    <span
                        className={`badge bg-success-subtle text-dark fs-10 mt-0 p-1`}
                    >
                        NOTE: exprience need to apply for this position
                    </span>
                    <span
                        className={`badge bg-warning-subtle text-dark fs-10 mt-0 p-1`}
                    >
                        NOTE: number of people you are hiring for
                    </span>
                    <CardBody className="p-2 candidate-personal-detail">
                        <div>
                            <h6 className="fs-17 fw-semibold mb-2 projectb-general-titlebar">About Us</h6>
                            <p className="text-muted mb-2">
                                Very well thought out and articulate communication. Clear
                                milestones, deadlines and fast work. Patience. Infinite
                                patience. about the compnay should be coming from the company table.
                            </p>
                        </div>
                    </CardBody>
                </Card>

            </div>
        </Aux>
    )
}

export default JobInfoBase;