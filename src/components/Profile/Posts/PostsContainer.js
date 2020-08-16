import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        postChange: (content) => {
            let action = onPostChangeActionCreator(content);
            dispatch(action);
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;