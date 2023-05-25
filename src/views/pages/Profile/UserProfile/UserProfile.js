import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { getCookie } from '../../../../utilities/helper';
import './UserProfile.css';

const UserProfile = () => {
    const { user, setUser } = useAuth();
    const [profileData, setProfileData] = useState([]);
    console.log("User profileData:", profileData);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_NAGAIR}/api/user-details?id=${user?._id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProfileData(data)
            });
    }, []);

    // bloodGroup email  name   nationalId  permanentAddress   personalPhoneNumber  presentAddress    secondaryPhoneNumber profileImage

    return (
        <div className=' col-lg-6 mx-auto bg-info p-3 my-4 rounded-4'>

            <h2 className='  text-center fw-bolder'>{profileData.name} Profile</h2>

            <div className=' d-flex justify-content-end'>
                <Link to="/updateProfile" className=' fw-bold text-decoration-none fs-4'>Update Profile</Link>
            </div>

            <div>
                <div className=' d-flex justify-content-between'>
                    <h2 className=' my-5 text-center fw-bolder'>Name: {profileData.name} </h2>
                    <img className='profileImg' src={profileData.profileImage} alt="" />
                </div>

                <p className=' my-5  fw-bolder'>National Id: {profileData.nationalId} </p>

                <p className=' my-5  fw-bolder'>Present Address: {profileData.presentAddress} </p>
                <p className=' my-5  fw-bolder'>Permanent Address: {profileData.permanentAddress} </p>
                {
                    user?.role === 'admin' &&
                    <p className=' fs-3 ms-auto'>Admin user</p>
                }
                <p> <b>Name: </b>{profileData.name}</p>
                <p> <b>Email: </b>{profileData.email}</p>

            </div>
        </div>
    );
};

export default UserProfile;