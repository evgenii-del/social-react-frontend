import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, content: "First post", likeCount: 2},
                {id: 2, content: "Hi my first post", likeCount: 12},
                {id: 3, content: "I learn React", likeCount: 5},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },
    _renderEntireTree() {
        console.log('');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._renderEntireTree(this._state);
    }
}

export default store;