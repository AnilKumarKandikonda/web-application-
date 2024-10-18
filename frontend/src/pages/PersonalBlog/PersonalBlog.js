import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDownload, faTasks, faGraduationCap, faBriefcase, faCertificate
} from "@fortawesome/free-solid-svg-icons";
import SkillsModal from "./SkillsModal";
import EceModal from "./EceModal";
import { connect } from "react-redux";
import { fetchUserBlogDetails } from './actions/blogAction';


const PersonalBlog = ({ onFetchUserBlogDetails, userDetails, userDetailsError }) => {
    const { blogpath } = useParams();
    const [showSkillsModal, setShowSkillsModal] = useState(false);
    const [eceModal, setEceModal] = useState(false);
    const [modalData, setModalData] = useState(['skill 1', 'skill 2', 'skill 3', 'skill 4', 'skill 5']);
    const [filteredData, setFilteredData] = useState(['skill 1', 'skill 2', 'skill 3', 'skill 4', 'skill 5']);
    const [modalType, setModalType] = useState('');

    const handleInternalLink = (id, modalType) => {
        if (id === 144) {
            setShowSkillsModal(true);
            setModalData(['skill 1', 'skill 2', 'skill 3', 'skill 4', 'skill 5']);
        } else {
            setModalType(modalType);
            setEceModal(true);
        }
    }

    useEffect(() => {
        onFetchUserBlogDetails(blogpath);
    }, []);

    useEffect(() => {
        console.log('user details...')
    }, [userDetails, userDetailsError]);

    const closeInternalLink = () => {
        setModalData([]);
        setShowSkillsModal(false);
        setEceModal(false);
        setModalType('');
    }

    const handleInputField = (skillSearch) => {
        const filteredData = modalData.filter(item => item.toLowerCase().includes(skillSearch.toLowerCase()));
        setFilteredData(filteredData);
    }
    return (
        <div className="projectb-personalblog-body" style={{ background: 'lightblue' }}>
            {showSkillsModal && <SkillsModal modal={showSkillsModal} modalToggle={closeInternalLink} modalData={filteredData} handleInputField={handleInputField} />}
            {eceModal && <EceModal modal={eceModal} modalToggle={closeInternalLink}
                eceModalDetails={modalData} modalType={modalType}
            />}
            <Container className="projectb-personalblog-container bg-primary">
                <div className="p-4 bg-primary">
                    <Row>
                        <Col md={4}>
                            <div className="projectb-personalblog-imagebg">
                                <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" alt="blog" className="projectb-personalblog-image" />
                            </div>
                        </Col>
                        <Col md={8}>
                            <div style={{}}>
                                <h1 style={{}}>Anil Kumar</h1>
                                <h3 style={{}}>Sub title</h3>
                                <hr style={{}} />
                            </div>
                            <div>
                                <ul>
                                    <li><NavLink to={""} style={{ color: 'black' }} target="_blank"><FontAwesomeIcon icon={faGraduationCap} /></NavLink></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="p-3 m-1">
                    <Row>
                        <Col sm={3} className="text-center">
                            <span className="badge bg-success-subtle text-dark fs-15 projectb-personalblog-internallink" onClick={() => handleInternalLink(144, 'Skills')}>
                                <FontAwesomeIcon icon={faTasks} />&nbsp;Skills
                            </span>
                        </Col>
                        <Col sm={3} className="text-center">
                            <span className="badge bg-success-subtle text-dark fs-15 projectb-personalblog-internallink" onClick={() => handleInternalLink(145, 'Education')}>
                                <FontAwesomeIcon icon={faGraduationCap} />&nbsp;Education
                            </span>
                        </Col>
                        <Col sm={3} className="text-center">
                            <span className="badge bg-success-subtle text-dark fs-15 projectb-personalblog-internallink" onClick={() => handleInternalLink(146, 'Experience')}>
                                <FontAwesomeIcon icon={faBriefcase} />&nbsp;Experience
                            </span>
                        </Col>
                        <Col sm={3} className="text-center">
                            <span className="badge bg-success-subtle text-dark fs-15 projectb-personalblog-internallink" onClick={() => handleInternalLink(147, 'Certification')}>
                                <FontAwesomeIcon icon={faCertificate} />&nbsp;Certifications
                            </span>
                        </Col>
                    </Row>

                </div>
                <hr />
                <div className="p-3 m-1">
                    <div style={{}}>
                        <button className="btn btn-success"><FontAwesomeIcon icon={faDownload} />&nbsp;&nbsp;{'text of choice'}</button>
                    </div>
                </div>
                <div className="p-3 m-1">
                    <div style={{}}>
                        user information
                    </div>
                </div>
                <div className="p-3 m-1">
                    <div style={{}}>
                        <button className="btn btn-success"><FontAwesomeIcon icon={faDownload} />&nbsp;&nbsp;{'text of choice'}</button>
                    </div>
                </div>
            </Container>

        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.blog.userDetails,
        userDetailsLoading: state.blog.userDetailsLoading,
        userDetailsError: state.blog.userDetailsError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchUserBlogDetails: (blogpath) => dispatch(fetchUserBlogDetails(blogpath)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalBlog);