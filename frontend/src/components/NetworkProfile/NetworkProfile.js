import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap, faBuilding
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, CardBody } from 'reactstrap';

const NetworkProfile = (props) => {
    return (
        <Aux>
            <div className={"candidate-list-box card mt-2"} onClick={() => props.networkProfileClicked({ id: 123 })}>
                <CardBody className="p-2">
                    <Row className="align-items-center">
                        <Col sm={12}>
                            <div className="candidate-list-content mt-3 mt-lg-0">
                                <h5 className="fs-17 mb-0">
                                    Candidate name
                                </h5>
                                <p className="mb-1 fs-14 projectb-mainnetwwork-completedesignation">
                                    {" "}
                                    <span className="projectb-mainnetwwork-designation">Candidate designation</span>, country, state
                                </p>
                                <ul className="list-inline mb-0 text-muted fs-13">
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faGraduationCap} />{" "}
                                        user last graduation
                                    </li>
                                    <li className="list-item">
                                        <FontAwesomeIcon icon={faBuilding} />{" "}
                                        Candidate company
                                    </li>
                                </ul>
                                <span
                                    className={`badge bg-primary-subtle text-primary fs-10 mt-0 p-1`}
                                >
                                    top 3 skills
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

export default NetworkProfile;