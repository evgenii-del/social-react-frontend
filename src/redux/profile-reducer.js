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
            let stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts]
            };
            let newPost = {
                id: 5,
                content: state.newPostText,
                likeCount: 0
            };
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText: action.content
            };
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChange = (content) => {
    return {
        type: UPDATE_POST_TEXT,
        content: content
    }
}

export default profileReducer;