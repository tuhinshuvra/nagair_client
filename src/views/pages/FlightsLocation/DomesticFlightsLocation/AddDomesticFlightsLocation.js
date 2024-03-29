import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getCookie } from '../../../../utilities/helper';
import axios from 'axios';
import './AddDomesticFlightsLocation.css'

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}


const AddDomesticFlightsLocation = () => {
    // const [errorMessage, setErrorMessage] = useState("");
    const [locationData, setLocationData] = useState("");
    const navigate = useNavigate();


    console.log("locationImage", locationData);

    const handelImage = async (e) => {
        const field = e.target.name;

        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        const newData = { ...locationData };
        newData[field] = base64;

        setLocationData(newData);
    };


    const handleOnSubmit = (event) => {

        event.preventDefault();
        const form = event.target;

        const flightLocationName = form.flightLocationName.value;
        const tickitPrice = form.tickitPrice.value;

        const flightInfo = {
            flightLocationName: flightLocationName,
            tickitPrice: tickitPrice,
            locationImage: locationData.locationImage,
        }
        console.log("flightInfo : ", flightInfo);

        axios({
            url: `${process.env.REACT_APP_NAGAIR}/api/upload-domestic-flight`,
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },
            data: flightInfo,
        })
            .then((response) => {
                console.log("Signin Access: ", response);
                if (response.data.data) {
                    toast.success('Successfully added new Domestic Flight')
                    navigate('/domesticFlightList')
                }
                // const destination = location?.state?.from || "/";
                // navigate(location?.state?.from || "/", { replace: true });
            })


    }

    return (
        <div className=' col-lg-6 col-md-8 col-10  mx-auto'>
            <h2 className="text-center  fw-bold  mt-5">Add Domestic Flight's Location</h2>
            <div className=" d-flex  justify-content-end">
                <Link to="/domesticFlightList" className="fs-4  text-center text-decoration-none btn btn-outline-primary btn-sm   fw-bold  mt-0 mb-1 ">Domestic Flight's List</Link>
            </div>

            <form onSubmit={handleOnSubmit}>
                <div className="row ">
                    <div className=' my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md  fw-bold ">Flight Location Name</span>
                        </label>
                        <input type="text" name='flightLocationName' id='flightLocationName' placeholder="Flight Location Name Enter" className="input form-control" required />
                    </div>

                    <div className='   my-3'>
                        <label className="label">
                            <span className="label-text fw-bold">Tickit Price</span>
                        </label>
                        <input type="text" name='tickitPrice' id='tickitPrice' placeholder="Tickit Price Entry" className="input form-control" required />
                    </div>

                    <div className=' '>
                        <label className="label">
                            <span className="label-text  fw-bold  ">Location Image</span>
                        </label>

                        <input onChange={handelImage} accept="image/*" type="file" name='locationImage' id='locationImage' placeholder="Location Image Enter" className="input form-control" required />
                    </div>
                </div>


                <div className='d-flex justify-content-between my-5'>
                    <button type="reset" className="btn btn-warning" value="Reset">Reset</button>
                    <button type='submit' name='submit' className="btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    );
};

export default AddDomesticFlightsLocation;