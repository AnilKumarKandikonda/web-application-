import React, { useState, useRef } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import femaleIcon from '../../assets/images/femaleicon.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit, faLocationDot, faFileImport, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {
    Col, Row, Card, CardBody, Container
} from 'reactstrap';
import NetworkUserCard from "../../components/UserCards/NetworkUserCard";
import NetworkModal from "../../components/NetworkProfile/NetworkModal";
import SkillCard from "../../components/UserCards/SkillCard";
import BaseProfileModal from "../../components/ProfileEditModals/BaseProfileModal";
import SummaryModal from "../../components/ProfileEditModals/SummaryModal";
import SkillsModal from "../../components/ProfileEditModals/SkillsModal";
import EceModal from "../../components/ProfileEditModals/EceModal";
import OtherDetailsModal from "../../components/ProfileEditModals/OtherDetailModal";
import EceFormField from "../../components/ProfileEditModals/EceFormField";

const Profile = () => {
    const [showBaseProfileModal, setShowBaseProfileModal] = useState(false);
    const [baseProfileDetails, setBaseProfileDetails] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        displayPosition: '',
        state: null,
        country: null,
        userTags: [],
        lookingFor: '',
        department: ''
    });
    // editing summary modal
    const [showSummaryModal, setShowSummaryModal] = useState(false);
    const [userSummary, setUserSummary] = useState('');

    // this is for education, certifications and experience
    const [editModalType, setEditModalType] = useState('');
    const [eceModal, setEceModal] = useState(false);
    const [showEceEditModal, setShowEceEditModal] = useState(false);
    const [eceSingleEditModalType, setEceSingleEditModalType] = useState('');
    const [eceModalDetails, setEceModalDetails] = useState([{
        id: 1,
        eduPrefix: '',
        title: '',
        subtitle: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        description: ''
    }]);


    // to edi thte skills model
    const [showSkillsModal, setShowSkillsModal] = useState(false);

    // to edit other details modal
    const [showOtherDetailsModal, setShowOtherDetailsModal] = useState(false);

    // for resume update and other stuff with resume
    const [resumeFileName, setResumeFileName] = useState('');
    const resumeFileRef = useRef(null);

    // this is when the user clicks on more option, this modal will work
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState('');

    //profile summary

    // when clicked on resume replace button. this will trigger
    const resumeReplaceClick = () => {
        resumeFileRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setResumeFileName(file.name);
    };

    // for more options window handler
    const modalWindowHandler = (type) => {
        setModalType(type);
        setModal(!modal);
    }
    const modalToggle = () => {
        setModal(!modal);
        if (modal === true) {
            setModalType('');

        }
    }

    // for education, certifications and experience modal handler
    const eceModalHandler = (type) => {
        setEditModalType(type);
        setEceModal(!modal);
    }
    const modalECEToggle = () => {
        setEceModal(!eceModal);
        if (eceModal === true) {
            setEditModalType('');
            // setEceModalDetails([]);
        }
    }

    // base profile modal toggle
    const baseProfileModalToggle = () => {
        setShowBaseProfileModal(!showBaseProfileModal);
    }

    // summary modal toggle
    const summaryModalToggle = () => {
        setShowSummaryModal(!showSummaryModal);
    }

    // skills modal toggle
    const skillsModalToggle = () => {
        setShowSkillsModal(!showSkillsModal);
    }

    // other details modal toggle
    const otherDetailsModalToggle = () => {
        setShowOtherDetailsModal(!showOtherDetailsModal);
    }
    // console.log(editModalType);

    // SUBMIT USER DETAILS
    const submitBaseProfileDetails = (event) => {
        event.preventDefault();
        console.log(baseProfileDetails);
    }

    // updating and submitting the ece details
    const updateEceDetails = (updatedDetails) => {
        const eceUpdatedDetails = eceModalDetails.map((item) => item.id === updatedDetails.id ? updatedDetails : item);
        setEceModalDetails(eceUpdatedDetails);
    }

    const submitEceDetails = (event) => {
        event.preventDefault();
        console.log(eceModalDetails);
    }

    const eceModalAddAnotherField = () => {
        const modalDetails = [...eceModalDetails, {
            id: eceModalDetails.slice(-1)[0].id + 1,
            eduPrefix: '',
            title: '',
            subtitle: '',
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
            description: ''
        }]
        setEceModalDetails(modalDetails);
    }

    const eceModalRemoveAnotherField = (eceDetail) => {
        // console.log('ece detail',eceDetail);
        const filteredEceDetails = eceModalDetails.filter(item => item.id !== eceDetail.id);
        setEceModalDetails(filteredEceDetails);
    }
    // console.log('last value',eceModalDetails.slice(-1));
    const eceModalEditClick = (data) => {
        console.log('clicked', data);
        setEceModal(false);
        setEditModalType('');
        setShowEceEditModal(!showEceEditModal);
        setEceSingleEditModalType(data);
    }
    const modalEceEditToggle = () => {
        setShowEceEditModal(!showEceEditModal);
        if (showEceEditModal === true) {
            setEceSingleEditModalType('');
            // setEceModalDetails([]);
        }
    }
    return (
        <Aux>
            <div className="projectb-profile-main">
                <NetworkModal modal={modal} modalToggle={modalToggle}
                    modalType={modalType} />

                <BaseProfileModal modal={showBaseProfileModal} modalToggle={baseProfileModalToggle}
                    profile={baseProfileDetails} setUserProfile={setBaseProfileDetails}
                    userDetailsSubmit={submitBaseProfileDetails} />
                <SummaryModal modal={showSummaryModal} modalToggle={summaryModalToggle}
                    userSummary={userSummary} setUserSummary={setUserSummary} />


                <EceModal modal={eceModal} modalToggle={modalECEToggle} modalType={editModalType}
                    eceModalDetails={eceModalDetails}
                    updateEceDetails={updateEceDetails} submitEceDetails={submitEceDetails}
                    handleAddAnotherField={eceModalAddAnotherField}
                    handleremoveAnotherField={eceModalRemoveAnotherField}
                    editNetworkUserCard={eceModalEditClick}
                />
                <EceFormField modal={showEceEditModal} modalToggle={modalEceEditToggle} modalType={eceSingleEditModalType} />

                <SkillsModal modal={showSkillsModal} modalToggle={skillsModalToggle} />
                <OtherDetailsModal modal={showOtherDetailsModal} modalToggle={otherDetailsModalToggle} />

                <section className="section">
                    <Container className="projectb-profile-container">
                        <div className="projectb-networkinfo-flexbox">
                            <div className="projectb-profile-image">
                                <img src={femaleIcon} alt="woman icon" className="projectb-profile-icon" />
                            </div>
                            <div className="projectb-networkinfo-personal">
                                <h5 className="fs-17 mb-0">
                                    Candidate name &nbsp;&nbsp;<FontAwesomeIcon icon={faEdit} className="projectb-profile-resumedownload"
                                        style={{ fontSize: '100%' }} onClick={() => setShowBaseProfileModal(!showBaseProfileModal)} />
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
                        <hr />

                    </Container>
                    <Container>
                        <Row >
                            <Col md={7}>
                                <Card className="card projectb-profile-resumecard">
                                    <Row>
                                        <Col sm={8}>
                                            <div style={{ padding: '10px' }}>
                                                <NavLink to="#" className="projectb-profile-resumedownload">{resumeFileName === '' ? 'No Resume' : resumeFileName}</NavLink>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div style={{ height: '100%' }}>
                                                <input
                                                    type="file"
                                                    ref={resumeFileRef}
                                                    style={{ display: 'none' }}
                                                    accept=".txt, .pdf, .docx"
                                                    onChange={handleFileChange}
                                                />
                                                <button onClick={resumeReplaceClick} className="btn btn-primary w-100">Replace{" "}
                                                    <FontAwesomeIcon icon={faFileImport} style={{ fontSize: '110%' }} /></button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                                <hr />
                                <Card className="candidate-details ms-lg-2 mt-2 mt-lg-0 projectb-networkinfo-profilebody">
                                    <CardBody className="p-2 candidate-personal-detail">
                                        <div>
                                            <div>
                                                <h6 className="fs-17 fw-semibold mb-2 projectb-general-titlebar" style={{ display: 'inline-block' }}>Summary&nbsp;&nbsp;</h6>
                                                <span className="projectb-networkinfo-more" onClick={() => setShowSummaryModal(!showSummaryModal)} style={{ cursor: 'pointer' }}>
                                                    <FontAwesomeIcon icon={faEdit} className="projectb-networkinfo-more" />edit</span>
                                            </div>
                                            <p className="text-muted mb-2">
                                                Very well thought out and articulate communication. Clear
                                                milestones, deadlines and fast work. Patience. Infinite
                                                patience. No shortcuts. Even if the client is being careless.
                                                Some quick example text to build on the card title and bulk the
                                                card's content Moltin gives you platform.
                                            </p>
                                        </div>
                                        {/* USER EXPERIENCE */}
                                        <div>
                                            <div className="candidate-education-details mt-4 pt-0">
                                                <div>
                                                    <h6 className="fs-17 fw-semibold mb-0 projectb-general-titlebar" style={{ display: 'inline-block' }}>Experience&nbsp;&nbsp;</h6>
                                                    <span className="projectb-networkinfo-more" onClick={() => eceModalHandler('experience')} style={{ cursor: 'pointer' }}>
                                                        <FontAwesomeIcon icon={faEdit} className="projectb-networkinfo-more" />edit</span>
                                                </div>
                                                <NetworkUserCard />
                                            </div>
                                            <p className="m-0 projectb-networkinfo-more" style={{ cursor: 'pointer' }}
                                                onClick={() => modalWindowHandler('experience')}
                                            >...more{" "}<FontAwesomeIcon icon={faArrowRightLong} /></p>
                                        </div>
                                        {/* USER EDUCATION */}
                                        <div>
                                            <div className="candidate-education-details mt-2 pt-0">
                                                <div>
                                                    <h6 className="fs-17 fw-semibold mb-0 projectb-general-titlebar" style={{ display: 'inline-block' }}>Education&nbsp;&nbsp;</h6>
                                                    <span className="projectb-networkinfo-more" onClick={() => eceModalHandler('education')} style={{ cursor: 'pointer' }}>
                                                        <FontAwesomeIcon icon={faEdit} className="projectb-networkinfo-more" />edit</span>
                                                </div>

                                                <NetworkUserCard />
                                            </div>
                                            <p className="m-0 projectb-networkinfo-more" style={{ cursor: 'pointer' }}
                                                onClick={() => modalWindowHandler('education')}
                                            >...more{" "}<FontAwesomeIcon icon={faArrowRightLong} /></p>
                                        </div>

                                        {/* USER SKILLS */}
                                        <div>
                                            <div className="mt-4 pt-0">
                                                <div>
                                                    <h6 className="fs-17 fw-semibold mb-0 projectb-general-titlebar" style={{ display: 'inline-block' }}>Skills&nbsp;&nbsp;</h6>
                                                    <span className="projectb-networkinfo-more" onClick={() => setShowSkillsModal(!showSkillsModal)} style={{ cursor: 'pointer' }}>
                                                        <FontAwesomeIcon icon={faEdit} className="projectb-networkinfo-more" />edit</span>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-start gap-1">
                                                    <SkillCard />
                                                </div>
                                            </div>
                                        </div>
                                        {/* USER CERTIFICATIONS */}
                                        <div>
                                            <div className="candidate-education-details mt-4 pt-0">
                                                <div>
                                                    <h6 className="fs-17 fw-semibold mb-0 projectb-general-titlebar" style={{ display: 'inline-block' }}>Certifications&nbsp;&nbsp;</h6>
                                                    <span className="projectb-networkinfo-more" onClick={() => eceModalHandler('certifications')} style={{ cursor: 'pointer' }}>
                                                        <FontAwesomeIcon icon={faEdit} className="projectb-networkinfo-more" />edit</span>
                                                </div>
                                                <NetworkUserCard />

                                            </div>
                                            <p className="m-0 projectb-networkinfo-more" style={{ cursor: 'pointer' }}
                                                onClick={() => modalWindowHandler('certification')}
                                            >...more{" "}<FontAwesomeIcon icon={faArrowRightLong} /></p>
                                        </div>
                                        {/* OTHER DETAILS */}
                                        <div>
                                            <div>
                                                <h6 className="fs-17 fw-semibold mb-0 projectb-general-titlebar" style={{ display: 'inline-block' }}>Other Details&nbsp;&nbsp;</h6>
                                                <span className="projectb-networkinfo-more" onClick={() => setShowOtherDetailsModal(!showOtherDetailsModal)} style={{ cursor: 'pointer' }}>
                                                    <FontAwesomeIcon icon={faEdit} className="projectb-networkinfo-more" />edit</span>
                                            </div>
                                            <p className="text-muted mb-2">
                                                Very well thought out and articulate communication. Clear
                                                milestones, deadlines and fast work. Patience. Infinite
                                                patience. No shortcuts. Even if the client is being careless.
                                                Some quick example text to build on the card title and bulk the
                                                card's content Moltin gives you platform.
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={5} className="projectb-mainnetwwork-networkinfo">
                                display top 5 jobs that matches his profile, when in single mobile mode, then hide this display to the users.
                            </Col>
                        </Row>
                    </Container>

                </section>

            </div>
        </Aux >
    )
}

export default Profile;