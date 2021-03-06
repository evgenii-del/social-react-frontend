import React from 'react';
import './Dialogs.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogs = state.dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messages = state.messages.map(message => <Message content={message.message} key={message.id}/>);
    let messageText = state.newMessageText;

    const onAddMessage = () => {
        props.addMessage();
    }

    const onMessageChange = (event) => {
        let content = event.target.value;
        props.onMessageChange(content);
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
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;