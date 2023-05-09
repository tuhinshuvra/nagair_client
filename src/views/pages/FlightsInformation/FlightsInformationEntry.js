import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './FlightsInformationEntry.css'
import { getCookie } from '../../../utilities/helper';


const FlightsInformationEntry = () => {
    // const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const flightLocationName = form.flightLocationName.value;
        const tickitPrice = form.tickitPrice.value;

        const flightInfo = {
            flightLocationName: flightLocationName,
            tickitPrice: tickitPrice,
        }
        console.log("flightInfo : ", flightInfo);

        axios({
            url: `http://localhost:5001/api/upload-flight-information`,
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },
            data: flightInfo,
        })
            .then((response) => {
                console.log("flight-information: ", response);
                if (response.data.data) {
                    toast.success('Successfully added new flight information')
                    navigate('/domesticFlightList')
                }
                // const destination = location?.state?.from || "/";
                // navigate(location?.state?.from || "/", { replace: true });
            })


    }

    return (
        <div className=' col-lg-6 col-md-8 col-10  mx-auto'>
            <h2 className='fw-bold text-center mt-4 mb-3'>Add Flight Information</h2>

            <form onSubmit={handleOnSubmit}>
                <div className="row ">

                    <div className='row'>
                        <div className='col-md-6 my-lg-0 margin-sm'>
                            <label className="label">
                                <span className="label-text text-md  fw-bold ">Pilots Name</span>
                            </label>
                            <input type="text" name='pilotsOfPlaneId' id='pilotsOfPlaneId' placeholder="Enter Pilots Name " className="input form-control" required />
                        </div>

                        <div className='col-md-6 my-lg-0 margin-sm'>
                            <label className="label">
                                <span className="label-text text-md  fw-bold ">CabinCrew Name</span>
                            </label>
                            <input type="text" name='cabinCrewId' id='cabinCrewId' placeholder="Enter Cabin Crew Name " className="input form-control" required />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Plane Number</span>
                            </label>
                            <input type="text" name='planeNumber' id='planeNumber' placeholder="Enter Plane Number" className="input form-control" required />
                        </div>

                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Flight  Number</span>
                            </label>
                            <input type="text" name='flightNumber' id='flightNumber' placeholder="Enter flight number" className="input form-control" required />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Flight From Current Location</span>
                            </label>
                            <input type="text" name='flightFromCurrentLocation' id='flightFromCurrentLocation' placeholder="Enter flight From Curren Location" className="input form-control" required />
                        </div>

                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Flight to Destination Location</span>
                            </label>
                            <input type="text" name='flightToDestinationLocation' id='flightToDestinationLocation' placeholder="Enter flight to Destination Location" className="input form-control" required />
                        </div>
                    </div>


                    <div className='row'>
                        <div className=' col-md-6  my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Flight Departing Date</span>
                            </label>
                            <input type="date" name='flightDepartingDate' id='flightDepartingDate' placeholder="Enter flight Departing Date" className="input form-control" required />
                        </div>

                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold"> Flight Departing Time</span>
                            </label>
                            <input type="date" name='flightDepartingTime' id='flightDepartingTime' placeholder="Enter flight departing Time" className="input form-control" required />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold">Flight Arrival Date</span>
                            </label>
                            <input type="date" name='flightDepartingDate' id='flightDepartingDate' placeholder="Enter flight Departing Date" className="input form-control" required />
                        </div>

                        <div className='col-md-6   my-3'>
                            <label className="label">
                                <span className="label-text fw-bold"> Flight  Arrival Time</span>
                            </label>
                            <input type="date" name='flightArrivalTime' id='flightArrivalTime' placeholder="Enter flight Arrival  Time" className="input form-control" required />
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