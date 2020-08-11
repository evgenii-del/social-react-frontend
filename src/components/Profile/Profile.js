import React from 'react';
import './Profile.css';
import Posts from './Posts/Posts';
import Banner from './Banner/Banner';
import Avatar from './Avatar/Avatar';
import About from "./About/About";

const Profile = (props) => {
    return (
        <div className="profile">
            <Banner/>
            <div className="profile-inner">
                <Avatar/>
                <About/>
            </div>
            <Posts posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}/>
        </div>
    );
}

export default Profile;
