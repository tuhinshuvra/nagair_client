import React, { useContext, useEffect, useState } from 'react';
import './UserDetails.css';
import { useLoaderData } from 'react-router-dom';
import { getCookie } from '../../../../../../utilities/helper';
import { AllContext } from '../../../../../../hooks/ContextData';
import useAuth from '../../../../../../hooks/useAuth';

const UserDetails = () => {
    const { user, setUser, isLoading, setIsLoading } = useAuth();

    const [userData, setUserData] = useState([]);

    // console.log("userData :", userData);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_NAGAIR}/api/user-details?id=${user?._id}`, {
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