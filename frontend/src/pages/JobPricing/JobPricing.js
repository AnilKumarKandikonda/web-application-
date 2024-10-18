import React from "react";
import Aux from '../../hoc/Auxilliary/Auxilliary';
import { Container } from "reactstrap";
import PricingPage from "./PricingPage";

const JobPricing = () => {
    return (
        <Aux>
            <div className="main-content">
                <div className="page-content">
                    <section>
                        <Container className="projectb-jobpricing-header">
                            <h4 className="text-primary">Get Your Resume Reviewed</h4>
                            <p>Improve your resume with us, land into the right job with our ATS friendly resume review.</p>
                        </Container>
                    </section>
                    <PricingPage />
                </div>
            </div>
        </Aux>
    )
}

export default JobPricing;