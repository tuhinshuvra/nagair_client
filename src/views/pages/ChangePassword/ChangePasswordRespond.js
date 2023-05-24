import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCookie, getLocalStorage, removeLocalStorage } from '../../../utilities/helper';
import useAuth from '../../../hooks/useAuth';

const ChangePasswordRespond = () => {
    const { user, setUser, isLoading, setIsLoading } = useAuth();
    const [passwordChangedData, setPasswordChangedData] = useState({});
    const param = useParams();

    console.log("param : ", param);
    // console.log("Login user Data : ", user);
    const navigate = useNavigate();

    const location = useLocation();


    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...passwordChangedData };
        newData[field] = value;
        setPasswordChangedData(newData)
    }


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        const email = getLocalStorage('email')

        console.log('SessionStorage', email);

        if (token) {
            setPasswordChangedData({ ...passwordChangedData, token, email })
            console.log(token);
            // Do something with the token
        } else {
            console.log('Token not found in the URL.');
        }
    }, []);
    console.log("passwordChangedData", passwordChangedData);

    const handleOnSubmit = (event) => {
        console.log('I am clicked');
        event.preventDefault();

        fetch(`http://localhost:5001/api/update-password`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
            body: passwordChangedData
        })
            .then((response) => {
                console.log("Response Mail: ", response);

                if (response.status === 400) {
                    console.log("response.data.error");
                    toast.success(`${response.data.error}`)
                }

                if (response.data.message) {
                    toast.success(`${response.data.message}`)
                    removeLocalStorage('email');
                    navigate("/login");

                }
            })
    }




    return (
        <div className='col-md-4 mx-auto my-5'>
            <h2 className=' text-center fw-bold'>Set Your Password</h2>

            <form onSubmit={handleOnSubmit}>
                <div className='my-3'>
                    <label className="label"> <span className="label-text fw-bold">Password</span></label>
                    <input onChange={handleOnChange} className="input form-control" type="password"
                        name='password' id='password' placeholder="Enter a secured password" required />
                </div>

                <div className='my-3'>
                    <button type='submit' name='submit' className="btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    );
};

export default ChangePasswordRespond;