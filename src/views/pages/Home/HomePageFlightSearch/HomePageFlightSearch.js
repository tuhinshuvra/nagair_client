import React, { useState } from 'react';
import { FaCalendarCheck, FaPlane, FaPlaneArrival, FaPlaneDeparture, FaSpa } from 'react-icons/fa';
import PlaneImage from '../../../../assets/image/nagair_plane.png';
import useAuth from '../../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie } from '../../../../utilities/helper';
import axios from 'axios';
import './HomePageFlightSearch.css';

const HomePageFlightSearch = () => {
    const { searchData, setSearchData, searchMultipleDays, setSearchMultipleDays, trips, setTrips, flights, setFlights } = useAuth();
    const [showMultiCityField, setShowMultiCityField] = useState(false);
    const [showReturnField, setShowReturnField] = useState(true);
    const [enableSearch, setEnableSearch] = useState(false);

    // console.log("trips", trips);


    const navigate = useNavigate();

    const showHideFilds = { 'flightFromCurrentLocation': '', 'flightToDestinationLocation': '', 'flightDepartingDate': '' }
    const [inputList, setInputList] = useState([showHideFilds]);

    const getSearchTravelData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...searchData };
        newData[field] = value;
        setSearchData(newData);
    };

    const getSearchMultipleCitiesData = (event) => {
    };


    const handleAddTrip = () => {
        setTrips(prevState => ({
            ...prevState,
            [`trip${Object.keys(prevState).length + 1}`]: [{ flightFromCurrentLocation: '', flightToDestinationLocation: '', flightDepartingDate: '' }]
        }));
    };

    const handleRemoveTrip = () => {
        setTrips(prevState => {
            const updatedTrips = { ...prevState };
            const lastKey = Object.keys(updatedTrips).pop();
            delete updatedTrips[lastKey];
            return updatedTrips;
        });
        // console.log("Function Trips", trips)
    };

    // console.log("Trips", trips)

    const handleInput = (e, tripName, dataIndex) => {
        const name = e.target.name;
        const value = e.target.value;

        setTrips(prevState => {
            const newState = { ...prevState };
            newState[tripName][dataIndex][name] = value;
            return newState;
        });
    };

    // console.log("trips", trips);

    const getSearchMultipleDaysData = (event) => {
        const value = event.target.value;
        setSearchMultipleDays([...searchMultipleDays, value]);
    };

    const handleOneWayFlight = () => {
        setShowReturnField(false);
        setShowMultiCityField(false);
        setEnableSearch(true);
    }
    const handleRoundTripFlight = () => {
        setShowReturnField(true);
        setShowMultiCityField(false);
        setEnableSearch(true);
    }
    const handleMultiCityFlight = () => {
        setShowReturnField(false);
        setShowMultiCityField(true);
        setEnableSearch(true);
    }


    const submitMultiCity = (e) => {
        axios({
            url: "https://nag-air-server.vercel.app/api/show-multi-city-flight-result",
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },
            data: trips,
        })
            .then((response) => {
                // console.log("flight-information: ", response.data);
                if (response?.data) {
                    // console.log("Search Result Data", response?.data)
                    setFlights(response.data);
                    navigate('/flightSearchResult');
                }
            })

        // console.log("JSON.stringify(trips) : ", trips);
    }



    return (
        <div className=' my-0 py-0'>
            <div className="flightSearchArea   d-flex flex-column justify-content-end text-center">
                <div className=' text-center'>
                    <img className='planeImage d-none d-md-block mx-auto' src={PlaneImage} alt="" />

                </div>
                <h1 className="bannerTitle fw-bold nag_heading animate_bottom">Life Is Short, Or It's, Big<br /> Let's Explore It</h1>


                <div className='tinyText col-xl-11  mx-auto my-4 flight-search'>
                    {/* form top section */}
                    <div
                        onChange={getSearchTravelData}
                        className=' col-md-10 col-12 mx-auto  mt-2'>


                        <div
                            className="form-check form-check-inline"
                        >
                            <input onClick={() => handleOneWayFlight()} className="form-check-input" type="radio" name="travelType" id="oneWay" value="oneWay" />
                            <label className="form-check-label fw-bold" htmlFor="one-way">One Way</label>
                        </div>

                        <div
                            className="form-check form-check-inline"
                        >
                            <input onClick={() => handleRoundTripFlight()} className="form-check-input" type="radio" name="travelType" id="roundTrip" value="roundTrip" />
                            <label className="form-check-label fw-bold" htmlFor="return">Round Trip</label>
                        </div>

                        <div
                            className="form-check form-check-inline"
                        >
                            <input onClick={() => handleMultiCityFlight()} className="form-check-input" type="radio" name="travelType" id="multiWay" value="multiWay" />
                            <label className="form-check-label fw-bold" htmlFor="multi-way">Multi-city</label>
                        </div>
                    </div>

                    {/* form bottomsection */}
                    {!showMultiCityField &&
                        <>
                            <div className='row  col-12 mx-auto'>
                                <div className='col-lg-11 col-md-12 d-md-flex justify-content-evenly mx-auto'>
                                    <div className="form-outline   mx-1 my-2">
                                        <label className="form-label float-start fw-bold" htmlFor="journeyFrom">
                                            <FaPlaneDeparture />
                                            <span className=''>From</span>
                                        </label>
                                        <input
                                            onChange={getSearchTravelData}
                                            type="text"
                                            name="flightFromCurrentLocation"
                                            id="flightFromCurrentLocation"
                                            className="form-control"
                                            placeholder="Enter Journey from"
                                            onBlur={getSearchMultipleCitiesData}
                                        />

                                    </div>

                                    <div className="form-outline   mx-1 my-2">
                                        <label className="form-label float-start fw-bold " htmlFor="journeyTo">
                                            <FaPlaneArrival />
                                            <span className=''>To</span>
                                        </label>
                                        <input
                                            onChange={getSearchTravelData}
                                            type="text"
                                            name="flightToDestinationLocation"
                                            id="flightToDestinationLocation"
                                            className="form-control"
                                            placeholder='Enter journey destination'
                                            onBlur={getSearchMultipleCitiesData}
                                        />
                                    </div>
                                    <div className=' '></div>
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
                                            onBlur={getSearchMultipleDaysData}

                                        />
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
                                                className="form-control"
                                                onBlur={getSearchMultipleDaysData}
                                            />
                                        </div>

                                    }

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
                        </>
                    }


                    {(!showMultiCityField && enableSearch) &&
                        <div className="text-center pt-3 pb-3">
                            <Link to={`/flightSearchResult`} className="searchBtn text-decoration-none" type="button">
                                Search Flights &#10148;
                            </Link>
                        </div>


                    }
                    {showMultiCityField &&
                        <div className='multiCitySearch col-xl-7 col-lg-9 mx-auto my-2'>
                            <div className=' '>
                                <div>
                                    {/* {!trips.trip3 ? <button className=' btn btn-primary btn-sm fw-bolder my-1 ' onClick={handleAddTrip}>Add Trip</button> : <></>} */}


                                    {
                                        Object.entries(trips).map(([tripName, tripData]) => (
                                            <div key={tripName} className=' d-flex my-1 '>
                                                {/* <h4>{tripName.toUpperCase()}-</h4> */}
                                                {
                                                    tripData.map((tripDataItem, dataIndex) =>
                                                    (
                                                        <div key={`${tripName}_${dataIndex}`} className=' d-lg-flex'>
                                                            <div>
                                                                <label className="form-label float-start fw-bold" htmlFor="journeyFrom">
                                                                    <FaPlaneDeparture />
                                                                    <span className=''>From</span>
                                                                </label>
                                                                <input className="form-control" type="text" name="flightFromCurrentLocation" placeholder='Enter journey from' value={tripDataItem.flightFromCurrentLocation} onChange={(e) => handleInput(e, tripName, dataIndex)} />
                                                            </div>
                                                            <div className='mx-1'>
                                                                <label className="form-label float-start fw-bold " htmlFor="journeyTo">
                                                                    <FaPlaneArrival />
                                                                    <span className=''>  To </span>
                                                                </label>
                                                                <input className="form-control" type="text" name="flightToDestinationLocation" placeholder='Enter journey destination' value={tripDataItem.flightToDestinationLocation} onChange={(e) => handleInput(e, tripName, dataIndex)} />

                                                            </div>
                                                            <div>
                                                                <label className="tinyLogoText form-label float-start fw-bold" htmlFor="password">
                                                                    < FaCalendarCheck />
                                                                    <span className=''>Depart</span>
                                                                </label>
                                                                <input className="form-control" type="date" name="flightDepartingDate" value={tripDataItem.flightDepartingDate} onChange={(e) => handleInput(e, tripName, dataIndex)} />
                                                            </div>

                                                        </div>
                                                    ))
                                                }

                                            </div>
                                        ))
                                    }
                                </div>
                                {!trips.trip3 ? <button className=' btn btn-primary  fw-bolder my-1  w-25 ' onClick={handleAddTrip}>Add Trip</button> : <></>}
                                {!(trips.trip2 || trips.trip3) ? <></> : <button className='btn btn-primary fw-bolder my-1 ms-md-2 w-25' onClick={handleRemoveTrip}>Remove Trip</button>}

                            </div>


                            <button onClick={() => submitMultiCity()} className="searchBtn text-decoration-none my-1" type="submit">
                                Search Flights &#10148;
                            </button>

                        </div>}

                </div>
            </div>
        </div>
    );
};

export default HomePageFlightSearch;