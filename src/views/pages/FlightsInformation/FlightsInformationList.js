import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getCookie } from "../../../utilities/helper";
import ConfirmatinModal from "../../components/Shared/ConfirmationModal/ConfirmationModal";
import './FlightsInformationList.css'

const FlightsInformationList = () => {
    const [deletingFlightInfo, setDeletingFlightInfo] = useState(null)
    // const [flightId, setFlightId] = useState('');
    const { isLoading, setIsLoading } = useAuth();
    const [allFlightInfo, setAllFlightInfo] = useState([]);

    console.log("allFlightInfo : ", allFlightInfo);

    const navigate = useNavigate();

    const closeModal = () => {
        setDeletingFlightInfo(null);
    };

    const remainingFligtInfo = allFlightInfo.filter(flight => flight._id !== deletingFlightInfo);
    // console.log("remainingFligts : ", remainingFligts);



    // console.log("deletingFlights : ", deletingFlights);

    useEffect(() => {
        fetch(`https://nag-air-server.vercel.app/api/show-flight-information-list`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAllFlightInfo(data);
            });
    }, []);

    const handleDelete = () => {
        fetch(`https://nag-air-server.vercel.app/api/delete-flight-information?id=${deletingFlightInfo}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => {
                // console.log("response", response);
                response.json();
                if (response.status === 200) {
                    toast.success("FlightInfo Deleted Successfully.");
                }
                setAllFlightInfo(remainingFligtInfo);

            })
            .then((data) => {
                // console.log("Deleted data : ", data);
            });
        // console.log(user._id);
    };


    return (
        <div>
            <h2 className="text-center  fw-bold  mt-5">Flight Information List</h2>
            <div className=" d-flex  justify-content-end">
                <Link to="/flightInformationEntry" className="fs-4  text-center text-decoration-none btn btn-outline-primary btn-sm   fw-bold  mt-0 mb-1  ">Add Flight's Information</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table text-center align-middle table-hover  table-bordered">
                    <thead>
                        <tr className="  table-secondary flightInfoTxt">
                            <th>SL</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Departing </th>
                            <th>Arrival</th>
                            <th>Plane Number</th>
                            <th>Flight Number</th>
                            <th>Pilot Name</th>
                            <th>CabinCrew Name</th>
                            <th>Created & Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=" small">
                        {allFlightInfo.map((flight, index) => (
                            <tr key={flight._id} className="flightInfoTxt">
                                <td>{index + 1}</td>
                                <td className="text-capitalize">  {flight.flightFromCurrentLocation}</td>
                                <td className="text-capitalize">  {flight.flightToDestinationLocation}</td>
                                <td> {new Date(flight.flightDepartingDate).toLocaleDateString()} {flight.flightDepartingTime}</td>
                                <td> {new Date(flight.flightArrivalDate).toLocaleDateString()}  {flight.flightArrivalTime}</td>
                                <td>  {flight.planeNumber}</td>
                                <td>  {flight.flightNumber}</td>
                                <td className="text-capitalize"> {flight.pilotsOfPlaneId.pilotName}</td>
                                <td> {flight.cabinCrewId.cabinCrewName}</td>
                                <td>
                                    {new Date(flight.createdAt).toLocaleDateString()},
                                    {new Date(flight.updatedAt).toLocaleDateString()}
                                </td>
                                <td className="flightInfoTxt">
                                    <Link to={`/flightInformationUpdate/${flight._id}`}>
                                        <button
                                            className=" fw-bold btn-sm btn btn-primary mx-1"
                                        // onClick={() => handleflightInfoUpdate(user._id)}
                                        >
                                            Update
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => setDeletingFlightInfo(flight._id)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#confirmationModal"
                                        className=" btn btn-sm  btn-outline-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {deletingFlightInfo && (
                    <ConfirmatinModal
                        title={"Are you sure you want to delete the flight?"}
                        message={`If you once delete the flight ${deletingFlightInfo.flightLocationName} it's can't be recovered.`}
                        closeModal={closeModal}
                        successAction={handleDelete}
                        successButtonName="Delete"
                        modalData={deletingFlightInfo}
                    ></ConfirmatinModal>
                )}
            </div>
        </div>
    );
};

export default FlightsInformationList;
