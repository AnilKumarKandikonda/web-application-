import React, { useRef } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import NetworkInfoBase from "./NetworkInfoBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const NetworkSlideInfo = ({ slideRef, modalWindowHandler, modalToggle, modal, modalType, slideWindowBackHandler }) => {
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
                        <NetworkInfoBase modalWindowHandler={modalWindowHandler}
                            modalToggle={modalToggle} modal={modal} modalType={modalType} networkinfo={false}
                            networkClassName="projectb-networkinfo-infoslidecontainer" />
                    </div>
                </div>
            </div>
        </Aux >
    )
}

export default NetworkSlideInfo;