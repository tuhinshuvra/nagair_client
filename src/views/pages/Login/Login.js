import React, { useState } from 'react';
import Logo from '../../../assets/logo/nag-air-logo.png';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import axios from 'axios';
import { authenticate, isAuth } from '../../../utilities/helper';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { user, setUser, isLoading, setIsLoading, setAuthError, authError } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordAllert, setPasswordAllert] = useState("");
    const [loginData, setLoginData] = useState({});

    const [loginError, setLoginError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    console.log('Login User Data :', user.email);


    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = event => {
        event.preventDefault();

        const { email, password } = loginData;

        //password validation by some condition
        if (password === undefined || email === undefined) {
            setErrorMessage("please fill the form");
        } else if (password.length < 8) {
            setPasswordAllert("Password must be minimum 8 characters");
        } else if (password.length > 8) {
            setPasswordAllert("");
        }

        axios({
            method: "POST",
            url: `https://nag-air-server.vercel.app/api/signin`,
            data: { email, password },
        })
            .then((response) => {
                console.log("Signin Access: ", response);
                // const destination = location?.state?.from || "/";
                navigate(location?.state?.from || "/", { replace: true });
                setErrorMessage("");
                authenticate(response.data, () => {
                    setUser(isAuth());
                    if (user.email) {
                        toast.success('The User Successfully Logged In')
                    }
                    setIsLoading(false);
                    navigate("/", { replace: true });
                    console.log("cookie local save ", isAuth());
                });
            })
            .catch((error) => {
                setErrorMessage(error.response.data.error);
                console.log("SIGN IN ERROR", error.response.data);
            });
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

                                            <form
                                                onSubmit={handleLoginSubmit}
                                                className=' rounded rounded-2 bg-sm login_form'
                                                autoComplete='off'
                                            >
                                                <div className=''>
                                                    <h5 className=' mb-4'>Please login to your account</h5>
                                                    <input
                                                        className="d-none"
                                                        autoComplete="off"
                                                        name="hidden"
                                                        type="text"
                                                    ></input>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="username">User Id</label>
                                                        <input
                                                            onBlur={handleOnBlur}
                                                            name="email"
                                                            type="email"
                                                            id="email"
                                                            className="form-control"
                                                            placeholder="Enter Phone No or Email address" />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input
                                                            onBlur={handleOnBlur}
                                                            name='password'
                                                            type="password"
                                                            id="password"
                                                            className="form-control"
                                                            placeholder='Enter password' />
                                                    </div>

                                                    <div className="text-center pt-1 mb-md-5 pb-1">
                                                        <button type="submit" className=" custom_btn fa-lg gradient-custom-2 mb-3" >Log In</button>
                                                        <a className="text-muted m-2 text-decoration-none " href="#!">Forgot password?</a>
                                                    </div>

                                                    <div className="create_new ">
                                                        <p className="mb-0 me-2">Don't have an account?</p>
                                                        <Link to="/register"><button type="button" className="custom_btn">Create new</button></Link>
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

export default Login;