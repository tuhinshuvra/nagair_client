import React, { useState } from 'react';
import Logo from '../../../assets/logo/nag-air-logo.png';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;

        const userData = {
            name: fullName,
            email: email,
            password: password,
            role: 'passenger',
        }
        console.log("userData : ", userData);
        fetch('http://localhost:5001/api/signup', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Registerd User Data : ', data);
                if (data.message) {
                    toast.success('User Registered Successfully.')
                    // console.log('User Registered Successfully.');
                    form.reset()
                }
                navigate('/login', { replace: true })

            })
            .catch(error => {
                console.log("Error Occured: ", error.response.data)
                setErrorMessage(error.response.data.error)
            })


    }

    return (
        <div>
            <section className="gradient-form">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-10">
                            <div className="card text-black">
                                <div className="row g-0  rounded-5">
                                    <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center logo_area"  >
                                        <div className="px-3 py-lg-4 p-md-5  mx-auto">
                                            <img className='logo' src={Logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="form_area">

                                            <p className=' text-center text-warning'>{errorMessage}</p>
                                            <form onSubmit={handleOnSubmit} className=' rounded rounded-2 bg-sm login_form'>
                                                <div className=''>
                                                    <h5 className=' mb-4'>Please login to your account</h5>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="fullName">Full Name</label>
                                                        <input type="text" name='fullName' id="fullName" className="form-control" placeholder="Enter Name" />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="email">Email</label>
                                                        <input type="email" name='email' id="email" className="form-control" placeholder="Enter email" required />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" name="password" id="password" className="form-control" placeholder='Enter password' />
                                                    </div>

                                                    <div className="text-center pt-1 mb-md-5 pb-1">
                                                        <button className=" custom_btn fa-lg gradient-custom-2 mb-3" type="submit">
                                                            Register
                                                        </button>
                                                    </div>

                                                    <div className="create_new">
                                                        <p className="mb-0">Already have an account?</p>
                                                        <Link to="/login"><button type="button" className="custom_btn">Login now</button></Link>
                                                    </div>

                                                    <div className="text-center">
                                                        <p>or sign up with:</p>
                                                        <button type="button" className="custom_icon mx-2">
                                                            <FaFacebook />
                                                        </button>

                                                        <button type="button" className="custom_icon mx-2">
                                                            <FaGoogle />
                                                        </button>

                                                        <button type="button" className="custom_icon mx-2">
                                                            <FaTwitter />
                                                        </button>

                                                        <button type="button" className="custom_icon mx-2">
                                                            <FaGithub />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;