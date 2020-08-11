const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, content: "First post", likeCount: 2},
                {id: 2, content: "Hi my first post", likeCount: 12},
                {id: 3, content: "I learn React", likeCount: 5},
            ],
            newPostText: 'Some text'
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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                content: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._renderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.content;
            this._renderEntireTree(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreator = (content) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        content: content
    }
}

export default store;