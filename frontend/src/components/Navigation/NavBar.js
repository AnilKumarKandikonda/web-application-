import React, { useState, useCallback, useRef, useEffect } from "react";
import {
    Container,
    NavbarToggler,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";

import {
    faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import withRouter from "../WithRouter/WithRouter";


const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    //user Profile Dropdown
    const [userProfile, setUserProfile] = useState(false);
    const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);
    const backDropClicked = useCallback(() => {
        setIsOpen(false);
        if (sidebarRef.current) {
            sidebarRef.current.classList.remove('projectb-menusidebar-sidebar-open');
            sidebarRef.current.classList.add('projectb-menusidebar-sidebar-close');
        }
    }, []);
    const sidebarCrossClick = useCallback(() => {
        setIsOpen(false);
        if (sidebarRef.current) {
            sidebarRef.current.classList.remove('projectb-menusidebar-sidebar-open');
            sidebarRef.current.classList.add('projectb-menusidebar-sidebar-close');
        }
    }, []);

    useEffect(() => {
        // console.log(isOpen)
        if (isOpen) {
            sidebarRef.current.classList.remove('projectb-menusidebar-sidebar-close');
            sidebarRef.current.classList.add('projectb-menusidebar-sidebar-open');
            // sidebarRef.current.style.display="block";
        }
        else {
            sidebarRef.current.classList.add('projectb-menusidebar-sidebar-close');
            sidebarRef.current.classList.remove('projectb-menusidebar-sidebar-open');
            // sidebarRef.current.style.display="none";
        }
    }, [isOpen]);

    //scroll navbar
    const [navClass] = useState(true);

    return (
        <React.Fragment>
            <SideBar backDropClicked={backDropClicked} sidebarCrossClick={sidebarCrossClick}
                sidebarRef={sidebarRef}
                backdropOpen={isOpen}
                showSidebar={isOpen} />
            
            <nav
                className={"navbar navbar-expand-lg fixed-top sticky p-0 projectb-navbar-hideshow " + navClass}
                id="projectb-navbar-scroll"
            >
                <Container fluid className="custom-container projectb-navbar-container">
                    <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
                        <img src="" height="22" alt="" className="logo-dark" />
                    </Link>


                    <ul className="navbar-nav mx-auto navbar-center projectb-navbar-menuitems">

                        <NavItem>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </NavItem>
                    </ul>

                    <ul className="header-menu list-inline d-flex align-items-center mb-0 projectb-navbar-profile">
                        <NavbarToggler
                            className="me-3"
                            type="button"
                            style={{ marginRight: '20px' }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <i className="mdi mdi-menu"></i>
                        </NavbarToggler>
                        <div className="header-item noti-icon position-relative" style={{ marginRight: '20px' }}>
                            <FontAwesomeIcon icon={faComment} className="fs-22" />
                            <div className="count position-absolute">3</div>
                        </div>

                        <Dropdown
                            onClick={() => { setUserProfile(!userProfile); setIsOpen(false); }}
                            isOpen={userProfile && !isOpen}
                            toggle={dropDownuserprofile}
                            className="list-inline-item"
                        >
                            <DropdownToggle
                                to="#"
                                className="header-item"
                                id="userdropdown"
                                type="button"
                                tag="a"
                                aria-expanded="false"
                            >
                                <img
                                    src=""
                                    alt="mdo"
                                    width="35"
                                    height="35"
                                    className="rounded-circle me-1"
                                />{" "}
                                <span className="d-none d-md-inline-block fw-medium">
                                    Hi, Jennifer
                                </span>
                            </DropdownToggle>
                            <DropdownMenu
                                className="dropdown-menu-end"
                                aria-labelledby="userdropdown"
                                end
                            >
                                <li>
                                    <Link className="dropdown-item" to="/managejobs">
                                        Manage Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/bookmarkjobs">
                                        Bookmarks Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/myprofile">
                                        My Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/signout">
                                        Logout
                                    </Link>
                                </li>
                            </DropdownMenu>
                        </Dropdown>
                    </ul>
                </Container>
            </nav>
        </React.Fragment>
    );
};

export default withRouter(NavBar);
