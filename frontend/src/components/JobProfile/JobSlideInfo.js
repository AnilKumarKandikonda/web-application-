import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import JobInfo from "./JobInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const JobSlideInfo = ({ slideRef, slideWindowBackHandler, jobSubmitHandler }) => {
    return (
        <Aux>
            <div className="projectb-networkslideinfo-overlay" ref={slideRef} >
                <div className="projectb-networkslideinfo-overlay-content projectb-profile-main">
                    <div className="projectb-networkslideinfo-backbutton" onClick={slideWindowBackHandler}>
                        <span className="badge bg-primary-subtle text-primary mt-2 fs-14 text-start">
                            <FontAwesomeIcon icon={faArrowLeft} />{" "}Back
                        </span>
                    </div>
                    <div>
                        <JobInfo jobClassName="projectb-networkinfo-infoslidecontainer" jobSubmitHandler={jobSubmitHandler} />
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default JobSlideInfo;