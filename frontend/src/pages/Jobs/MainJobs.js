import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import Pagination from "../../components/Pagination/Pagination";
import {
    Col, Row
} from 'reactstrap';
import JobProfile from "../../components/JobProfile/JobProfile";
import JobInfo from "../../components/JobProfile/JobInfo";
import JobSlideInfo from "../../components/JobProfile/JobSlideInfo";
import JobSubmitModal from "../../components/JobProfile/JobSubmitModal";

const MainJobs = (props) => {
    

    return (
        <Aux>
            {props.modal && <JobSubmitModal submitmodal={props.modal}
                submitmodalToggle={props.modalToggle}
                updateJobBaseQuestions={props.updateJobBaseQuestions}
                closeJobSubmitModal={props.closeJobSubmitModal}
                submitJobFromModal={props.submitJobFromModal}
                updateJobSubmitQuestions={props.updateJobSubmitQuestions}
                resumeFileName={props.resumeFileName}
                resumeFileRef={props.resumeFileRef}
                resumeReplaceClick={props.resumeReplaceClick}
                handleFileChange={props.handleFileChange} />}
            
            {props.showSlideInfo && <JobSlideInfo slideRef={props.slideRef}
                slideWindowBackHandler={props.jobSlideClose}
                jobSubmitHandler={props.jobSubmitHandler} />}
            <Row >
                <Col md={5} style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
                    {(!props.showSlideInfo) && <JobProfile jobsProfileClicked={props.jobsProfileClicked} />}
                </Col>
                {(props.windowWidth > props.userWindowWidth) && <Col md={7} className="projectb-mainnetwwork-networkinfo" style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
                    {props.selectedJob ? <JobInfo jobinfo={true} 
                        jobSubmitHandler={props.jobSubmitHandler} /> : <p className="text-primary">No job selected.</p>}
                </Col>}
            </Row>
            {(!props.showSlideInfo) && <Pagination />}
        </Aux>
    )
}

export default MainJobs;