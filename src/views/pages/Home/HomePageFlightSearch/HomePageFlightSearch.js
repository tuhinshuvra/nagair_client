import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCalendarCheck, FaPlane, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import PlaneImage from '../../../../assets/image/nagair_plane.png';
import useAuth from '../../../../hooks/useAuth';
import { getCookie } from '../../../../utilities/helper';
import './HomePageFlightSearch.css';
import AsyncSelect from 'react-select/async';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Select from 'react-select'

const HomePageFlightSearch = () => {
    const { searchData, setSearchData, searchMultipleDays, setSearchMultipleDays, trips, setTrips, flights, setFlights } = useAuth();
    const [showMultiCityField, setShowMultiCityField] = useState(false);
    const [showReturnField, setShowReturnField] = useState(true);
    const [enableSearch, setEnableSearch] = useState(false);
    const [locationData, setLocationData] = useState([]);

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            borderColor: "#eaecf0",
            boxShadow: state.isFocused ? null : null,
            with: "200px",

            "&:hover": {
                // Overwrittes the different states of border
                borderColor: "#eaecf0",
            },
        }),
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get('https://nag-air-server.vercel.app/api/show-domestic-flight');
                const response2 = await axios.get('https://nag-air-server.vercel.app/api/show-international-flight');

                const data1 = response1.data;
                const data2 = response2.data;

                const combinedData = [...data1, ...data2]; // Merge the data arrays

                setLocationData(combinedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     const myFunc = async () => {
    //         const dataOne = await fetch(`http://localhost:5001/api/show-domestic-flight`)
    //         const dataTwo = await fetch(`http://localhost:5001/api/show-international-flight`)
    //         setLocationData([...dataOne.data, ...dataTwo.data])
    //     }
    //     myFunc()
    // }, [])

    console.log("locationData", locationData);

    const flightOptionFrom = locationData.map((data) => ({ value: data.flightLocationName, label: data.flightLocationName, name: "flightFromCurrentLocation" }))
    const flightOptionTo = locationData.map((data) => ({ value: data.flightLocationName, label: data.flightLocationName, name: "flightToDestinationLocation" }))
    // console.log("flightOptions", flightOptions);


    useEffect(() => {
        AOS.init({
            // offset: 200,
            duration: 2000,
            delay: 200,
            // mirror: true,
            // once: false
        });
    }, [])


    // console.log("trips", trips);
    console.log("searchData :", searchData);

    const navigate = useNavigate();

    const showHideFilds = { 'flightFromCurrentLocation': '', 'flightToDestinationLocation': '', 'flightDepartingDate': '' }
    const [inputList, setInputList] = useState([showHideFilds]);

    const getSearchTravelSelectData = (event) => {
        const field = event.name;
        if (field === "flightToDestinationLocation" || field === "flightFromCurrentLocation") {
            const value = (event.value).toLowerCase()
            const newData = { ...searchData };
            newData[field] = value;
            setSearchData(newData);
        } else {
            const value = (event.value)
            const newData = { ...searchData };
            newData[field] = value;
            setSearchData(newData);
        }
    };

    const getSearchTravelData = (event) => {
        const field = event.target.name;
        const value = (event.target.value)
        const newData = { ...searchData };
        newData[field] = value;
        setSearchData(newData);
    }

    // const getSearchMultipleCitiesData = (event) => {
    // };



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

    const handleInput = (event, tripName, dataIndex) => {
        const field = event.target.name;
        if (field === "flightToDestinationLocation" || field === "flightFromCurrentLocation") {
            const value = event.target.value.toLowerCase();
            setTrips(prevState => {
                const newState = { ...prevState };
                newState[tripName][dataIndex][field] = value;
                return newState;
            });

        } else {
            const value = event.target.value;
            setTrips(prevState => {
                const newState = { ...prevState };
                newState[tripName][dataIndex][field] = value;
                return newState;
            });
        }


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

    const handleSingeTripData = async () => {
        await axios({
            url: `https://nag-air-server.vercel.app/api/show-search-flight-result?travelType=${searchData.travelType}&flightFromCurrentLocation=${searchData?.flightFromCurrentLocation}&flightToDestinationLocation=${searchData?.flightToDestinationLocation}&flightDepartingDate=${searchData.flightDepartingDate}&flightReturningDate=${searchData.flightReturningDate}`,
            method: "GET",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },

        }).then((response) => {
            // console.log("flight-information: ", response.data);
            if (response?.data) {
                // console.log("Search Result Data", response?.data)
                setFlights(response.data);
                navigate('/flightSearchResult');
            }
        })
    }


    const submitMultiCity = (e) => {
        axios({
            url: `${process.env.REACT_APP_NAGAIR}/api/show-multi-city-flight-result`,
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
                <div className=' text-center' data-aos="fade-up-right">
                    {/* <img className='planeImage d-none d-md-block mx-auto' src={PlaneImage} alt="" /> */}
                    <img className='planeImage mx-auto' src={PlaneImage} alt="" />

                </div>
                <h1 className="bannerTitle fw-bold nag_heading" data-aos="fade-up">Life Is Short, Or It's, Big<br /> Let's Explore It</h1>

                {/* <Select options={flightOptions} styles={customStyles} /> */}

                <div className='tinyText col-lg-9   col-11 mx-auto my-4  flight-search'>
                    {/* form top section */}
                    <div
                        onChange={getSearchTravelData}
                        className=' col-md-10   mx-auto  mt-2'>

                        <div
                            className="form-check form-check-inline"
                        >
                            <input
                                onClick={() => handleOneWayFlight()}
                                className="form-check-input"
                                type="radio"
                                name="travelType"
                                id="oneWay"
                                value="oneWay"
                            />
                            <label className="form-check-label fw-bold" htmlFor="one-way">One Way</label>
                        </div>

                        <div
                            className="form-check form-check-inline"
                        >
                            <input
                                onClick={() => handleRoundTripFlight()}
                                className="form-check-input"
                                type="radio"
                                name="travelType"
                                id="roundTrip"
                                value="roundTrip"
                            />
                            <label className="form-check-label fw-bold" htmlFor="return">Round Trip</label>
                        </div>

                        <div
                            className="form-check form-check-inline"
                        >
                            <input
                                onClick={() => handleMultiCityFlight()}
                                className="form-check-input"
                                type="radio"
                                name="travelType"
                                id="multiWay"
                                value="multiWay"
                            />
                            <label className="form-check-label fw-bold" htmlFor="multi-way">Multi-city</label>
                        </div>
                    </div>

                    {/* form bottomsection */}
                    {!showMultiCityField &&
                        <>
                            <div className='row  col-12 mx-auto'>
                                <div className='  col-md-12 d-md-flex justify-content-evenly mx-auto'>

                                    <div className="col-md-3 col-12 d-flex flex-column   my-2   col-3  my-2">
                                        <label className="form-label float-start fw-bold" htmlFor="journeyFrom">
                                            <FaPlaneDeparture />
                                            <span className=''>From</span>
                                        </label>
                                        <Select
                                            onChange={getSearchTravelSelectData}
                                            options={flightOptionFrom}
                                        // styles={customStyles}
                                        // className=' w-100'
                                        />
                                    </div>

                                    <div className="   col-md-3 col-12 d-flex flex-column   my-2   col-3  my-2">
                                        <label className="form-label float-start fw-bold" htmlFor="journeyTo">
                                            <FaPlaneArrival />
                                            <span className=''>To</span>
                                        </label>
                                        <Select
                                            onChange={getSearchTravelSelectData}
                                            options={flightOptionTo}
                                            styles={customStyles}
                                        />
                                    </div>


                                    <div className="   col-md-2 form-outline mx-1 my-2">
                                        <label className="tinyLogoText form-label   fw-bold" htmlFor="password">
                                            < FaCalendarCheck />
                                            <span className=''>Depart</span>
                                        </label>
                                        <input
                                            onChange={getSearchTravelData}
                                            type="date"

                                            name="flightDepartingDate"
                                            id="flightDepartingDate"
                                            className="form-control"
                                        />
                                    </div>

                                    {showReturnField &&
                                        <div className="  col-md-2  form-outline   mx-1 my-2">
                                            <label className="tinyLogoText form-label   fw-bold" htmlFor="password">
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
                                        <label className="tinyLogoText form-label   fw-bold" htmlFor="password">
                                            < FaPlane />
                                            <span className=' small'>Traveller</span>
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
                            <Link onClick={() => handleSingeTripData()} className="searchBtn text-decoration-none" type="button">
                                Search Flights &#10148;
                            </Link>
                        </div>


                    }
                    {showMultiCityField &&
                        <div className='multiCitySearch col-xl-7 col-lg-9 col-md-10 col-11 mx-auto my-2'>
                            <div className=' '>
                                <div>
                                    {
                                        Object.entries(trips).map(([tripName, tripData]) => (
                                            <div key={tripName} className=' d-flex my-1  '>
                                                {
                                                    tripData.map((tripDataItem, dataIndex) =>
                                                    (
                                                        <div key={`${tripName}_${dataIndex}`} className=' d-flex '>

                                                            <div className="col-lg-7 col-md-6 col-4  ">
                                                                <label className="form-label   fw-bold" htmlFor="journeyFrom">
                                                                    <FaPlaneDeparture />
                                                                    <span className=''>From</span>
                                                                </label>
                                                                <Select
                                                                    onChange={getSearchTravelSelectData}
                                                                    options={flightOptionFrom}
                                                                />
                                                            </div>


                                                            <div className=" col-lg-7 col-md-6 col-4 mx-md-1">
                                                                <label className="form-label fw-bold" htmlFor="journeyTo">
                                                                    <FaPlaneArrival />
                                                                    <span className=''>To</span>
                                                                </label>
                                                                <Select
                                                                    onChange={getSearchTravelSelectData}
                                                                    options={flightOptionTo}
                                                                />
                                                            </div>

                                                            <div className=' col-md-5 col-4'>
                                                                <label className="tinyLogoText form-label fw-bold" htmlFor="password">
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
                                {!trips.trip3 ? <button className=' btn btn-primary  fw-bolder my-1' onClick={handleAddTrip}>Add Trip</button> : <></>}
                                {!(trips.trip2 || trips.trip3) ? <></> : <button className='btn btn-primary fw-bolder my-1 ms-1 ' onClick={handleRemoveTrip}>Remove Trip</button>}

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