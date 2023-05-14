import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getCookie } from '../../../../utilities/helper';
import axios from 'axios';
import './AddDomesticFlights.css'

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


const AddDomesticFlights = () => {
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
            url: `https://nag-air-server.vercel.app/api/upload-domestic-flight`,
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
            <h2 className='fw-bold text-center mt-4 mb-3'>Add Domestic Flight</h2>

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
                    <button className="btn btn-warning">Cancel</button>
                    <button type='submit' name='submit' className="btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    );
};

export default AddDomesticFlights;