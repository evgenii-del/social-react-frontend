import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState().profileReducer;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const postChange = (content) => {
        let action = onPostChangeActionCreator(content);
        props.store.dispatch(action);
    }

    return (
        <Posts profilePage={state} postChange={postChange} addPost={addPost}/>
    )
}

export default PostsContainer;