const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, content: "First post", likeCount: 2},
        {id: 2, content: "Hi my first post", likeCount: 12},
        {id: 3, content: "I learn React", likeCount: 5},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                content: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.content;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreator = (content) => {
    return {
        type: UPDATE_POST_TEXT,
        content: content
    }
}

export default profileReducer;