import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import '../DomesticFlights/DomesticFlightsList.css'
import useAuth from "../../../../hooks/useAuth";
import { getCookie } from "../../../../utilities/helper";
import ConfirmatinModal from "../../../components/Shared/ConfirmationModal/ConfirmationModal";

const InternationalFlightsList = () => {
    const [deletingFlights, setDeleletingFlights] = useState(null)
    const { isLoading, setIsLoading } = useAuth();
    const [flights, setFlights] = useState(['']);

    const navigate = useNavigate();

    const closeModal = () => {
        setDeleletingFlights(null);
    };

    // console.log("userListData : ", flights);

    const remainingFligts = flights.filter(flight => flight._id !== deletingFlights);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_NAGAIR}/api/show-international-flight`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setFlights(data);
            });
    }, []);

    const handleDelete = () => {
        console.log("deletingFlights", deletingFlights);
        fetch(`${process.env.REACT_APP_NAGAIR}/api/delete-international-flight?id=${deletingFlights}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => {
                // console.log("response", response);
                response.json();
                if (response.status === 200) {
                    toast.success("Flights Deleted Successfully.");
                }
                setFlights(remainingFligts);
            })
            .then((data) => {

            });
        // console.log(user._id);
    };

    return (
        <div>
            <h2 className="text-center  fw-bold  my-4">International Flight List</h2>
            <div className="overflow-x-auto">
                <table className="table text-center align-middle table-hover  table-bordered">
                    <thead>
                        <tr className="  table-secondary">
                            <th>SL</th>
                            <th>Location</th>
                            <th>Name</th>
                            <th>Tickit Price</th>
                            <th>Created & Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.length > 0 && <>

                            {flights.map((flight, index) => (
                                <tr key={flight._id}>
                                    <td>{index + 1}</td>
                                    <td > <img className="locationImage" src={flight.locationImage} alt="" /> </td>
                                    <td className="">
                                        <p className="my-0"> {flight.flightLocationName}</p>
                                        {/* <Link onClick={() => setUserDetails(flight._id)} to={`/userDetails/${flight?._id}`} className="btn btn-sm btn-primary my-0">Show Details</Link> */}
                                    </td>
                                    <td><p className="my-0">  ৳{flight.tickitPrice}</p></td>
                                    <td>
                                        <p className="my-0"> {new Date(flight.createdAt).toLocaleDateString()}</p>
                                        <p className="my-0"> {new Date(flight.updatedAt).toLocaleDateString()}</p>
                                    </td>
                                    <td>
                                        <Link to={`/internationalFlightUpdate/${flight._id}`}>
                                            <button
                                                className=" fw-bold btn-sm btn btn-primary mx-1"
                                            // onClick={() => handlePackageUpdate(package._id)}
                                            >
                                                Update
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => setDeleletingFlights(flight._id)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#confirmationModal"
                                            className=" btn btn-sm  btn-outline-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </>}
                    </tbody>
                </table>
                {deletingFlights && (
                    <ConfirmatinModal
                        title={"Are you sure you want to delete the flight?"}
                        message={`If you once delete the flight ${deletingFlights.flightLocationName} it's can't be recovered.`}
                        closeModal={closeModal}
                        successAction={handleDelete}
                        successButtonName="Delete"
                        modalData={deletingFlights}
                    ></ConfirmatinModal>
                )}
            </div>
        </div>
    );
};

export default InternationalFlightsList;
