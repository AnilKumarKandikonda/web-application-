import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import BaseLoadingModal from "./BaseLoadingModal";
import { Row, Col } from 'reactstrap';

const BaseUtilityModal = ({ titleShow, titleSuccess, titleShowMessage, message, showLoader, handleDialogButton }) => {
    return (
        <Aux>
            <div className="projectb-baseutilitymodal-dialogboxinner">
                {titleShow && <h6 className={titleSuccess ? "text-success" : "text-danger"}>{titleShowMessage}</h6>}
                <Row>
                    <Col sm={10}>
                        <p>{message}</p>
                    </Col>
                    <Col sm={2}>
                        {showLoader && <BaseLoadingModal />}
                    </Col>

                </Row>
                <button className="btn btn-primary" style={{ paddingBottom: '3px', paddingBottom: '3px' }} onClick={handleDialogButton}>OK</button>
            </div>

        </Aux>
    );
}
export default BaseUtilityModal;