import React from 'react';
import Post from './Post/Post';
import './Posts.css';

const Posts = (props) => {
    let posts = props.posts.map(post => <Post content={post.content} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let content = newPostElement.current.value;
        props.addPost(content);
        newPostElement.current.value = '';
    }
    
    return (
        <div>
            <div className="create-post">
                <textarea ref={newPostElement}></textarea>
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