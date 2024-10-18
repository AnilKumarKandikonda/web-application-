import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Modal,
    ModalBody, ModalHeader, Input
} from "reactstrap";
import SkillCard from '../../components/UserCards/SkillCard';
const SkillsModal = ({ modal, modalToggle, handleInputField, modalData }) => {
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
                <ModalHeader className="p-2 text-primary" toggle={modalToggle}>Skills</ModalHeader>
                <ModalBody className="p-4">
                    <div className="auth-content">
                        <Input
                            type="text"
                            className="form-control"
                            id="skillInput"
                            placeholder="Search Skills"
                            onChange={(e) => handleInputField(e.target.value)}
                            required
                        />
                        <div className="w-100">
                            <div className="candidate-education-details mt-4 pt-0">
                                {modalData.map((item, index) => <SkillCard skillName={item} key={index} />)}
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default SkillsModal;