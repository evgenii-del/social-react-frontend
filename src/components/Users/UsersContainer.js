import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setUsersActionCreator,
    toggleProgressActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleInProgress(true);
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.props.toggleInProgress(false);
            this.props.setUsers(response.data);
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.inProgress ? <Preloader/> : (
                        <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
                    )
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        inProgress: state.usersReducer.inProgress
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
        },
        toggleInProgress: (inProgress) => {
            dispatch(toggleProgressActionCreator(inProgress));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
