import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { NavLink } from "react-router-dom";
import { NavItem, Container, Card, Nav, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import BackDrop from "../BackDrop/BackDrop";

const SideBar = (props) => {

    return (
        <Aux>
            <BackDrop backDropClicked={props.backDropClicked} backdropOpen={props.backdropOpen}/>
            <Card className={"projectb-menusidebar-sidebar " }
                innerRef={props.sidebarRef}
                id="projectb-sidebar">
                <div className="page-content">
                    <Container>
                        <div className="projectb-menusidebar-closeicon">
                            <FontAwesomeIcon icon={faXmark} className="text-align-right p-1"
                                onClick={props.sidebarCrossClick} style={{ cursor: 'pointer' }} />
                        </div>
                        <Container>
                            <Row>
                                <Col sm={12}>
                                    <NavLink className="projectb-menusidebar-underline">
                                        <span className="d-none d-md-inline-block fw-medium projectb-menusidebar-name">
                                            Hi, Jennifer
                                        </span>
                                    </NavLink>
                                </Col>
                                <Col sm={12}>
                                    <span>
                                        description of what
                                    </span>
                                </Col>
                            </Row>
                            <hr style={{ marginTop: '5px', marginBottom: '5px' }} />
                        </Container>
                        <Nav vertical className="list-unstyled projectb-menusidebar-list">
                            <NavItem className="projectb-menusidebar-listitem">
                                <NavLink to={"/about"}
                                    className="fw-low text text-decoration-none projectb-menusidebar-listitem-navlink">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-30 projectb-menusidebar-listitem-icon" />
                                    <span className="projectb-menusidebar-listitem-text">About-Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="projectb-menusidebar-listitem">
                                <NavLink to={"/about"}
                                    className="fw-low text text-decoration-none projectb-menusidebar-listitem-navlink">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-30 projectb-menusidebar-listitem-icon" />
                                    <span className="projectb-menusidebar-listitem-text">About-Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="projectb-menusidebar-listitem">
                                <NavLink to={"/about"}
                                    className="fw-low text text-decoration-none projectb-menusidebar-listitem-navlink">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-30 projectb-menusidebar-listitem-icon" />
                                    <span className="projectb-menusidebar-listitem-text">About-Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="projectb-menusidebar-listitem">
                                <NavLink to={"/about"}
                                    className="fw-low text text-decoration-none projectb-menusidebar-listitem-navlink">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-30 projectb-menusidebar-listitem-icon" />
                                    <span className="projectb-menusidebar-listitem-text">About-Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="projectb-menusidebar-listitem">
                                <NavLink to={"/about"}
                                    className="fw-low text text-decoration-none projectb-menusidebar-listitem-navlink">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-30 projectb-menusidebar-listitem-icon" />
                                    <span className="projectb-menusidebar-listitem-text">About-Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="projectb-menusidebar-listitem">
                                <NavLink to={"/about"}
                                    className="fw-low text text-decoration-none projectb-menusidebar-listitem-navlink">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-30 projectb-menusidebar-listitem-icon" />
                                    <span className="projectb-menusidebar-listitem-text">About-Us</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </div>
            </Card>
        </Aux>
    )
}

export default SideBar;