import React from 'react';
import Post from './Post/Post';
import './Posts.css';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

const Posts = (props) => {
    let posts = props.posts.map(post => <Post content={post.content} likeCount={post.likeCount}/>);
    let postText = props.newPostText;

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = (event) => {
        let content = event.target.value;
        props.dispatch(onPostChangeActionCreator(content));
    }

    return (
        <div>
            <div className="create-post">
                <textarea onChange={onPostChange} value={postText}/>
                <button onClick={addPost}>Add</button>
            </div>
            <div className="posts">
                <h3>Posts</h3>
                {posts}
            </div>
        </div>
    )
}

export default Posts;