import React, { useContext, useEffect, useState } from 'react';
import './UserDetails.css';
import { useLoaderData } from 'react-router-dom';
import { getCookie } from '../../../../../../utilities/helper';
import { AllContext } from '../../../../../../hooks/ContextData';
import useAuth from '../../../../../../hooks/useAuth';

const UserDetails = () => {
    const { user, setUser, userDetails, setUserDetails, isLoading, setIsLoading } = useAuth();

    const [userData, setUserData] = useState([]);

    // console.log("userDetails : ", userDetails);
    console.log("userData :", userData);


    useEffect(() => {
        fetch(`http://localhost:5001/api/user-details?id=${userDetails}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUserData(data)
            });
    }, []);

    return (
        <div className=' col-8 mx-auto text-light bg-secondary p-5 my-3 rounded-4'>
            <h2 className=' fw-bold text-center my-4'>Details of {userData.name}</h2>
            <p> Name : {userData.name}</p>
            <p> Role : {userData.role}</p>
            <p> Email : {userData.email}</p>
            <p> Created : {new Date(userData.createdAt).toDateString()}</p>
        </div>
    );
};

export default UserDetails;