import React from 'react';
import './Profile.css';
import Banner from './Banner/Banner';
import Avatar from './Avatar/Avatar';
import About from "./About/About";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className="profile">
            <Banner/>
            <div className="profile-inner">
                <Avatar/>
                <About/>
            </div>
            <PostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;
