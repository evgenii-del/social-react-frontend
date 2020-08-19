import React from 'react';
import './Users.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: 'Evgenii',
                photo: 'https://images.pexels.com/photos/2884377/pexels-photo-2884377.jpeg',
                status: 'I like Python',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                },
                followed: true
            },
            {
                id: 2,
                name: 'Filip',
                photo: 'https://images.pexels.com/photos/4939074/pexels-photo-4939074.jpeg',
                status: 'I like Java',
                location: {
                    city: 'Russia',
                    country: 'Moscow'
                },
                followed: false
            },
            {
                id: 3,
                name: 'Bob',
                photo: 'https://images.pexels.com/photos/2480334/pexels-photo-2480334.jpeg',
                status: 'I like JS',
                location: {
                    city: 'LA',
                    country: 'USA'
                },
                followed: true
            }
        ])
    }

    return (
        props.users.map(user =>
            <div className="users">
                <div className="users-left" key={user.id}>
                    <div className="users-img">
                        <img src={user.photo}/>
                    </div>
                    <div className="users-btn">
                        {user.followed ?
                            <a onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</a> :
                            <a onClick={() => {
                                props.follow(user.id)
                            }}>Follow</a>
                        }
                    </div>
                </div>
                <div className="users-right">
                    <div>
                        {user.name} - {user.status}
                    </div>
                    <div>
                        {user.location.country}, {user.location.city}
                    </div>
                </div>
            </div>
        )
    )
}

export default Users;