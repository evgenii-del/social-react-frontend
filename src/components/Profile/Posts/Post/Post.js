import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-image">
                <img src="https://images.pexels.com/photos/4734655/pexels-photo-4734655.jpeg" alt="avatar"/>
            </div>
            <div className="post-content">
                <p>{props.content}</p>
                <p>Likes: <b>{props.likeCount}</b> </p>
            </div>
        </div>
    )
}

export default Post;