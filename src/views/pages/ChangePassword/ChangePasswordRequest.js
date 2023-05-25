import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { getCookie, setLocalStorage } from '../../../utilities/helper';

const ChangePasswordRequest = () => {
    const [emailId, setEmailId] = useState("");

    console.log("emailId :", emailId);


    const handleOnSubmit = (event) => {
        console.log('I am clicked');
        event.preventDefault();
        axios({
            url: `${process.env.REACT_APP_NAGAIR}/api/forgot-password-sys-to-sent-email`,
            method: "PUT",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },
            data: emailId,
        })
            .then((response) => {
                console.log("Email Id: ", response);
                if (response.data.message) {
                    toast.success(`${response.data.message}`);
                    setLocalStorage("email", emailId.email);
                    event.target.reset();
                }
            })
    }


    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...emailId };
        newData[field] = value;
        setEmailId(newData)
    }

    return (
        <div className='col-md-4 mx-auto my-5'>
            <h2 className=' text-center fw-bold'>Change Password Request</h2>

            <form onSubmit={handleOnSubmit}>
                <div className='my-3'>
                    <label className="label"> <span className="label-text fw-bold">User Email ID</span></label>
                    <input onChange={handleOnChange} className="input form-control" type="email"
                        name='email' id='email' placeholder="Enter a valid email id" required />
                </div>

                <div className='my-3'>
                    <button type='submit' name='submit' className="btn btn-primary">Send Request</button>
                </div>

            </form>
        </div>
    );
};

export default ChangePasswordRequest;