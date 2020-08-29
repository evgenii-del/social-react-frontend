import React from 'react';
import {addPost, onPostChange} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer
    }
}

const PostsContainer = connect(mapStateToProps, {
    addPost,
    onPostChange
})(Posts);

export default PostsContainer;