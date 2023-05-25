import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, json, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCookie, getLocalStorage, removeLocalStorage } from '../../../utilities/helper';
import useAuth from '../../../hooks/useAuth';

const ChangePasswordRespond = () => {
    const { user, setUser, isLoading, setIsLoading } = useAuth();
    const [passwordChangedData, setPasswordChangedData] = useState({});
    const [loginError, setLoginError] = useState("");


    console.log("loginError", loginError);

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

        try {
            console.log('I am clicked');
            event.preventDefault();

            fetch(`${process.env.REACT_APP_NAGAIR}/api/update-password`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
                },
                body: JSON.stringify(passwordChangedData)
            })
                .then((response) => {
                    console.log("Response Mail: ", response);

                    if (response.status === 400) {
                        response.json().then((data) => {
                            toast.error(data.error);
                            setLoginError(data.error)
                        });
                    } else if (response.status === 200) {
                        response.json().then((data) => {
                            toast.success(data.message);
                            removeLocalStorage('email');
                            navigate("/login");
                        });
                    } else {
                        toast.error('An error occurred. Please try again later.');
                    }
                })
        }
        catch (error) {
            console.log("response.data.error");
            toast.success(`${error}`)
        }
    }




    return (
        <div className='col-md-4 mx-auto my-5'>
            <h2 className=' text-center fw-bold'>Set Your Password</h2>

            {loginError &&
                <>
                    <h5 className=' text-center text-danger'>{loginError} </h5>
                    <div className=' d-flex justify-content-end'>
                        <Link to="/changePasswordRequest" className=' fs-5 text-decoration-none fw-bold ms-auto'>Try Again</Link>
                    </div>
                </>
            }

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