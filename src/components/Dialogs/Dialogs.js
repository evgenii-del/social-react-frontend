import React from 'react';
import './Dialogs.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messages = props.state.messages.map(message => <Message content={message.message}/>);
    let messageText = props.state.newMessageText;

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (event) => {
        let content = event.target.value;
        props.dispatch(onMessageChangeActionCreator(content));
    }

    return (
        <div className="dialogs">
            <div className="dialogs-users">
                {dialogs}
            </div>
            <div className="dialogs-messages">
                {messages}
            </div>
            <div>
                <textarea onChange={onMessageChange} value={messageText}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;