import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/carreers-bangladesh-small.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to="/" className="navbar-brand d-flex">
                        <img className='navlogo' src={Logo} alt="" />
                        <h1>Nag Air</h1>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" href="#">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" href="#">Contact</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Booking
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/" className="dropdown-item" href="#">Plan a Trip</Link></li>
                                    <li><Link to="/" className="dropdown-item" href="#">Flight Info</Link></li>
                                    {/* <li><hr className="dropdown-divider" /></li> */}
                                    <li><Link to="/" className="dropdown-item" href="#">Services</Link></li>
                                </ul>
                            </li>

                            <li>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </li>

                            <li className="nav-item mx-lg-2 nav-margin">
                                <div className="btn-group" role="group" aria-label="Alter Language">
                                    <button type="button" className="btn btn-primary"><Link className=' text-decoration-none text-white' to="/" >BN</Link></button>
                                    <button type="button" className="btn btn-secondary"><Link className=' text-decoration-none text-white' to="/" >EN</Link></button>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;