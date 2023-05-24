import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/logo/nag-air-logo.png';
import './Navbar.css';
import useAuth from '../../../../hooks/useAuth';
import { signout } from '../../../../utilities/helper';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, setUser, } = useAuth();

    const logout = () => {
        signout(() => {
            setUser("");
            toast.success('User Logout Successfully')
            navigate("/login")
        })
    }

    return (
        <div>
            <nav className="navbar nav_bg navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand spin_logo">
                        <img className='logoImg' src={Logo} alt="" />
                    </Link>

                    {/* <p><i className="fa fa-spinner w3-spin" style="font-size:64px"></i></p> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbar-nav d-flex justify-content-center align-items-center mx-auto ">
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/booking">Booking</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/services">Services</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/about">AboutUs</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/contact">Contact</Link>
                            </li>



                            {/* <li className=' d-flex mb-3'>
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-outline-primary btn-sm">EN</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm">BN</button>
                                </div>
                            </li> */}

                            {user?._id ? <>
                                <li className="nav-item dropdown mb-2">
                                    <Link className="  dropdown-toggle fw-bold nav_btn" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> {user?.name} Profile</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                                        {/* <li><Link className="dropdown-item fw-bold nav_btn" to="#">Passenger</Link></li> */}
                                        {/* <li><Link className="dropdown-item fw-bold nav_btn" to="#">Admin</Link></li> */}
                                        {/* <li>
                                            <Link className="nest_nav_btn fw-bold" to="#">Passenger &raquo; </Link>
                                            <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                                <li>
                                                    <Link className="  fw-bold nest_nav_btn" to="/passengerEntry">Passenger Entry</Link>
                                                </li>
                                                <li>
                                                    <Link className="fw-bold nest_nav_btn" to="/passengerList">Passenger List</Link>
                                                </li>
                                                <li>
                                                    <Link className="fw-bold nest_nav_btn" to="/passengerProfile">Passenger Profile</Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li><Link to="/userProfile" className="nest_nav_btn fw-bold">My Profile</Link></li>

                                        {user?.role === 'admin' &&
                                            <>
                                                <li>
                                                    <Link className="fw-bold nest_nav_btn" to="/userList">All User</Link>
                                                </li>

                                                <li>
                                                    <Link className="nest_nav_btn fw-bold" to="#">Flights Location &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn">Domestic Flight &raquo;</Link>
                                                            <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                                                <li>
                                                                    <Link className=" ropdown-item fw-bold nest_nav_btn" to="/domesticFlightAdd">Location Entry</Link>
                                                                </li>

                                                                <li>
                                                                    <Link className=" ropdown-item fw-bold nest_nav_btn" to="/domesticFlightList">Location List</Link>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn">International Flight</Link>
                                                            <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                                                <li>
                                                                    <Link className=" ropdown-item fw-bold nest_nav_btn" to="/internationalFlightAdd">Location Entry</Link>
                                                                </li>
                                                                <li>
                                                                    <Link className=" ropdown-item fw-bold nest_nav_btn" to="/internationalFlightList">Location List</Link>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="nest_nav_btn fw-bold" to="#">Package &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn" to="/packageAdd">Add Package</Link>
                                                        </li>

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn" to="/packageList">Package List</Link>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="nest_nav_btn fw-bold" to="#">Pilot &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn" to="/pilotEntry">Add Pilot</Link>
                                                        </li>

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn" to="/pilotList">Pilot List</Link>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="nest_nav_btn fw-bold" to="#">Cabin Crue &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn" to="/cabinCrueEntry">Add CabinCrue</Link>
                                                        </li>

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn" to="/cabinCrueList">CabinCrue List</Link>
                                                        </li>

                                                    </ul>
                                                </li>

                                                <li>
                                                    <Link className="nest_nav_btn fw-bold" to="#">Flight Information &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn" to="/flightInformationEntry"> Information Entry</Link>
                                                        </li>

                                                        <li>
                                                            <Link className=" ropdown-item fw-bold nest_nav_btn" to="/flightInformationList"> Informatin List</Link>
                                                        </li>

                                                    </ul>
                                                </li>

                                            </>}


                                        <li>
                                            {user?._id &&
                                                // <li className="nav-item mb-2">
                                                <Link onClick={logout} className="fw-bold nest_nav_btn " aria-current="page" to="/">LogOut</Link>
                                                // </li>
                                            }
                                        </li>
                                    </ul>
                                </li>
                            </>
                                :
                                <>
                                    <li className="nav-item mb-2">
                                        <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/login">Login</Link>
                                    </li>

                                </>

                            }
                            {/* <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/changePasswordRequest">Password Change</Link>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;