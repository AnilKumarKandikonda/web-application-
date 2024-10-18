import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";

const Spinner = (props) => {
    return (
        <Aux>
            <div className="projectb-spinner">
                <div
                    className="spinner-border text-success projectb-spinner-inner m-1"
                    role="status"
                ></div>
            </div>

        </Aux>
    )
}

export default Spinner;