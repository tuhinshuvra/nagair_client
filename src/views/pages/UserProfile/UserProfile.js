import React, { useContext } from 'react';
import './UserProfile.css';
import useAuth from '../../../hooks/useAuth';

const UserProfile = () => {
    const { user, setUser } = useAuth();
    console.log("Login User:", user);
    return (
        <div className=' col-lg-6 mx-auto bg-info p-3 my-4 rounded-4'>
            <h2 className=' my-5 text-center fw-bolder'>{user.name} Profile</h2>
            {
                user?.role === 'admin' &&
                <p className=' fs-3 ms-auto'>Admin user</p>
            }
            <p> <b>Name: </b>{user.name}</p>
            <p> <b>Email: </b>{user.email}</p>
        </div>
    );
};

export default UserProfile;