import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { getCookie } from '../../../utilities/helper';
import './AddPackage.css'




const AddPackage = () => {
    // const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const packageName = form.packageName.value;
        const bagWeight = form.bagWeight.value;
        const packagesPrice = form.packagesPrice.value;
        const packageFacility1 = form.packageFacility1.value;
        const packageFacility2 = form.packageFacility2.value;

        const packageInfo = {
            packageName: packageName,
            bagWeight: bagWeight,
            packagesPrice: packagesPrice,
            packageFacility1: packageFacility1,
            packageFacility2: packageFacility2,
        }
        console.log("packageInfo : ", packageInfo);

        axios({
            url: `https://nag-air-server.vercel.app/api/packages-data-upload`,
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },
            data: packageInfo,
        })
            .then((response) => {
                console.log("Signin Access: ", response);
                if (response.data.data) {
                    toast.success('Successfully added new Package')
                    navigate('/packageList')
                }
                // const destination = location?.state?.from || "/";
                // navigate(location?.state?.from || "/", { replace: true });
            })


    }

    return (
        <div className=' col-lg-6 col-md-8 col-10  mx-auto'>
            <h2 className='fw-bold text-center mt-5 mb-3'>Add New Package</h2>
            <div className=" d-flex  justify-content-end">
                <Link to="/packageList" className="fs-4 text-info text-center text-decoration-none    fw-bold  my-0  ">Package List</Link>
            </div>

            <form onSubmit={handleOnSubmit}>
                <div className="row ">
                    <div className=' my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md  fw-bold ">Package Name</span>
                        </label>
                        <input type="text" name='packageName' id='packageName' placeholder="Enter package name" className="input form-control" required />
                    </div>

                    <div className='my-2'>
                        <label className="label">
                            <span className="label-text fw-bold">Bag Weight (Kg)</span>
                        </label>
                        <input type="text" name='bagWeight' id='bagWeight' placeholder="Enter bag weight in kg unit " className="input form-control" required />
                    </div>

                    <div className='my-2'>
                        <label className="label">
                            <span className="label-text fw-bold">Package's Price</span>
                        </label>
                        <input type="text" name='packagesPrice' id='packagesPrice' placeholder="Enter packages price" className="input form-control" required />
                    </div>

                    <div className='my-2'>
                        <label className="label">
                            <span className="label-text fw-bold">Package's Facility One</span>
                        </label>
                        <textarea class="form-control" name='packageFacility1' id='packageFacility1' placeholder="Enter package Facility One"></textarea>
                    </div>

                    <div className='my-2'>
                        <label className="label">
                            <span className="label-text fw-bold">Package's Facility Two</span>
                        </label>
                        <textarea class="form-control" name='packageFacility2' id='packageFacility2' placeholder="Enter package Facility Two"></textarea>
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

export default AddPackage;