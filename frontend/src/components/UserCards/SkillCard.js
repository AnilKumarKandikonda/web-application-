import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";

const SkillCard = ({ skillName }) => {
    return (
        <Aux>
            <span className="badge bg-primary-subtle text-dark fs-15 m-1">
                {skillName}
            </span>
        </Aux>
    )
}

export default SkillCard;