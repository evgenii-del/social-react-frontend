import React from 'react';
import Post from './Post/Post';
import './Posts.css';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";

const Posts = (props) => {
    let posts = props.posts.map(post => <Post content={post.content} likeCount={post.likeCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let content = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(content));
    }

    return (
        <div>
            <div className="create-post">
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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