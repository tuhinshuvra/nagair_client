import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './FlightsInformationEntry.css'
import { getCookie } from '../../../utilities/helper';


const FlightsInformationEntry = () => {
    const [allCabinCrue, setAllCabinCrue] = useState([]);
    const [allPilot, setAllPilot] = useState([]);
    const [flightInfo, setFlightInfo] = useState({});
    // const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // console.log("flightInfo", flightInfo);

    // show all cabin crue
    useEffect(() => {
        fetch(`https://nag-air-server.vercel.app/api/show-cabin-crew-list`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAllCabinCrue(data);
            });
    }, []);


    // show all pilot 
    useEffect(() => {
        fetch(`https://nag-air-server.vercel.app/api/show-pilot-list`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAllPilot(data);
            });
    }, []);

    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...flightInfo };
        newData[field] = value;
        setFlightInfo(newData)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        // console.log('I am clicked,', flightInfo);

        axios({
            url: `https://nag-air-server.vercel.app/api/upload-flight-information`,
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },
            data: flightInfo,
        })
            .then((response) => {
                console.log("flight-information: ", response);
                if (response.data.data) {
                    toast.success('Successfully added new flight information')
                    navigate('/flightInformationList');
                }
                // const destination = location?.state?.from || "/";
                // navigate(location?.state?.from || "/", { replace: true });
            })

    }

    return (
        <div className=' col-lg-6 col-md-8 col-10  mx-auto'>
            <h2 className='fw-bold text-center mt-4 mb-3'>Add Flight Information</h2>
            <div className=" d-flex  justify-content-end">
                <Link to="/flightInformationList" className="fs-4   text-center text-decoration-none btn btn-outline-primary btn-sm   fw-bold  mt-0 mb-1    fw-bold  my-0  ">Flight Info List</Link>
            </div>

            <form onSubmit={handleOnSubmit}>
                <div className="row ">

                    <div className='row'>
                        <div className='col-md-6 my-lg-0 margin-sm'>
                            <label className="label" htmlFor="pilotsOfPlaneId">
                                <span className="label-text fw-bold">Pilots Name</span>{" "}
                            </label>
                            <select
                                onChange={handleOnChange}
                                id="pilotsOfPlaneId"
                                name="pilotsOfPlaneId"
                                type="text"
                                className="form-select"
                            >
                                <option>Select Pilot</option>
                                {allPilot &&
                                    allPilot.map((pilot, index) => (
                                        <option key={index} value={pilot._id}>
                                            {pilot.pilotName}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className='col-md-6 my-lg-0 margin-sm'>
                            <label className="label">
                                <span className="label-text text-md  fw-bold ">CabinCrew Name</span>
                            </label>
                            <select
                                onChange={handleOnChange}
                                id="cabinCrewId"
                                name="cabinCrewId"
                                type="text"
                                className="form-select"
                            >
                                <option>Select CabinCrue</option>
                                {allCabinCrue &&
                                    allCabinCrue.map((crue, index) => (
                                        <option key={index} value={crue._id}>
                                            {crue.cabinCrewName}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Plane Number</span>
                            </label>
                            <input
                                onChange={handleOnChange}
                                type="text" name='planeNumber' id='planeNumber' placeholder="Enter Plane Number" className="input form-control" required />
                        </div>

                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Flight  Number</span>
                            </label>
                            <input
                                onChange={handleOnChange}
                                type="text" name='flightNumber' id='flightNumber' placeholder="Enter flight number" className="input form-control" required />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold text-capitalize">Location From</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='flightFromCurrentLocation' id='flightFromCurrentLocation' placeholder="Enter flight From Curren Location" className="input form-control" required />
                        </div>

                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Location To</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='flightToDestinationLocation' id='flightToDestinationLocation' placeholder="Enter flight to Destination Location" className="input form-control" required />
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-4   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold text-capitalize">Platinum package(৳)</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='platinumpackagesPrice' id='platinumpackagesPrice' placeholder="Enter platinum pkg fare" className="input form-control" required />
                        </div>

                        <div className='col-md-4   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Gold Package(৳)</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='goldPackagesPrice' id='goldPackagesPrice' placeholder="Enter gold pkg fare" className="input form-control" required />
                        </div>
                        <div className='col-md-4   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Silver Package(৳)</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='silverPackagesPrice' id='silverPackagesPrice' placeholder="Enter silver pkg fare" className="input form-control" required />
                        </div>
                    </div>


                    <div className='row'>
                        <div className=' col-md-6  my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Flight Departing Date</span>
                            </label>
                            <input onChange={handleOnChange} type="date" name='flightDepartingDate' id='flightDepartingDate' placeholder="Enter flight Departing Date" className="input form-control" required />
                        </div>

                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold"> Flight Departing Time</span>
                            </label>
                            <input onChange={handleOnChange} type="time" name='flightDepartingTime' id='flightDepartingTime' placeholder="Enter flight departing Time" className="input form-control" required />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Flight Arrival Date</span>
                            </label>
                            <input onChange={handleOnChange} type="date" name='flightArrivalDate' id='flightArrivalDate' placeholder="Enter flight Departing Date" className="input form-control" required />
                        </div>

                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold"> Flight  Arrival Time</span>
                            </label>
                            <input onChange={handleOnChange} type="time" name='flightArrivalTime' id='flightArrivalTime' placeholder="Enter flight Arrival  Time" className="input form-control" required />
                        </div>
                    </div>


                </div>


                <div className='d-flex justify-content-between my-5'>
                    <button className="btn btn-warning">Cancel</button>
                    <button type='submit' name='submit' className="btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    );
};

export default FlightsInformationEntry;