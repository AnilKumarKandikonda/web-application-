import React from "react";
import {
  Col,
  Container,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  const iconTobar = [
    {
      id: 3,
      classname: "uil uil-instagram"
    },
    {
      id: 4,
      classname: "uil uil-envelope"
    },
  ];

  return (
    <React.Fragment>
      <div className="top-bar projectb-topbar" style={{ zIndex: 1030 }}>
        <Container fluid className="custom-container projectb-topbar-container">
          <Row className="g-0 align-items-center">
            <Col md={7} sm={7}>
              <ul className="list-inline mb-0 text-center text-md-start projectb-topbar-location">
                <li className="list-inline-item">
                  <p className="fs-13 mb-0">
                    {" "}
                    <i className="mdi mdi-map-marker"></i> Your Location:{" "}
                    <Link to="#" className="text-dark">
                      New Caledonia
                    </Link>
                  </p>
                </li>
                <li className="list-inline-item">
                  <ul className="topbar-social-menu list-inline mb-0 ">
                    {(iconTobar || []).map((icon, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to="/" className="social-link">
                          <i className={icon.classname}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </Col>

            <Col md={5} sm={5}>
              <ul className="list-inline mb-0 text-center text-md-end projectb-topbar-country">
                <li className="list-inline-item align-middle">
                    <div className="btn">
                        Canada
                      <img src="" alt="" height="16" />
                    </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
