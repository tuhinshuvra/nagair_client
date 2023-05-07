import React from 'react';
import Logo from '../../../assets/logo/nag-air-logo.png';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
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

                                            <form className=' rounded rounded-2 bg-sm login_form'>
                                                <div className=''>
                                                    <h5 className=' mb-4'>Please login to your account</h5>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="username">Username</label>
                                                        <input type="text" id="username" className="form-control"
                                                            placeholder="Enter Name" />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" id="password" className="form-control" placeholder='Enter password' />
                                                    </div>

                                                    <div className="text-center pt-1 mb-md-5 pb-1">
                                                        <button className=" custom_btn fa-lg gradient-custom-2 mb-3" type="button">
                                                            Log In
                                                        </button>
                                                        <a className="text-muted m-2 " href="#!">Forgot password?</a>
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