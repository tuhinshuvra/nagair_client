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
        <div className=' col-lg-6 mx-auto userProfile rounded-4 py-3 px-5 my-4'>

            <h2 className='  text-center fw-bolder my-2'>{profileData.name} Profile</h2>

            <div className=' d-flex justify-content-end mt-4'>
                <Link to="/updateProfile" className='btn btn-outline-primary btn-sm fw-bold text-decoration-none fs-4'>Update Profile</Link>
            </div>

            <div>
                <div className=' d-flex justify-content-between mt-3'>
                    <div className=' col-md-6'>
                        {user?.role === 'admin' && <h4 className='ms-auto fw-bold'> <i> Admin user</i></h4>}

                        <p className='  '> <b>Name:</b> {profileData.name} </p>
                        <p className='  '> <b>Email:</b> {profileData.email} </p>
                        <p className='  '> <b>Phone:</b> {profileData.personalPhoneNumber} </p>
                    </div>
                    <div className=' col-md-6 d-flex justify-content-end'>
                        <img className='profileImg' src={profileData.profileImage} alt="" />
                    </div>
                </div>

                <div className=' d-flex justify-content-between mt-3'>
                    <p className=''><b>Secondary Phone:</b> {profileData.secondaryPhoneNumber} </p>
                    <p className=''><b>National Id:</b> {profileData.nationalId} </p>
                </div>


                <p className=''> <b>Present Address:</b> {profileData.presentAddress} </p>
                <p className=''> <b>Permanent Address:</b> {profileData.permanentAddress} </p>


            </div>
        </div>
    );
};

export default UserProfile;