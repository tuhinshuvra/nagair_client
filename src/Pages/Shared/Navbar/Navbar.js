import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#">Nag Air</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link" href="#">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link" href="#">Contact</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Booking
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" href="#">Plan a Trip</Link></li>
                                    <li><Link class="dropdown-item" href="#">Flight Info</Link></li>
                                    {/* <li><hr class="dropdown-divider" /></li> */}
                                    <li><Link class="dropdown-item" href="#">Services</Link></li>
                                </ul>
                            </li>
                            <li>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </li>
                            <li></li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link disabled">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;