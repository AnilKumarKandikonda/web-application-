import React from "react";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";

const CurrentTrends = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <div className="pricing-counter text-white projectb-currenttrends-container">
            <Row>
              <Col lg={4} md={4} sm={4}>
                <div className="counter-box mt-3">
                  <div className="counters counter_custom text-center">
                    <CountUp
                      end={15000}
                      duration={5}
                      suffix="+"
                      className="counter counter_custom mb-0"
                    ></CountUp>
                    <h6 className="fs-16 mt-3">Available Jobs</h6>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <div className="counter-box mt-3">
                  <div className="counters counter_custom text-center">
                    <CountUp
                      end={7500}
                      duration={5}
                      suffix="+"
                      className="counter mb-0"
                    ></CountUp>
                    <h6 className="fs-16 mt-3">Applications</h6>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <div className="counter-box mt-3">
                  <div className="counters counter_custom text-center">
                    <CountUp
                      end={9875}
                      duration={5}
                      suffix="+"
                      className="counter mb-0"
                    ></CountUp>
                    <h6 className="fs-16 mt-3">Members</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CurrentTrends;
