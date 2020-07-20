import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <nav>
                <div>
                    <NavLink to="profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="dialogs">Messages</NavLink>
                </div>
                <div>
                    <NavLink to="music">Music</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
