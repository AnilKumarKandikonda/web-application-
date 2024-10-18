import React, { useState } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import NetworkInfoBase from "./NetworkInfoBase";


const NetworkInfo = (props) => {
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState('');
    // const [modalInfo, setModalInfo] = useState({});
    // console.log('networkinfo',props.networkinfo);
    const modalWindowHandler = (type) => {
        setModalType(type);
        setModal(!modal);
    }

    const modalToggle = () => {
        setModal(!modal);
        if (modal === true) {
            setModalType('');
        }
    }
    return (
        <Aux>
            <NetworkInfoBase modalWindowHandler={modalWindowHandler}
                modalToggle={modalToggle} modal={modal} modalType={modalType}
                networkinfo={props.networkinfo} networkClassName="projectb-networkinfo-container" />
        </Aux>
    )
}

export default NetworkInfo;