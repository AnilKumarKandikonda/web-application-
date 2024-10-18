import React, { useState,useRef,useEffect } from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import {
    Container, Col, Row, Input, Card, NavItem, NavLink, TabPane, TabContent, Nav
} from 'reactstrap';
import classnames from 'classnames';
import MainJobs from './MainJobs';
import { connect } from "react-redux";

const Jobs = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [searchDropdown, setSearchDropdown] = useState(true);

    const [basicActiveTab, setBasicActiveTab] = useState("1");

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selectedJob, setSelectedJob] = useState(null);
    const userWindowWidth = 767;
    const [showSlideInfo, setShowSlideInfo] = useState(false);
    const slideRef = useRef(null);
    // for resume update and other stuff with resume
    const [resumeFileName, setResumeFileName] = useState('');
    const resumeFileRef = useRef(null);

    
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > userWindowWidth) {
                setShowSlideInfo(false);
            }
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const jobSlideClose = () => {
        if (slideRef.current) {
            slideRef.current.style.width = '0%';
            setShowSlideInfo(false);
        }
    }

    useEffect(() => {
        if (slideRef.current && showSlideInfo) {
            slideRef.current.style.width = '100%';
        } else if (slideRef.current && !showSlideInfo) {
            slideRef.current.style.width = '0%';
        }
    }, [showSlideInfo, slideRef])

    const jobsProfileClicked = (jobSelected) => {
        setSelectedJob(jobSelected);
        if (windowWidth <= userWindowWidth) {
            // console.log('clicked');
            setShowSlideInfo(true);
        }
    }

    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [jobQuestions, setJobQuestions] = useState([{
        id: 1,
        question: 'question 1',
        answer: ''
    }]);

    // when clicked on resume replace button. this will trigger
    const resumeReplaceClick = () => {
        resumeFileRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setResumeFileName(file.name);
    };

    const jobSubmitHandler = (type) => {
        console.log('asdfhoashdfi');
        setModalType(type);
        setModal(!modal);
    }

    const modalToggle = () => {
        setModal(!modal);
        if (modal === true) {
            setModalType('');
        }
    }

    const updateJobBaseQuestions = (updatedDetails) => {
        console.log(updatedDetails);
    }

    const closeJobSubmitModal = () => {
        setModal(false);
        setModalType('');
    }

    const submitJobFromModal = () => {
        console.log('submit');
    }

    const updateJobSubmitQuestions = (updatedValue) => {
        const updatedForm = jobQuestions.map((item) => item.id === updatedValue.id ? updatedValue : item);
        setJobQuestions(updatedForm);
        // console.log(updatedForm);
    }



    const basicTabChange = (tab) => {
        if (basicActiveTab !== tab) setBasicActiveTab(tab);
    };
    const listItems = [
        { id: 1, value: 'this is anil 1' },
        { id: 3, value: 'this is anil 2' },
        { id: 2, value: 'this is anil 3' },
        { id: 4, value: 'this is anil 4' },
        { id: 5, value: '' },
    ]

    const listItemClickHandler = (item) => {
        setSearchDropdown(false);
        if (item.id !== 5) {
            setSearchFilter(item.value + " - " + searchFilter)
        }
    }

    const filterChangeHandler = (event) => {
        event.preventDefault();
        let splitValues = searchFilter.split(" - ");
        if (splitValues.length === 2) {
            setSearchFilter(event.target.value.replace(splitValues[0] + " - ", ''))
        } else {
            setSearchFilter(event.target.value);
        }
        setSearchDropdown(true);
    }
    return (
        <Aux>
            <section className="section projectb-network-network">
                <Container className='projectb-network-filterContainer'>
                    <Row>
                        <Col md={12}>
                            <div className='projectb-network-searchposition'>
                                <Input
                                    type="text"
                                    className="form-control projectb-network-custominput"
                                    id="networkSearchFilter"
                                    placeholder="Name, Department, Title,"
                                    value={searchFilter}
                                    onChange={(event) => filterChangeHandler(event)}
                                />
                                {(searchFilter !== "" && searchFilter.length > 2 && searchDropdown) && <Card className='projectb-network-searchfilter'>
                                    <ul className='list-unstyled text-muted mb-0 mb-md-3 ' style={{ height: '200px', overflowY: 'scroll' }}>
                                        {listItems.map(item => {
                                            return (
                                                <li className='projectb-network-searchlistitems'
                                                    key={item.id}
                                                    onClick={() => listItemClickHandler(item)}
                                                >{item.id !== 5 ? item.value : "Search with (" + searchFilter + ")"}</li>
                                            )
                                        })}
                                    </ul>
                                </Card>}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
            <section>
                <Container className='projectb-network-networkcontainer'>
                    <Nav className="nav-pills custom" role="tablist">
                        <NavItem className="waves-effect waves-light projectb-jobs-navitem">
                            <NavLink
                                to="#"
                                className={classnames({ active: basicActiveTab === "1" })}
                                onClick={() => {
                                    basicTabChange("1");
                                }}
                                type="button"
                            >
                                <span>All Jobs</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="waves-effect waves-light projectb-jobs-navitem">
                            <NavLink
                                to="#"
                                className={classnames({ active: basicActiveTab === "2" })}
                                onClick={() => {
                                    basicTabChange("2");
                                }}
                                type="button"
                            >
                                <span>Applied</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="waves-effect waves-light projectb-jobs-navitem">
                            <NavLink
                                to="#"
                                className={classnames({ active: basicActiveTab === "3" })}
                                onClick={() => {
                                    basicTabChange("3");
                                }}
                                type="button"
                            >
                                <span>Manage Jobs</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="waves-effect waves-light projectb-jobs-navitem">
                            <NavLink
                                to="#"
                                className={classnames({ active: basicActiveTab === "4" })}
                                onClick={() => {
                                    basicTabChange("4");
                                }}
                                type="button"
                            >
                                <span>Closed Posts</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <hr />
                    <TabContent
                        activeTab={basicActiveTab}
                        className="tab-content p-1 text-muted"
                    >
                        <TabPane tabId="1">
                            <MainJobs page="allJobs" 
                            modal={modal}
                            modalToggle={modalToggle}
                            updateJobBaseQuestions={updateJobBaseQuestions}
                            closeJobSubmitModal={closeJobSubmitModal}
                            submitJobFromModal={submitJobFromModal} 
                            updateJobSubmitQuestions={updateJobSubmitQuestions}
                            resumeFileName={resumeFileName}
                            resumeFileRef={resumeFileRef}
                            resumeReplaceClick={resumeReplaceClick}
                            handleFileChange={handleFileChange} 
                            showSlideInfo={showSlideInfo}
                            slideRef={slideRef}
                            jobSlideClose={jobSlideClose}
                            jobSubmitHandler={jobSubmitHandler}
                            jobsProfileClicked={jobsProfileClicked}
                            windowWidth={windowWidth}
                            userWindowWidth={userWindowWidth} 
                            selectedJob={selectedJob} 
                            modalType={modalType} />
                        </TabPane>
                        <TabPane tabId="2">
                            <MainJobs page="appliedJobs" />
                        </TabPane>
                        <TabPane tabId="3">
                            {/* 
                                * this is for recruiters, to manage their jobs, if the post is closed, then to repoen, or close the jobs, and so on
                                here they can see all the users who appled for a particular jobs.
                             */}
                            <MainJobs page="managejobs" />
                        </TabPane>
                        <TabPane tabId="4">
                            {/* 
                             this is also for the recruiters, who whose jobs postings has closed.
                             */}
                            <MainJobs page="closed" />
                        </TabPane>
                    </TabContent>
                </Container>
            </section>

        </Aux>
    )
}

const mapStateToProps = (state) => {
    return {
        // password reset state details
        comingSoonLoading: state.comingSoon.loginLoading,
        comingSoonSuccess: state.comingSoon.comingSoonSuccess,
        comingSoonFail: state.comingSoon.comingSoonFail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onGetJobInfoDetails: (id) => dispatch(networkInfoDetails(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Jobs);