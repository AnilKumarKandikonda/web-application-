import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Modal,
    ModalBody, ModalHeader
} from "reactstrap";
import NetworkUserCard from '../../components/UserCards/NetworkUserCard';


const EceModal = ({ modal, modalToggle, modalType }) => {
    return (
        <Aux>
            <Modal
                isOpen={modal}
                toggle={modalToggle}
                role="dialog"
                centered
                scrollable
                className="projectb-networkmodal-modal"
            >
                <ModalHeader className="p-2 text-primary" toggle={modalToggle}>{modalType}</ModalHeader>
                <ModalBody className="p-4">
                    <div className="auth-content">
                        <div className="w-100">
                            <div className="candidate-education-details mt-2 pt-0">
                                <NetworkUserCard edit={false} />
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default EceModal;