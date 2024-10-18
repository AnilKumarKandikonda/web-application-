import React, { useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Col, Container, Row, Input, Label } from "reactstrap";
import Aux from "../../hoc/Auxilliary/Auxilliary";
//Import Images
import contactImage from "../../assets/images/contact.png";
// dispatching actions here
import { contactFormPostData, emptyContactPageData } from './actions/contactAction';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck, faXmark
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/Spinner/Spinner";
import BaseUtilityModal from '../../components/Utility/BaseUtilityModal';

/**
 * Functional component for the Contact page.
 * It displays a contact form and handles form submission.
 * @param {Object} props - React props received by the component.
 */


const Contact = (props) => {
    const focusField = useRef(null);

    // contact form fields initialization
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [phone, setPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessDialogue, setShowSuccessDialogue] = useState(false);
    /**
     * useEffect initial page load, assign the title here, also 
     * focus the first attribute of the input field
     */
    useEffect(() => {
        if (focusField.current) {
            focusField.current.focus();
        }
    }, []);

    /******************************************
     * @param {event} event
     * get data from the data, assign to the object and pass to the submit hander to actions 
     ******************************************/
    const contactFormSubmitHandler = (event) => {
        event.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            website: website,
            phone: phone,
            organization: organization,
            message: message
        }
        props.onFetchComingSoonDetials(data);
    }

    useEffect(() => {
        if (props.contactPostSuccess.status !== undefined && props.contactPostSuccess === 200) {
            setShowSuccessDialogue(true);
        }
    }, [props.contactPostSuccess]);

    /**
     * Handles the button click in the success dialogue.
     * Resets form fields and hides the dialogue.
     */
    
    const handleDialogButton = () => {
        setShowSuccessDialogue(false);
        setFirstName('');
        setLastName('');
        setEmail('');
        setWebsite('');
        setPhone('')
        setOrganization('');
        setMessage('');
    }



    return (
        <Aux>
            <section className="section">
                <Container>
                    {(props.contactPostLoading) && <Spinner />}
                    {showSuccessDialogue && <BaseUtilityModal
                        titleShow={true}
                        titleSuccess={true}
                        titleShowMessage="Ticket Submitted"
                        message={"Ticket Number for reference " + (props.contactPostSuccess.message !== undefined) && props.contactPostSuccess.message}
                        showLoader={false}
                        handleDialogButton={handleDialogButton}
                    />}
                    <Row className="align-items-center mt-5">
                        <Col lg={6}>
                            <div className="section-title mt-4 mt-lg-0">
                                <h3 className="title text-primary">Get in touch</h3>
                                <p className="text-muted">
                                    Start working with Jobcy that can provide everything you need
                                    to generate awareness, drive traffic, connect.
                                </p>
                                {props.contactPostSuccess?.status === 200 && <span className="badge bg-success-subtle text-primary fs-14">
                                    <FontAwesomeIcon icon={faCheck} />&nbsp;{props.contactPostSuccess?.message}
                                </span>}

                                {(props.contactPostFail?.status !== 200 && props.contactPostFail?.status !== undefined) && <span className="badge bg-danger-subtle text-primary fs-14">
                                    <FontAwesomeIcon icon={faXmark} />&nbsp;{props.contactPostFail?.message}
                                </span>}


                                <Form
                                    method="post"
                                    className="contact-form mt-4"
                                    name="contactpage-formsubmit-data"
                                    id="contactpageFormsubmitData"
                                    onSubmit={contactFormSubmitHandler}
                                >
                                    <span id="error-msg"></span>
                                    <Row>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="nameInput" className="form-label">
                                                    Name
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="contactForm-firstname"
                                                    innerRef={focusField}
                                                    value={firstName}
                                                    id="contactFormFirstName"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    onChange={(event) => setFirstName(event.target.value)}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="nameInput" className="form-label">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="contactForm-lastname"
                                                    value={lastName}
                                                    id="contactFormLastName"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label">
                                                    Email
                                                </Label>
                                                <Input
                                                    type="email"
                                                    className="form-control"
                                                    id="contactformEmail"
                                                    value={email}
                                                    name="contactform-email"
                                                    placeholder="E-Mail"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subjectInput" className="form-label">
                                                    Website
                                                </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="contactform-website"
                                                    value={website}
                                                    id="contactformWebsite"
                                                    placeholder="Website"
                                                    onChange={(e) => setWebsite(e.target.value)}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label">
                                                    Phone
                                                </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="contactFormPhone"
                                                    value={phone}
                                                    name="contactform-phone"
                                                    placeholder="Phone"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subjectInput" className="form-label">
                                                    Organization
                                                </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="contactform-organization"
                                                    value={organization}
                                                    id="contactFormOrganization"
                                                    placeholder="Organization"
                                                    onChange={(e) => setOrganization(e.target.value)}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="meassageInput" className="form-label">
                                                    Your Message
                                                </Label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Enter your message"
                                                    name="contactform-message"
                                                    value={message}
                                                    id="contactformMessage"
                                                    rows="3"
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="text-end">
                                        <button
                                            type="submit"
                                            id="contactformsubmit"
                                            name="contactform-submit"
                                            className="btn btn-primary"
                                        >
                                            {" "}
                                            Send Message <i className="uil uil-message ms-1"></i>
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={5} className="ms-auto order-first order-lg-last">
                            <div className="text-center">
                                <img src={contactImage} alt="" className="img-fluid projectb-contact-contactImage" />
                            </div>
                            <div className="mt-4 pt-3">
                                <h4 className="title text-primary">You Can Email us at: </h4>
                                <div className="d-flex text-muted align-items-center mt-2">
                                    <div className="flex-shrink-0 fs-22 text-primary">
                                        <i className="uil uil-envelope"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0">contactus@Jobcy.com</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Aux>
    );
};

const mapStateToProps = (state) => {
    return {
        // // password reset state details
        contactPostLoading: state.contactPage.contactFormPostLoading,
        contactPostSuccess: state.contactPage.contactFormPostSuccess,
        contactPostFail: state.contactPage.contactFormPostFail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchComingSoonDetials: (data) => dispatch(contactFormPostData(data)),
        // onEmptyContactPageData: () => dispatch(emptyContactPageData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
