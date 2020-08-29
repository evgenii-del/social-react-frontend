import React from 'react';
import './Users.css';

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(user => <div className="users">
                        <div className="users-left" key={user.id}>
                            <div className="users-img">
                                <img src='https://images.pexels.com/photos/2480334/pexels-photo-2480334.jpeg'/>
                            </div>
                            <div className="users-btn">
                                {user.followed ? <input type="submit" value="UNFOLLOW" onClick={() => {
                                    props.unfollow(user.id)
                                }}/> : <input type="submit" value="FOLLOW" onClick={() => {
                                    props.follow(user.id)
                                }}/>
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

export default Users;