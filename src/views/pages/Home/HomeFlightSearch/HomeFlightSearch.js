import React, { useState } from 'react';
import { FaCalendarCheck, FaPlane, FaPlaneArrival, FaPlaneDeparture, FaSpa } from 'react-icons/fa';
import PlaneImage from '../../../../assets/image/nagair_plane.png';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import './HomeFlightSearch.css'

const HomeFlightSearch = () => {
    const { searchData, setSearchData } = useAuth();
    const [showMultiCityField, setShowMultiCityField] = useState(false);
    const [showReturnField, setShowReturnField] = useState(true);
    const [inputList, setInputList] = useState([{ 'flightFromCurrentLocation': '', 'flightToDestinationLocation': '', 'flightDepartingDate': '' }]);

    console.log("inputList :", inputList);

    const getSearchTravelData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...searchData };
        newData[field] = value;
        setSearchData(newData);
    };

    const handleAddMore = () => {
        // console.log('I am ckicked');
        setInputList([...inputList, { 'flightFromCurrentLocation': '', 'flightToDestinationLocation': '', 'flightDepartingDate': '' }]);
    }

    const handleRemove = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list)
    }

    // console.log("searchData", searchData);
    // travelType, flightFromCurrentLocation, flightToDestinationLocation, flightDepartingDate, flightReturningDate

    return (
        <div className=' my-0 py-0'>
            <div className="banner   d-flex flex-column justify-content-end text-center">
                <div className=' text-center'>
                    <img className='planeImage d-none d-md-block mx-auto' src={PlaneImage} alt="" />

                </div>
                <h1 className="bannerTitle fw-bold nag_heading animate_bottom">Life Is Short, Or It's, Big<br /> Let's Explore It</h1>


                {/* flight search */}
                {/* <form className='    px-md-3 my-md-4 m-md-3'> */}

                <div className='tinyText col-xl-11  mx-auto flight-search'>
                    {/* form top section */}
                    <div
                        onChange={getSearchTravelData}
                        className=' col-md-10 col-12 mx-auto '>

                        <div
                            onClick={() => setShowReturnField(false)}
                            className="form-check form-check-inline"
                        >
                            <input onClick={() => setShowMultiCityField(false)} className="form-check-input" type="radio" name="travelType" id="oneWay" value="oneWay" />
                            <label className="form-check-label fw-bold" htmlFor="one-way">One Way</label>
                        </div>

                        <div
                            onClick={() => setShowReturnField(true)}
                            className="form-check form-check-inline"
                        >
                            <input onClick={() => setShowMultiCityField(false)} className="form-check-input" type="radio" name="travelType" id="roundTrip" value="roundTrip" />
                            <label className="form-check-label fw-bold" htmlFor="return">Round Trip</label>
                        </div>

                        <div
                            onClick={() => setShowReturnField(false)}
                            className="form-check form-check-inline"
                        >
                            <input onClick={() => setShowMultiCityField(true)} className="form-check-input" type="radio" name="travelType" id="multiWay" value="multiWay" />
                            <label className="form-check-label fw-bold" htmlFor="multi-way">Multi-city</label>
                        </div>
                    </div>

                    {/* form bottomsection */}

                    <div className='row  col-12 mx-auto'>
                        <div className='col-lg-11 col-md-12 d-md-flex justify-content-evenly mx-auto'>
                            <div className="form-outline   mx-1 my-2">
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

                            <div className="form-outline   mx-1 my-2">
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

                            <div className="form-outline   mx-1 my-2">
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

                            {showReturnField &&
                                <div className="form-outline   mx-1 my-2">
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

                            }

                            {/* <div className="form-outline  col-lg-3 mx-1 my-2">
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
                                </div> */}
                            <div className="form-outline mx-1 my-2">
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



                    {/* for multi city flight search */}

                    {showMultiCityField &&
                        <>
                            {
                                inputList.map((x, i) => {
                                    return (

                                        <div className='row  col-12 mx-auto'>
                                            <div className=' col-lg-8 col-md-12 d-flex justify-content-evenly mx-auto'>

                                                <div className="form-outline  my-2">
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
                                                        placeholder="Enter Journey from"

                                                        onBlur={e => handleInputChange(e, i)}
                                                    />
                                                </div>

                                                <div className="form-outline  my-2">
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
                                                        placeholder='Enter journey destination'
                                                        onBlur={e => handleInputChange(e, i)}
                                                    />
                                                </div>
                                                <div className="form-outline mx-1 my-2">
                                                    <label className="tinyLogoText form-label float-start fw-bold" htmlFor="password">
                                                        < FaCalendarCheck />
                                                        <span className=''>Depart</span>
                                                    </label>
                                                    <input
                                                        onChange={getSearchTravelData}
                                                        type="date"
                                                        name="flightDepartingDate"
                                                        id="flightDepartingDate"
                                                        className="form-control"
                                                        onBlur={e => handleInputChange(e, i)}
                                                    />
                                                </div>
                                                <div className='d-flex align-items-end'>
                                                    {
                                                        (inputList.length - 1 === i) && (inputList.length < 3) &&
                                                        <button onClick={handleAddMore} className='addRemoveBtn  ms-2'>Add More</button>
                                                    }
                                                    {
                                                        inputList.length !== 1 &&
                                                        <button onClick={() => handleRemove(i)} className='addRemoveBtn  ms-2'>Remove</button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                        </>
                    }



                    <div className="text-center pt-3 pb-3">
                        {/* <Link to={`/flightSearchResult?travelType=${searchData.travelType}&flightFromCurrentLocation=${searchData.flightFromCurrentLocation}&flightToDestinationLocation=${searchData.flightToDestinationLocation}&flightDepartingDate=${searchData.flightDepartingDate}&flightReturningDate=${searchData.flightReturningDate}`} className="custom_btn text-decoration-none" type="button"> */}
                        <Link to={`/flightSearchResult`} className="searchBtn text-decoration-none" type="button">
                            Search Flights &#10148;
                        </Link>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div>
    );
};

export default HomeFlightSearch;