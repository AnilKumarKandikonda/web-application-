import React, { useEffect, useState } from "react";
import Aux from '../../hoc/Auxilliary/Auxilliary';
import { Container, Card, Row, Col, Input, Form } from "reactstrap";
import PricingPage from "./Pricing";
import CurrentTrends from "./CurrentTrends";
import { connect } from "react-redux";
import { uploadUserResumeDetails, getUserResumeDetails, resumeDownload } from './actions/resumeAction';
import Spinner from "../../components/Spinner/Spinner";
import BaseUtilityModal from '../../components/Utility/BaseUtilityModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit, faClose
} from "@fortawesome/free-solid-svg-icons";

const Resume = (props) => {
    const [userResume, setUserResume] = useState(null);
    const [uploadResumeFlag, setUploadResumeFlag] = useState(true);
    const [numReviews, setNumReviews] = useState(0);
    const [showFailMessage, setShowFailMessage] = useState(false);
    const [showNotesModal, setShowNotesModal] = useState(false);
    const [message, setMessage] = useState('');
    const [updatedDate, setUpdatedDate] = useState('');
    const [reviewCompletedFlag, setReviewCompletedFlag] = useState(false);
    const [resumeFileName, setResumeFileName] = useState('');
    const [resumeId, setResumeId] = useState(-1);
    const [showEditButton, setShowEditButton] = useState(true);
    const [showCancelButton, setShowCancelButton] = useState(true);

    useEffect(() => {
        props.onGetUserResumeDetails();
    }, []);

    const submitUserResume = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('userResume', userResume);
        console.log(formData, userResume);
        props.onUploadUserResumeDetails(formData);
    }

    useEffect(() => {
        if (props.updateUserResumeFail.status === 402) {
            setUploadResumeFlag(false);
            setMessage(props.updateUserResumeFail.message);
        } else if (props.updateUserResumeFail.status === 1001) {
            setUploadResumeFlag(false);
            setMessage(props.updateUserResumeFail.message);
        } else if (props.updateUserResumeSuccess.status === 200) {

        }
    }, [props.updateUserResumeFail, props.userResumeDetailsSuccess]);
    // console.log(userResume);
    // the user can upload unlimited number of times until the resume went to reivew. 
    // once the resume went to review he cannot upload again.
    useEffect(() => {
        if (props.userResumeDetailsFail.status === 204) {
            setUploadResumeFlag(true);
            setNumReviews(props.userResumeDetailsFail.count);
            setShowCancelButton(false);
        } else if (props.userResumeDetailsFail.status !== undefined || props.userResumeDetailsFail.status === 400) {
            // console.log(props.userResumeDetailsFail);
            setShowFailMessage(true);
        } else if (props.userResumeDetailsSuccess.status === 200) {

            setNumReviews(props.userResumeDetailsSuccess.message.RS_REVIEW_COUNT);
            setUpdatedDate(props.userResumeDetailsSuccess.message.RS_UPDATED)
            setReviewCompletedFlag(props.userResumeDetailsSuccess.message.RS_REVIEW_COMPLETED);
            setResumeFileName(props.userResumeDetailsSuccess.message.RS_RESUME);
            setResumeId(props.userResumeDetailsSuccess.message.RS_ID)
            if (props.userResumeDetailsSuccess.message.RS_REVIEW && !props.userResumeDetailsSuccess.message.RS_REVIEW_COMPLETED) {
                setUploadResumeFlag(false);
                setMessage("Under Review, cannot upload again...");
                setShowEditButton(false);
            }
        }

    }, [props.userResumeDetailsFail, props.userResumeDetailsSuccess]);
    const handleDialogButton = () => {
        setShowFailMessage(false);
    }

    const handleDownloadResume = (e) => {
        e.preventDefault();
        if (resumeId !== -1) {
            props.onClickedResumeDownload(resumeId);
        }
    }

    return (
        <Aux>
            <div className="main-content">
                {(props.updateUserResumeLoading || props.userResumeDetailsLoading) && <Spinner />}
                {showFailMessage && <BaseUtilityModal
                    titleShow={true}
                    titleSuccess={false}
                    titleShowMessage="Error"
                    message={props.userResumeDetailsFail.message}
                    showLoader={false}
                    handleDialogButton={handleDialogButton}
                />}
                <div className="page-content">
                    <section>
                        <Container className="projectb-general-main">
                            <Card className="p-3">
                                <h4 className="text-primary">Get Your Resume Reviewed</h4>
                                <p>Improve your resume with us, land into the right job with our ATS friendly resume review.</p>

                                {uploadResumeFlag ? <Row className="justify-content-center">
                                    <Col md={12}>

                                        <div className="m-3" style={{ display: 'inline-block' }}>
                                            {showCancelButton && <div onClick={() => setUploadResumeFlag(false)} style={{ cursor: 'pointer' }} className="mb-2">
                                                <FontAwesomeIcon icon={faClose} />{" "}Cancel
                                            </div>}
                                            <Form onSubmit={submitUserResume} className="auth-form">
                                                <label className="projectb-resume-uploadlabel">
                                                    <Input
                                                        type="file"
                                                        className="form-control projectb-login-custominput projectb-resume-customUpload"
                                                        id="uploadFileInput"
                                                        onChange={(e) => setUserResume(e.target.files[0])}
                                                    />

                                                </label>
                                                <button className="btn btn-primary p-2">Submit</button>
                                            </Form>

                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="m-3" style={{ display: 'inline-block' }}>
                                            <p className="text-primary">you have <span>{numReviews}</span> reviews left.</p>
                                        </div>

                                    </Col>
                                </Row> :
                                    (resumeId !== -1 && resumeFileName !== null && resumeFileName !== '') ? <Row>
                                        {showEditButton && <div onClick={() => setUploadResumeFlag(true)} style={{ cursor: "pointer" }} className="mb-3">
                                            <FontAwesomeIcon icon={faEdit} />{" "}Edit
                                        </div>}
                                        <div onClick={handleDownloadResume} style={{ cursor: 'pointer' }}>
                                            <span className="badge bg-primary-subtle text-success fs-13 mt-1">
                                                {resumeFileName}
                                            </span>
                                        </div>
                                    </Row> : <Row>
                                        <h6 className="text-info">{message}</h6>
                                    </Row>}
                                <hr />
                                <Row>
                                    <div onClick={() => setShowNotesModal(!showNotesModal)} style={{ cursor: 'pointer' }}>
                                        <span className="badge bg-dark-subtle text-success fs-13 mt-1">
                                            Review Notes
                                        </span>
                                    </div>
                                    <h6 className="m-1 text-primary">Details: </h6>
                                    <div>
                                        {updatedDate && <p className="mb-0 fs-13 text-danger"><span className="text-info">Updated Date: </span>{updatedDate}</p>}
                                        {reviewCompletedFlag && <p className="mb-0 fs-13 text-danger"><span className="text-info">Review Completed: </span>Yes</p>}
                                    </div>

                                </Row>
                            </Card>

                        </Container>

                    </section>

                    <PricingPage />
                    <CurrentTrends />

                </div>
            </div>

        </Aux>
    )
}

const mapStateToProps = (state) => {
    return {
        updateUserResumeLoading: state.userResume.updateUserResumeDetailsLoading,
        updateUserResumeSuccess: state.userResume.updateUserResumeDetailsSuccess,
        updateUserResumeFail: state.userResume.updateUserResumeDetailsFail,

        userResumeDetailsLoading: state.userResume.userResumeDetailsLoading,
        userResumeDetailsSuccess: state.userResume.userResumeDetailsSuccess,
        userResumeDetailsFail: state.userResume.userResumeDetailsFail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onGetDiscountValues: () => dispatch(getDiscountValues()),
        onUploadUserResumeDetails: (data) => dispatch(uploadUserResumeDetails(data)),
        onGetUserResumeDetails: () => dispatch(getUserResumeDetails()),
        onClickedResumeDownload: (resumeId) => dispatch(resumeDownload(resumeId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);