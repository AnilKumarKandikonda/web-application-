import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Modal,
    ModalBody,ModalHeader
} from "reactstrap";
import NetworkUserCard from "../UserCards/NetworkUserCard";

const NetworkModal = (props) => {
    return (
        <Aux>
            <Modal
                isOpen={props.modal}
                toggle={props.modalToggle}
                role="dialog"
                centered
                scrollable
                className="projectb-networkmodal-modal"
            >
                <ModalHeader  className="p-2 text-primary" toggle={props.modalToggle}>Modal title</ModalHeader>
                <ModalBody className="p-4">
                    <div className="auth-content">
                        <div className="w-100">
                            <div className="candidate-education-details mt-4 pt-0">
                                <NetworkUserCard />
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default NetworkModal;