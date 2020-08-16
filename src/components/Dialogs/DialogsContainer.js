import React from 'react';
import './Dialogs.css';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsReducer;

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const messageChange = (content) => {
        props.store.dispatch(onMessageChangeActionCreator(content));
    }

    return (
        <Dialogs addMessage={addMessage} messageChange={messageChange} dialogsPage={state}/>
    )
}

export default DialogsContainer;