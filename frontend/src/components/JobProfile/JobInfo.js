import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import JobInfoBase from "./JobInfoBase";

const JobInfo = (props) => {
    return (
        <Aux>
            <JobInfoBase jobinfo={props.jobinfo}
                slideRef={props.slideRef}
                slideWindowBackHandler={props.jobSlideClose}
                submitmodal={props.modal}
                submitmodalToggle={props.modalToggle}
                updateJobBaseQuestions={props.updateJobBaseQuestions}
                closeJobSubmitModal={props.closeJobSubmitModal}
                submitJobFromModal={props.submitJobFromModal}
                updateJobSubmitQuestions={props.updateJobSubmitQuestions}
                resumeFileName={props.resumeFileName}
                resumeFileRef={props.resumeFileRef}
                resumeReplaceClick={props.resumeReplaceClick}
                handleFileChange={props.handleFileChange}
                jobClassName="projectb-networkinfo-infoslidecontainer" jobSubmitHandler={props.jobSubmitHandler} />
        </Aux>
    )
}

export default JobInfo;