import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Modal,
    ModalBody, ModalHeader
} from "reactstrap";
import NetworkUserCard from '../UserCards/NetworkUserCard';


const EceModal = (props) => {
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
                <ModalHeader className="p-2 text-primary" toggle={props.modalToggle}>{props.modalType}</ModalHeader>
                <ModalBody className="p-4">
                    <div className="auth-content">
                        <div className="w-100">
                            <div className="candidate-education-details mt-2 pt-0">
                                <NetworkUserCard edit={true} editNetworkUserCard={props.editNetworkUserCard} modalType={props.modalType} />
                                {/* <Form className="auth-form">
                                    <EceFormField eceDetail={props.eceDetail}
                                        updateEceModalDetails={props.updateEceDetails} handleremoveAnotherField={props.handleremoveAnotherField} />
                                    <div className="mb-2" style={{ cursor: 'pointer' }} onClick={props.handleAddAnotherField}><FontAwesomeIcon icon={faPlus} />Add Another</div>
                                    <button type="submit" className="btn btn-primary rounded-pill text-centered">
                                        Save
                                    </button>
                                </Form> */}
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default EceModal;