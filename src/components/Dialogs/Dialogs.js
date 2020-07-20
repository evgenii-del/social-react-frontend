import React from 'react';
import './Dialogs.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className="user">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="messages-item">{props.content}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Zhenya'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Sveta'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'My name is John.'},
        {id: 3, message: 'Can you help me?'},
        {id: 4, message: 'By'},
    ]

    return (
        <div className="dialogs">
            <div className="dialogs-users">
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
            </div>
            <div className="dialogs-messages">
                <Message content={messagesData[0].message}/>
            </div>
        </div>
    )
}

export default Dialogs;