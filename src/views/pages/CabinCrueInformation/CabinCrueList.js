import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getCookie } from "../../../utilities/helper";
import ConfirmatinModal from "../../components/Shared/ConfirmationModal/ConfirmationModal";

const CabinCrueList = () => {
    const [deletingCabinCrue, setDeleletingCabinCrue] = useState(null)
    // const [flightId, setFlightId] = useState('');
    const { isLoading, setIsLoading } = useAuth();
    const [allCabinCrue, setAllCabinCrue] = useState(['']);

    const navigate = useNavigate();

    const closeModal = () => {
        setDeleletingCabinCrue(null);
    };

    const remainingFligts = allCabinCrue.filter(pack => pack._id !== deletingCabinCrue);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_NAGAIR}/api/show-cabin-crew-list`, {
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

    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_NAGAIR}/api/delete-cabin-crewby-id?id=${deletingCabinCrue}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => {
                // console.log("response", response);
                response.json();
                if (response.status === 200) {
                    toast.success("Package Deleted Successfully.");
                }
                setAllCabinCrue(remainingFligts);

            })
            .then((data) => {
                // console.log("Deleted data : ", data);
            });
        // console.log(user._id);
    };


    return (
        <div className=" col-md-8 mx-auto">
            <h2 className="text-center  fw-bold  mt-5">Cabin Crue List</h2>
            <div className=" d-flex  justify-content-end">
                <Link to="/cabinCrueEntry" className="fs-4 text-info text-center text-decoration-none   fw-bold  my-0  ">Add Cabin Crue</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table text-center align-middle table-hover  table-bordered">
                    <thead>
                        <tr className="  table-secondary">
                            <th>SL</th>
                            <th>Cabin Crew Name</th>
                            <th>Created & Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCabinCrue.length > 0 && <>
                            {allCabinCrue.map((pack, index) => (
                                <tr key={pack._id}>
                                    <td>{index + 1}</td>
                                    <td><p className="my-0"> {pack.cabinCrewName}</p></td>

                                    <td>
                                        <p className="my-0"> {new Date(pack.createdAt).toLocaleDateString()}</p>
                                        <p className="my-0"> {new Date(pack.updatedAt).toLocaleDateString()}</p>
                                    </td>
                                    <td>
                                        <Link to={`/packageUpdate/${pack._id}`}>
                                            <button
                                                className=" fw-bold btn-sm btn btn-primary mx-1"
                                            // onClick={() => handleCabinCrueUpdate(user._id)}
                                            >
                                                Update
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => setDeleletingCabinCrue(pack._id)}
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
                {deletingCabinCrue && (
                    <ConfirmatinModal
                        title={"Are you sure you want to delete the package?"}
                        message={`If you once delete the package ${deletingCabinCrue.packageName} it's can't be recovered.`}
                        closeModal={closeModal}
                        successAction={handleDelete}
                        successButtonName="Delete"
                        modalData={deletingCabinCrue}
                    ></ConfirmatinModal>
                )}
            </div>
        </div>
    );
};

export default CabinCrueList;
