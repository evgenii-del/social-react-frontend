import React from 'react';
import Post from './Post/Post';
import './Posts.css';

const Posts = () => {
    let postsData = [
        {id: 1, content: "First post", likeCount: 2},
        {id: 2, content: "Hi my first post", likeCount: 12},
        {id: 3, content: "I learn React", likeCount: 5},
    ]
    return (
        <div className="posts">
            <h3>Posts</h3>
            <Post content={postsData[0].content} likeCount={postsData[0].likeCount}/>
        </div>
    )
}

export default Posts;