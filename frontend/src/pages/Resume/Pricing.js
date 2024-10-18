import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Pricing = () => {
    const pricingpage = {
        id: 1,
        pricingName: "Starter",
        pricingPrice: "$35.99",
        pricingsuccessclass: "btn-soft-primary",
        pricingDetails: [
            {
                id: 1,
                pricingInnerClassName: "pricing-item",
                pricingInnerIcon:
                    "mdi mdi-check-bold bg-success-subtle text-success me-2",
                pricingInnerText: "Unlimited file recovery"
            },
            {
                id: 2,
                pricingInnerClassName: "pricing-item",
                pricingInnerIcon:
                    "mdi mdi-check-bold bg-success-subtle text-success me-2",
                pricingInnerText: "Professional reports"
            },
            {
                id: 3,
                pricingInnerClassName: "pricing-item",
                pricingInnerIcon:
                    "mdi mdi-check-bold bg-success-subtle text-success me-2",
                pricingInnerText: "Sell on marketplaces"
            },
            {
                id: 4,
                pricingInnerClassName: "pricing-item text-decoration-line-through",
                pricingInnerIcon:
                    "mdi mdi-close-thick bg-muted-subtle text-muted me-2",
                pricingInnerText: "Unlimited Builds"
            },
            {
                id: 5,
                pricingInnerClassName: "pricing-item text-decoration-line-through",
                pricingInnerIcon:
                    "mdi mdi-close-thick bg-muted-subtle text-muted me-2",
                pricingInnerText: "Job displayed for 30 days"
            },
            {
                id: 6,
                pricingInnerClassName: "pricing-item text-decoration-line-through",
                pricingInnerIcon:
                    "mdi mdi-close-thick bg-muted-subtle text-muted me-2",
                pricingInnerText: "Premium Support 24/7"
            }
        ]
    };
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <span className="badge bg-warning-subtle text-warning  fs-15 mb-2">
                                    Choose Your Plan
                                </span>
                                <p className="text-muted">
                                    The faster, most seamless CI & development you'll find
                                    anywhere.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <Col lg={4} md={6} className="mt-5 pt-2">
                            <Card className="pricing-box bg-light">
                                <CardBody className="p-4 px-lg-5">
                                    <div className="pricing-icon bg-light rounded-circle icons-md">
                                        {/* <Icon
                        icon={pricingpage.pricingIcon}
                        className="text-primary"
                      /> */}
                                    </div>
                                    <div className="pricing-name text-center mt-4 pt-2">
                                        <h4 className="fs-18">
                                            {pricingpage.pricingName}
                                        </h4>
                                    </div>
                                    <div className="pricing-price text-center mt-4">
                                        <h2 className="fw-semibold">
                                            {pricingpage.pricingPrice}
                                            <small className="fs-16">/mo</small>
                                        </h2>
                                    </div>
                                    <ul className="list-unstyled pricing-details text-muted mt-4">
                                        {(pricingpage.pricingDetails || []).map(
                                            (pricingpageInnerDetails, key) => (
                                                <li
                                                    key={key}
                                                    className={
                                                        pricingpageInnerDetails.pricingInnerClassName
                                                    }
                                                >
                                                    <i
                                                        className={
                                                            pricingpageInnerDetails.pricingInnerIcon
                                                        }
                                                    ></i>{" "}
                                                    {pricingpageInnerDetails.pricingInnerText}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="text-center mt-4 mb-2">
                                        <Link
                                            to="#"
                                            className={`btn ${pricingpage.pricingsuccessclass} rounded-pill`}
                                        >
                                            Purchase Now <i className="uil uil-arrow-right"></i>
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} className="mt-5 ">
                            <h4 className="text-primary">two lines of information about resume and the details</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section className="section bg-light p-3">
                <Container>
                    <Row className="justify-content-center">
                        <div className="section-title text-center">
                            <h3 className="title">
                                See everything about your employee at one place.
                            </h3>
                            <p className="para-desc text-muted mx-auto">
                                Start working with Jobcy that can provide everything you need to
                                generate awareness, drive traffic, connect.
                            </p>
                            <div className="mt-4">
                                <Link to="/contact" className="btn btn-primary btn-hover mt-2">
                                    <i className="uil uil-phone me-1"></i> Contact
                                </Link>
                                <Link
                                    to="/faqs"
                                    className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"
                                >
                                    <i className="uil uil-file-question me-1"></i> Faq's
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Pricing;