import React, { useState,useEffect } from "react";

import {
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";

import { Link } from "react-router-dom";
import classnames from "classnames";
import AccordianContentLeft from "./AccordianContentLeft";
import AccordianContentRight from "./AccordianContentRight";
import { faqFetchDetails } from './actions/faqAction';
import { connect } from "react-redux";

const Faq = (props) => {
  //Tab Change
  const [activeTab, setActiveTab] = useState("1");
  const TabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    // props.onFetchFaqDetials();
  },[]);

  return (
    <React.Fragment>
      <section className="section">
        <Container className="projectb-faq-container">
          <Row className="justify-content-center">
            <Col lg={8}>
              <Nav
                className="faq-menu nav-fill nav-pills justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      TabChange("1");
                    }}
                    type="button"
                  >
                    General
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      TabChange("2");
                    }}
                    type="button"
                  >
                    Buying
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      TabChange("3");
                    }}
                    type="button"
                  >
                    Payment
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      TabChange("4");
                    }}
                    type="button"
                  >
                    Support
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col lg={12}>
              <TabContent activeTab={activeTab}>
                <TabPane className="fade show" tabId="1">
                  <Row>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="buying"
                      >
                        <AccordianContentLeft />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="generalTwo"
                      >
                        <AccordianContentRight />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane className="fade show" tabId="2">
                  <Row>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="buying"
                      >
                        <AccordianContentLeft />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="buyingTwo"
                      >
                        <AccordianContentRight />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane className="fade show" tabId="3">
                  <Row>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="payment"
                      >
                        <AccordianContentLeft />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="paymentTwo"
                      >
                        <AccordianContentRight />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane className="fade show" tabId="4">
                  <Row>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="support"
                      >
                        <AccordianContentLeft />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="supportTwo"
                      >
                        <AccordianContentRight />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
            <Col lg={12}>
              <div className="text-center mt-5">
                <Link to="/contact" className="btn btn-primary btn-hover mt-2">
                  <i className="uil uil-phone"></i> Contact Us
                </Link>
                <Link to="#" className="btn btn-warning btn-hover mt-2 ms-md-2">
                  <i className="uil uil-envelope"></i> Email Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

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
      onFetchFaqDetials: () => dispatch(faqFetchDetails())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq);
