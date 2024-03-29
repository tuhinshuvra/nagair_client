import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { getCookie, updateUser } from "../../../../utilities/helper";
import './UserProfile.css';

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

const UpdateProfile = () => {
    const { user, userDetails, setUserDetails, isLoading, setIsLoading } = useAuth();
    const [storedData, setStoredData] = useState({});

    console.log("storedData : ", storedData);
    const [userDataUpdate, setUserDataUpdate] = useState({});

    const navigate = useNavigate();

    const handelImage = async (e) => {
        const field = e.target.name;

        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        const newData = { ...userDataUpdate };
        newData[field] = base64;

        setUserDataUpdate(newData);
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_NAGAIR}/api/user-details?id=${user?._id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${getCookie("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setStoredData(data);
            });
    }, [user?._id]);

    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        const newData = { ...userDataUpdate };
        newData[field] = value;
        setUserDataUpdate(newData);
    };

    const handleOnSubmit = (event) => {
        const updateData = {
            ...userDataUpdate,
            _id: user?._id,
        };
        event.preventDefault();
        axios({
            url: `${process.env.REACT_APP_NAGAIR}/api/user-update`,
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${getCookie("token")}`,
            },
            data: JSON.stringify(updateData),
        }).then((response) => {
            console.log("response", response);
            if (response.data) {
                toast.success("Successfully updated");


                updateUser(response, () => {
                    navigate('/userProfile')
                });
            }
        });
    };

    return (
        <div className=" col-md-6 mx-auto   updateProfile px-5 py-3 my-5">
            <h2 className=" fw-bold text-center mb-3">Update Your Profile</h2>
            <div className=' d-flex justify-content-end'>
                <Link to="/userProfile" className='btn btn-outline-primary btn-sm fw-bold text-decoration-none fs-4'>Show Profile</Link>
            </div>

            <form onSubmit={handleOnSubmit}>
                <div className="">
                    <div className="">
                        <label className="label">
                            <span className="label-text text-md  fw-bold ">Full Name</span>
                        </label>
                        <input
                            className="input form-control"
                            onChange={handleInputChange}
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={storedData?.name}
                            required
                        />
                    </div>

                    <div className=" row my-3">
                        <div className="col-md-6">
                            <label className="label">
                                <span className="label-text fw-bold">Phone Number</span>
                            </label>
                            <input
                                className="input form-control"
                                onChange={handleInputChange}
                                type="text"
                                name="personalPhoneNumber"
                                id="personalPhoneNumber"
                                defaultValue={storedData?.personalPhoneNumber}
                            />
                        </div>

                        <div className=" col-md-6">
                            <label className="label">
                                <span className="label-text fw-bold">
                                    Secondary Phone Number
                                </span>
                            </label>
                            <input
                                className="input form-control"
                                onChange={handleInputChange}
                                type="text"
                                name="secondaryPhoneNumber"
                                id="secondaryPhoneNumber"
                                defaultValue={storedData?.secondaryPhoneNumber}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className=" col-6 ">
                            <label className="label">
                                <span className="label-text fw-bold">Email Id</span>
                            </label>
                            <input
                                className="input form-control"
                                onChange={handleInputChange}
                                type="email"
                                name="email"
                                id="email"
                                defaultValue={storedData?.email}
                                disabled
                            />
                        </div>

                        <div className=" col-6 ">
                            <label className="label">
                                <span className="label-text fw-bold">National Id</span>
                            </label>
                            <input
                                className="input form-control"
                                onChange={handleInputChange}
                                type="text"
                                name="nationalId"
                                id="nationalId"
                                defaultValue={storedData?.nationalId}
                            />
                        </div>
                    </div>

                    <div className=" row my-3">
                        <div className="col-9 ">
                            <label className="label">
                                <span className="label-text  fw-bold  ">Profile Image</span>
                            </label>

                            <input
                                className="input form-control"
                                onChange={handelImage}
                                accept="image/*"
                                type="file"
                                name="profileImage"
                                id="profileImage"
                                defaultValue={storedData?.profileImage}
                            />
                        </div>

                        <div className=" col-md-3">
                            <label className="label">
                                <span className="label-text fw-bold">Blood Group</span>
                            </label>
                            <select
                                className="form-select"
                                onChange={handleInputChange}
                                name="bloodGroup"
                                id="bloodGroup"
                            >
                                <option defaultValue={storedData?.bloodGroup}>
                                    {storedData?.bloodGroup}
                                </option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="Unknown">Unknown</option>
                            </select>
                        </div>
                    </div>

                    <div className=" my-3 ">
                        <label className="label">
                            <span className="label-text text-md  fw-bold ">
                                Present Address
                            </span>
                        </label>
                        <input
                            className="input form-control"
                            onChange={handleInputChange}
                            type="text"
                            name="presentAddress"
                            id="presentAddress"
                            defaultValue={storedData?.presentAddress}
                        />
                    </div>

                    <div className=" my-3 ">
                        <label className="label">
                            <span className="label-text text-md  fw-bold ">
                                Permanent Address
                            </span>
                        </label>
                        <input
                            className="input form-control"
                            onChange={handleInputChange}
                            type="text"
                            name="permanentAddress"
                            id="permanentAddress"
                            defaultValue={storedData?.permanentAddress}
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-5">
                    <button type="reset" className="btn btn-warning" value="Reset">Reset</button>
                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
