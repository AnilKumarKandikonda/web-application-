import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Col, Container, Input, Row } from "reactstrap";
import { comingSoonDetails } from './actions/comingsoonAction';
import { connect } from "react-redux";

//import Image
import rocketImage from "../../assets/images/rocket.gif";

const ComingSoon = (props) => {

  document.title = "Coming Soon | Jobcy - Job Listing Template | Themesdesign";
  useEffect(() => {
    props.onFetchComingSoonDetials();
  },[]);
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-coming-soon bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={6}>
                    <div className="text-center">
                      <div className="mb-4 pb-3">
                        <img
                          src={rocketImage}
                          alt=""
                          height="150"
                          className="mg-fluid"
                        />
                      </div>
                      <h1>We're Launching Soon..!!</h1>
                      <p className="text-muted mb-4 pb-3">
                        Start working with Jobcy that can provide everything you
                        need to generate awareness, drive traffic, connect.
                      </p>
                      <Form action="#" className="coming-soon-subacribe mt-4">
                        <div className="input-group mb-3">
                          <Input
                            type="text"
                            className="form-control text-dark"
                            placeholder="Enter your email"
                          />
                          <button className="btn btn-primary" type="button">
                            Subscribe
                          </button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
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
      onFetchComingSoonDetials: () => dispatch(comingSoonDetails())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
