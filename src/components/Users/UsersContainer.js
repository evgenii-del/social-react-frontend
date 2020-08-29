import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {follow, setUsers, toggleProgress, unfollow} from "../../redux/users-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleProgress(true);
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.props.toggleProgress(false);
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    toggleProgress
})(UsersContainer);
