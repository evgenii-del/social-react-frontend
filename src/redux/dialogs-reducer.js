const ADD_MESSAGE = 'CREATE-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let content = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 5, message: content});
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.content;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChangeActionCreator = (content) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        content: content
    }
}

export default dialogsReducer;