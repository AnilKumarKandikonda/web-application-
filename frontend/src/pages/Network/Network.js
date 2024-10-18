import React, { useState,useRef,useEffect } from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import {
    Container, Col, Row, Input, Card, TabContent,
    TabPane, Nav,
    NavLink,
    NavItem,
} from 'reactstrap';
import classnames from 'classnames';
import MainNetwork from './MainNetwork';
import { connect } from "react-redux";
import { networkInfoDetails } from './actions/networkAction';

const Network = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [searchDropdown, setSearchDropdown] = useState(true);
    const [activeTab, setActiveTab] = useState("1");

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showSlideInfo, setShowSlideInfo] = useState(false);
    const userWindowWidth = 767;
    const slideRef = useRef(null);
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState('');
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
    // console.log(windowWidth);

    const networkSlideClose = () => {
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

    const networkProfileClicked = (userSelected) => {
        setSelectedUser(userSelected);
        // props.onGetNetworkInfoDetails(userSelected);
        if (windowWidth <= userWindowWidth) {
            setShowSlideInfo(true);
        }
    }


    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
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
                    <Nav className="nav-tabs" role="tablist">
                        <NavItem>
                            <NavLink
                                to="#"
                                className={classnames({ active: activeTab === "1" })}
                                onClick={() => {
                                    tabChange("1");
                                }}
                                type="button"
                            >
                                <span>Network</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to="#"
                                className={classnames({ active: activeTab === "2" })}
                                onClick={() => {
                                    tabChange("2");
                                }}
                                type="button"
                            >
                                <span>Sent</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to="#"
                                className={classnames({ active: activeTab === "3" })}
                                onClick={() => {
                                    tabChange("3");
                                }}
                                type="button"
                            >
                                <span>Received</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent
                        activeTab={activeTab}
                        className="p-3 border border-top-0 rounded-bottom text-muted"
                    >
                        <TabPane tabId="1">
                            <MainNetwork page="all" 
                            showSlideInfo={showSlideInfo}
                            slideRef={slideRef}
                            modalWindowHandler={modalWindowHandler}
                            modalToggle={modalToggle}
                            modal={modal}
                            modalType={modalType} 
                            networkSlideClose={networkSlideClose} 
                            networkProfileClicked={networkProfileClicked} 
                            windowWidth={windowWidth} 
                            userWindowWidth={userWindowWidth} 
                            selectedUser={selectedUser} 
                            />
                        </TabPane>
                        <TabPane tabId="2">
                            <MainNetwork page="sent" />
                        </TabPane>
                        <TabPane tabId="3">
                            <MainNetwork page="received" />
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
        onGetNetworkInfoDetails: (id) => dispatch(networkInfoDetails(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Network);