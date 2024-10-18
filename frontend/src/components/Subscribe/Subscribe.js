import React from "react";
import { Col, Container, Row } from "reactstrap";
import Aux from "../../hoc/Auxilliary/Auxilliary";

const Subscribe = () => {
  return (
    <Aux>
      <section className="bg-subscribe">
        <Container className="projectb-subscribe-subscribe">
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <div className="text-center text-lg-start">
                <h4 className="text-white">Get New Jobs Notification!</h4>
                <p className="text-white-50 mb-0">
                  Subscribe & get all related jobs notification.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-4 mt-lg-0">
                <form className="subscribe-form" action="#">
                  <div className="input-group justify-content-center justify-content-lg-end">
                    <input
                      type="text"
                      className="form-control"
                      id="subscribe"
                      placeholder="Enter your email"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="subscribebtn"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Aux>
  );
};

export default Subscribe;
