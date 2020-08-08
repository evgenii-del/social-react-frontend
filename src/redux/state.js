import {renderEntireTree} from "../render";

let state = {
    posts: [
        {id: 1, content: "First post", likeCount: 2},
        {id: 2, content: "Hi my first post", likeCount: 12},
        {id: 3, content: "I learn React", likeCount: 5},
    ],
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

export let addPost = (post) => {
    let newPost = {
        id: 5,
        content: post,
        likeCount: 0
    };

    state.posts.push(newPost);
    renderEntireTree(state);
}

export default state;