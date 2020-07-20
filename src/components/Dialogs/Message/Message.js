import React from "react";
import './Message.css';

const Message = (props) => {
    return (
        <div className="messages-item">{props.content}</div>
    )
}

export default Message;