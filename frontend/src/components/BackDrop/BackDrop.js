import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";

const BackDrop = (props) => {
    return (
        <Aux>
            {props.backdropOpen && <div onClick={props.backDropClicked}
                className="projectb-backdrop-backdrop"></div>}
        </Aux>
    )
}

export default BackDrop;