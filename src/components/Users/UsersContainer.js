import React from 'react';
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.props.setUsers(response.data);
        })
    }

    render() {
        return (
            <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id));
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
