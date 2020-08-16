import React from 'react';
import Post from './Post/Post';
import './Posts.css';

const Posts = (props) => {
    debugger;
    let state = props.profilePage;

    let posts = state.posts.map(post => <Post content={post.content} likeCount={post.likeCount}/>);
    let postText = state.newPostText;

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = (event) => {
        let content = event.target.value;
        props.postChange(content);
    }

    return (
        <div>
            <div className="create-post">
                <textarea onChange={onPostChange} value={postText}/>
                <button onClick={onAddPost}>Add</button>
            </div>
            <div className="posts">
                <h3>Posts</h3>
                {posts}
            </div>
        </div>
    )
}

export default Posts;