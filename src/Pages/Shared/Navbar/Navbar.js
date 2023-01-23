import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/nag-air-logo-small.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar nav_custom navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img className='nav_img' src={Logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold custom_link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  fw-bold custom_link " aria-current="page" to="/about">AboutUs</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-bold custom_link" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold custom_link" aria-current="page" to="/booking">Booking</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold custom_link" aria-current="page" to="/trip">Trip</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold custom_link" aria-current="page" to="/info">FlightInfo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold custom_link" aria-current="page" to="/services">Services</Link>
                            </li>

                            <li>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                                </form>
                            </li>
                            <li className=' d-flex'>
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-outline-primary btn-sm">EN</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm">BN</button>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link to="/login" className="nav-link fw-bold custom_link " aria-current="page">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;