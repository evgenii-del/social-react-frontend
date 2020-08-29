import React from 'react';
import './Dialogs.css';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, onMessageChange} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    onMessageChange
})(Dialogs);

export default DialogsContainer;