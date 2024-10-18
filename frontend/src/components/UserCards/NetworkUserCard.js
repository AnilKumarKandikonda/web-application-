import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPen
} from "@fortawesome/free-solid-svg-icons";

const EducationCard = (props) => {
    return (
        <Aux>
            <div className="candidate-education-content mt-2 d-flex">
                <div className={props.edit ? "circle flex-shrink-0 bg-dark text-white" : "circle flex-shrink-0 bg-primary-subtle text-primary"}>
                    {!props.edit ? <Aux>{" "}
                        B{" "}</Aux> : <div style={{cursor:'pointer'}} onClick={() => props.editNetworkUserCard(props.modalType)}>
                        <FontAwesomeIcon icon={faPen} />
                    </div>}

                </div>
                <div className="ms-4">
                    <h6 className="fs-16 mb-1">
                        BCA - Bachelor of Computer Applications
                    </h6>
                    <p className="mb-2 text-muted">
                        International University - (2004 - 2010)
                    </p>
                    <p className="text-muted mb-1">
                        There are many variations of passages of available, but the
                        majority alteration in some form. As a highly skilled and
                        successfull product development and design specialist with
                        more than 4 Years of My experience.
                    </p>
                </div>
            </div>
        </Aux>
    )
}

export default EducationCard;