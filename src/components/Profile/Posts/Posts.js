import React from 'react';
import Post from './Post/Post';
import './Posts.css';

const Posts = (props) => {
    let posts = props.posts.map(post => <Post content={post.content} likeCount={post.likeCount}/>);

    return (
        <div className="posts">
            <h3>Posts</h3>
            {posts}
        </div>
    )
}

export default Posts;