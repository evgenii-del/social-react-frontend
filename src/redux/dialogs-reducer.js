const ADD_MESSAGE = 'CREATE-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Zhenya'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Sveta'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'My name is John.'},
        {id: 3, message: 'Can you help me?'},
        {id: 4, message: 'By'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let content = state.newMessageText;
            let stateCopy = {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: content}]
            };
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.content;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChange = (content) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        content: content
    }
}

export default dialogsReducer;