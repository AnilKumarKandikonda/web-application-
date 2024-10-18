import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const Alert = (props) => {
    return (
        <div className="alert bg-primary-subtle projectb-alert" role="alert">
            {props.alertIcon && <FontAwesomeIcon icon={faTriangleExclamation} className="projectb-alert-exclamation"/>}
            {props.message}
            {props.contactLink && <NavLink to="/contactus">click here</NavLink>}
        </div>
    )
}

export default Alert;