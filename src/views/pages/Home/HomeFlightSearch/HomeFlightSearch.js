import React, { useState } from 'react';
import { FaCalendarCheck, FaPlane, FaPlaneArrival, FaPlaneDeparture, FaSpa } from 'react-icons/fa';
import PlaneImage from '../../../../assets/image/nagair_plane.png';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import './HomeFlightSearch.css'

const HomeFlightSearch = () => {
    const { searchData, setSearchData } = useAuth();


    const getSearchTravelData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...searchData };
        newData[field] = value;
        setSearchData(newData);
    };

    console.log("searchData", searchData);
    // travelType, flightFromCurrentLocation, flightToDestinationLocation, flightDepartingDate, flightReturningDate

    return (
        <div className=' my-0 py-0'>
            <div className="banner   d-flex flex-column justify-content-end text-center">
                <div className=' text-center'>
                    <img className='planeImage d-none d-md-block mx-auto' src={PlaneImage} alt="" />

                </div>
                <h1 className="bannerTitle fw-bold nag_heading animate_bottom">Life Is Short, Or It's, Big<br /> Let's Explore It</h1>


                {/* flight search */}
                <form className='bannerForm   rounded rounded-2 p-2 m-md-3'>

                    <div className='tinyText col-xl-11  mx-auto flight-search mt-3'>

                        {/* form top section */}
                        <div
                            onChange={getSearchTravelData}
                            className=' col-md-10 col-12 mx-auto '>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="travelType" id="oneWay" value="oneWay" />
                                <label className="form-check-label fw-bold" htmlFor="one-way">One Way</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="travelType" id="roundTrip" value="roundTrip" />
                                <label className="form-check-label fw-bold" htmlFor="return">Round Trip</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="travelType" id="multiWay" value="multiWay" />
                                <label className="form-check-label fw-bold" htmlFor="multi-way">Multi-city</label>
                            </div>
                        </div>

                        {/* form bottomsection */}
                        <div className='row  col-12 mx-auto'>
                            <div className='col-xl-5 col-lg-11 col-md-12 d-md-flex justify-content-between mx-lg-auto'>
                                <div className="form-outline  col-lg-6 mx-1 my-2">
                                    <label className="form-label float-start fw-bold" htmlFor="journeyFrom">
                                        <FaPlaneDeparture />
                                        <span className=''>   From</span>
                                    </label>
                                    <input
                                        onChange={getSearchTravelData}
                                        type="text"
                                        name="flightFromCurrentLocation"
                                        id="flightFromCurrentLocation"
                                        className="form-control"
                                        placeholder="Enter Journey from" />
                                </div>

                                <div className="form-outline  col-lg-6 mx-1 my-2">
                                    <label className="form-label float-start fw-bold " htmlFor="journeyTo">
                                        <FaPlaneArrival />
                                        <span className=''>  To </span>
                                    </label>
                                    <input
                                        onChange={getSearchTravelData}
                                        type="text"
                                        name="flightToDestinationLocation"
                                        id="flightToDestinationLocation"
                                        className="form-control"
                                        placeholder='Enter journey destination' />
                                </div>
                            </div>

                            <div className=' col-xl-7 d-md-flex'>
                                <div className="form-outline  col-lg-3   mx-1 my-2">
                                    <label className="tinyLogoText form-label float-start fw-bold" htmlFor="password">
                                        < FaCalendarCheck />
                                        <span className=''>Depart</span>
                                    </label>
                                    <input
                                        onChange={getSearchTravelData}
                                        type="date"
                                        name="flightDepartingDate"
                                        id="flightDepartingDate"
                                        className="form-control" />
                                </div>
                                <div className="form-outline  col-lg-3 mx-1 my-2">
                                    <label className="tinyLogoText form-label float-start fw-bold" htmlFor="password">
                                        < FaCalendarCheck />
                                        <span className=''>Return</span>
                                    </label>
                                    <input
                                        onChange={getSearchTravelData}
                                        type="date"
                                        name="flightReturningDate"
                                        id="flightReturningDate"
                                        className="form-control" />
                                </div>

                                <div className="form-outline  col-lg-3 mx-1 my-2">
                                    <label className="tinyLogoText form-label float-start fw-bold" htmlFor="password">
                                        <FaSpa />
                                        <span className=''>Cabin Class</span>

                                    </label>
                                    <select className="tinyLogoText form-select select-bordered  ">

                                        <option disabled defaultValue>Select</option>
                                        <option value={0}>Economy</option>
                                        <option value={1}>Preminum Economy</option>
                                        <option value={2}>Business</option>
                                        <option value={3}>First Class</option>
                                    </select>
                                </div>
                                <div className="form-outline  col-xl-2 mx-1 my-2">
                                    <label className="tinyLogoText form-label float-start fw-bold" htmlFor="password">
                                        < FaPlane />
                                        <span className=''>Travellers</span>
                                    </label>
                                    <select className="form-select select-bordered  ">
                                        <option disabled defaultValue>Select</option>
                                        <option value={0}>One</option>
                                        <option value={1}>Two</option>
                                        <option value={2}>Three</option>
                                        <option value={3}>Four</option>
                                        <option value={4}>Five</option>
                                        <option value={5}>Six</option>
                                        <option value={6}>Seven</option>
                                        <option value={7}>Eight</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-3 pb-3">
                            {/* <Link to={`/flightSearchResult?travelType=${searchData.travelType}&flightFromCurrentLocation=${searchData.flightFromCurrentLocation}&flightToDestinationLocation=${searchData.flightToDestinationLocation}&flightDepartingDate=${searchData.flightDepartingDate}&flightReturningDate=${searchData.flightReturningDate}`} className="custom_btn text-decoration-none" type="button"> */}
                            <Link to={`/flightSearchResult`} className="custom_btn text-decoration-none" type="button">
                                Search Flights &#10148;
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomeFlightSearch;