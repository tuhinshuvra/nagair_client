import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getCookie } from "../../../utilities/helper";
import ConfirmatinModal from "../../components/Shared/ConfirmationModal/ConfirmationModal";

const PilotList = () => {
    const [deletingPilot, setDeleletingPilot] = useState(null)
    const { isLoading, setIsLoading } = useAuth();
    const [allPilot, setAllPilot] = useState([]);

    const navigate = useNavigate();

    const closeModal = () => {
        setDeleletingPilot(null);
    };

    const remainingFligts = allPilot.filter(pack => pack._id !== deletingPilot);
    // console.log("remainingFligts : ", remainingFligts);



    // console.log("deletingFlights : ", deletingFlights);

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

    const handleDelete = () => {
        fetch(`https://nag-air-server.vercel.app/api/delete-pilot-by-id?id=${deletingPilot}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => {
                // console.log("response", response);
                response.json();
                if (response.status === 200) {
                    toast.success("Pilot Deleted Successfully.");
                }
                setAllPilot(remainingFligts);

            })
            .then((data) => {
                // console.log("Deleted data : ", data);
            });
        // console.log(user._id);
    };


    return (
        <div className=" col-md-8 mx-auto">
            <h2 className="text-center  fw-bold  my-5">Pilot List</h2>
            <div className=" d-flex  justify-content-end">
                <Link to="/pilotEntry" className="fs-4 text-info text-center text-decoration-none    fw-bold  my-0  ">Add Pilot</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table text-center align-middle table-hover  table-bordered">
                    <thead>
                        <tr className="  table-secondary">
                            <th>SL</th>
                            <th>Pilot Name</th>
                            <th>Created & Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPilot.map((pack, index) => (
                            <tr key={pack._id}>
                                <td>{index + 1}</td>
                                <td><p className="my-0"> {pack.pilotName}</p></td>

                                <td>
                                    <p className="my-0"> {new Date(pack.createdAt).toLocaleDateString()}</p>
                                    <p className="my-0"> {new Date(pack.updatedAt).toLocaleDateString()}</p>
                                </td>
                                <td>
                                    <Link to={`/pilotUpdate/${pack._id}`}>
                                        <button
                                            className=" fw-bold btn-sm btn btn-primary mx-1"
                                        // onClick={() => handlePilotUpdate(user._id)}
                                        >
                                            Update
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => setDeleletingPilot(pack._id)}
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
                {deletingPilot && (
                    <ConfirmatinModal
                        title={"Are you sure you want to delete the package?"}
                        message={`If you once delete the package ${deletingPilot.packageName} it's can't be recovered.`}
                        closeModal={closeModal}
                        successAction={handleDelete}
                        successButtonName="Delete"
                        modalData={deletingPilot}
                    ></ConfirmatinModal>
                )}
            </div>
        </div>
    );
};

export default PilotList;
