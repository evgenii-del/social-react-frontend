let renderEntireTree = () => {
    console.log('');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        content: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updatePostText = (text) => {
    state.profilePage.newPostText = text;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;