import React from "react";
import Aux from '../../hoc/Auxilliary/Auxilliary';
import { Container, Col, Row, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import PricingCard from "../../components/PricingCard/PricingCard";

const MessagePricing = () => {
    const pricingpage = [{
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
    }];
    return (
        <Aux>
            <div className="section projectb-general-main">
                <Container className="projectb-general-container">
                    <h4 className="text-primary">Get Your Resume Reviewed</h4>
                    <p>Improve your resume with us, land into the right job with our ATS friendly resume review.</p>
                </Container>
            </div>
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <span className="badge bg-warning-subtle text-warning  fs-15 mb-2">
                                    Choose Your Plan
                                </span>
                                <h3>Save up to 15%</h3>
                                <p className="text-muted">
                                    The faster, most seamless CI & development you'll find
                                    anywhere.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {pricingpage.map((pricingCard, key) => (
                            <PricingCard pricingCard={pricingCard} key={key} />
                        ))}
                        <Col lg={6} md={6} className="mt-5 ">
                            <h4 className="text-primary">two lines of information about resume and the details</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Aux>
    )
}

export default MessagePricing;