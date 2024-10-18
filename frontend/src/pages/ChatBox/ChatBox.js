import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { Container } from "reactstrap";
import useWebSocket from "react-use-websocket";


const socketUrl = 'ws://127.0.0.1:8000/ws/test';



const ChatBox = () => {
    const { } = useWebSocket(socketUrl, {
        onOpen: () => {
            console.log('open');
        },
        onClose: () => {
            console.log('close');
        },
        onError: () => {
            console.log('error');
        }
    })
    return (
        <Aux>
            <div className="projectb-general-main">
                <Container className="container projectb-general-container">
                    vonysinrt
                </Container>
            </div>
        </Aux>
    )
}

export default ChatBox;