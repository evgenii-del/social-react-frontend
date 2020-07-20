import React from 'react';
import './Dialogs.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messages = props.state.messages.map(message => <Message content={message.message}/>);

    return (
        <div className="dialogs">
            <div className="dialogs-users">
                {dialogs}
            </div>
            <div className="dialogs-messages">
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;