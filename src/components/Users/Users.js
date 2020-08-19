import React from 'react';
import './Users.css';
import * as axios from "axios";

// const Users = (props) => {
//     let showUsers = () => {
//         if (props.users.length === 0) {
//
//             axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
//                 props.setUsers(response.data);
//             })
//         }
//     }
//
//     return (
//         <div>
//             <button onClick={showUsers}>Show</button>
//             {
//                 props.users.map(user => <div className="users">
//                         <div className="users-left" key={user.id}>
//                             <div className="users-img">
//                                 <img src='https://images.pexels.com/photos/2480334/pexels-photo-2480334.jpeg'/>
//                             </div>
//                             <div className="users-btn">
//                                 {user.followed ?
//                                     <a onClick={() => {
//                                         props.unfollow(user.id)
//                                     }}>Unfollow</a> :
//                                     <a onClick={() => {
//                                         props.follow(user.id)
//                                     }}>Follow</a>
//                                 }
//                             </div>
//                         </div>
//                         <div className="users-right">
//                             <div>
//                                 {user.name} - {user.website} <br/>
//                                 {user.email}
//                             </div>
//                             <div>
//                                 {user.address.city}, {user.address.street}
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

class Users extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.users.length === 0) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
                this.props.setUsers(response.data);
            })
        }
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //             this.props.setUsers(response.data);
    //         })
    //     }
    // }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div className="users">
                            <div className="users-left" key={user.id}>
                                <div className="users-img">
                                    <img src='https://images.pexels.com/photos/2480334/pexels-photo-2480334.jpeg'/>
                                </div>
                                <div className="users-btn">
                                    {user.followed ?
                                        <a onClick={() => {
                                            this.props.unfollow(user.id)
                                        }}>Unfollow</a> :
                                        <a onClick={() => {
                                            this.props.follow(user.id)
                                        }}>Follow</a>
                                    }
                                </div>
                            </div>
                            <div className="users-right">
                                <div>
                                    {user.name} - {user.website} <br/>
                                    {user.email}
                                </div>
                                <div>
                                    {user.address.city}, {user.address.street}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;