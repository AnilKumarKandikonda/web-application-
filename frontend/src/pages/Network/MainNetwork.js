import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import {
    Col, Row
} from 'reactstrap';
import NetworkProfile from "../../components/NetworkProfile/NetworkProfile";
import NetworkInfo from "../../components/NetworkProfile/NetworkInfo";
import Pagination from "../../components/Pagination/Pagination";
import NetworkSlideInfo from "../../components/NetworkProfile/NetworkSlideInfo";


const MainNetwork = (props) => {

    
    return (
        <Aux>
            {props.showSlideInfo && <NetworkSlideInfo slideRef={props.slideRef} modalWindowHandler={props.modalWindowHandler}
                modalToggle={props.modalToggle} modal={props.modal} modalType={props.modalType} networkinfo={props.networkinfo}
                slideWindowBackHandler={props.networkSlideClose} />}
            <Row >
                <Col md={5} style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
                    <NetworkProfile networkProfileClicked={props.networkProfileClicked} />
                </Col>
                {(props.windowWidth > props.userWindowWidth) && <Col md={7} className="projectb-mainnetwwork-networkinfo" style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
                    {props.selectedUser ? <NetworkInfo networkinfo={true} /> : <p className="text-primary">No user selected.</p>}
                </Col>}
            </Row>
            <Pagination />
        </Aux>
    )
}


export default MainNetwork;