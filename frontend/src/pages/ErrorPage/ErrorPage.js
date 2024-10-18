import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const ErrorPage = () => {
  document.title = "Error 404 | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-error bg-auth text-dark">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={6}>
                    <div className="text-center">
                      <div className="mt-5">
                        <h4 className="text-uppercase mt-3">
                          Sorry, page not found
                        </h4>
                        <p className="text-muted">
                          It will be as simple as Occidental in fact, it will be
                          Occidental
                        </p>
                        <div className="mt-4">
                          <Link
                            className="btn btn-primary waves-effect waves-light"
                            to="/"
                          >
                            <i className="mdi mdi-home"></i> Back to Home
                          </Link>
                        </div>
                      </div>
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

export default ErrorPage;
