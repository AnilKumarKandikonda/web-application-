import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { Col, Card, CardBody } from 'reactstrap';
import { NavLink } from "react-router-dom";
const PricingCard = ({ pricingCard }) => {
    return (
        <Aux>
            <Col lg={4} md={6} className="mt-5 pt-2">
                <Card className="pricing-box bg-light">
                    <CardBody className="p-4 px-lg-5">
                        <div className="pricing-name text-center mt-4 pt-2">
                            <h4 className="fs-18">
                                {pricingCard.pricingName}
                            </h4>
                        </div>
                        <div className="pricing-price text-center mt-4">
                            <h2 className="fw-semibold">
                                {pricingCard.pricingPrice}
                                <small className="fs-16">/mo</small>
                            </h2>
                        </div>
                        <ul className="list-unstyled pricing-details text-muted mt-4">
                            {(pricingCard.pricingDetails || []).map(
                                (pricingpageInnerDetails, key) => (
                                    <li
                                        key={key}
                                        className={
                                            pricingpageInnerDetails.pricingInnerClassName
                                        }>
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
                            <NavLink
                                to="#"
                                className={`btn ${pricingCard.pricingsuccessclass} rounded-pill`}
                            >
                                Purchase Now <i className="uil uil-arrow-right"></i>
                            </NavLink>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Aux>
    )
}

export default PricingCard;