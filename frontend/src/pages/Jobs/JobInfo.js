import React, { useState, useRef } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import JobInfoBase from "../../components/JobProfile/JobInfoBase";
import JobSubmitModal from "../../components/JobProfile/JobSubmitModal";

const JobInfo = (props) => {
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [jobQuestions, setJobQuestions] = useState([{
        id: 1,
        question: 'question 1',
        answer: ''
    }]);
    // for resume update and other stuff with resume
    const [resumeFileName, setResumeFileName] = useState('');
    const resumeFileRef = useRef(null);
    // when clicked on resume replace button. this will trigger
    const resumeReplaceClick = () => {
        resumeFileRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setResumeFileName(file.name);
    };

    const jobSubmitHandler = (type) => {
        setModalType(type);
        setModal(!modal);
    }

    const modalToggle = () => {
        setModal(!modal);
        if (modal === true) {
            setModalType('');
        }
    }

    const updateJobBaseQuestions = (updatedDetails) => {
        console.log(updatedDetails);
    }

    const closeJobSubmitModal = () => {
        setModal(false);
        setModalType('');
    }

    const submitJobFromModal = () => {
        console.log('submit');
    }

    const updateJobSubmitQuestions = (updatedValue) => {
        const updatedForm = jobQuestions.map((item) => item.id === updatedValue.id ? updatedValue : item);
        setJobQuestions(updatedForm);
        console.log(updatedForm);
    }


    return (
        <Aux>
            {modal && <JobSubmitModal submitmodal={modal}
                submitmodalToggle={modalToggle}
                updateJobBaseQuestions={updateJobBaseQuestions}
                closeJobSubmitModal={closeJobSubmitModal}
                submitJobFromModal={submitJobFromModal}
                updateJobSubmitQuestions={updateJobSubmitQuestions}
                resumeFileName={resumeFileName}
                resumeFileRef={resumeFileRef}
                resumeReplaceClick={resumeReplaceClick}
                handleFileChange={handleFileChange} />}
            <JobInfoBase jobinfo={props.jobinfo} jobClassName="projectb-networkinfo-infocontainer" jobSubmitHandler={jobSubmitHandler} />
        </Aux>
    );
}

export default JobInfo;