import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ConfirmatinModal from "../../components/Shared/ConfirmationModal/ConfirmationModal";
import { getCookie } from "../../../utilities/helper";
import './PackageList.css'

const PackageList = () => {
    const [deletingPackage, setDeleletingPackage] = useState(null)
    // const [flightId, setFlightId] = useState('');
    const { isLoading, setIsLoading } = useAuth();
    const [allPackage, setAllPackage] = useState([]);

    const navigate = useNavigate();

    const closeModal = () => {
        setDeleletingPackage(null);
    };

    const remainingFligts = allPackage.filter(pack => pack._id !== deletingPackage);
    // console.log("remainingFligts : ", remainingFligts);



    // console.log("deletingFlights : ", deletingFlights);

    useEffect(() => {
        fetch(`http://localhost:5001/api/packages-data-show`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAllPackage(data);
            });
    }, []);

    const handleDelete = () => {
        fetch(`http://localhost:5001/api/packages-data-delete?id=${deletingPackage}`, {
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
                setAllPackage(remainingFligts);

            })
            .then((data) => {
                // console.log("Deleted data : ", data);
            });
        // console.log(user._id);
    };


    return (
        <div>
            <h2 className="text-center  fw-bold  my-4">Package List</h2>
            <div className="overflow-x-auto">
                <table className="table text-center align-middle table-hover  table-bordered">
                    <thead>
                        <tr className="  table-secondary">
                            <th>SL</th>
                            <th>Package Name</th>
                            <th>Bag Weight</th>
                            <th>Packages Price</th>
                            <th>Facility One</th>
                            <th>Facility Two</th>
                            <th>Created & Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPackage.map((pack, index) => (
                            <tr key={pack._id}>
                                <td>{index + 1}</td>
                                <td><p className="my-0"> {pack.packageName}</p></td>
                                <td><p className="my-0"> {pack.bagWeight} KG</p></td>
                                <td><p className="my-0">  ৳{pack.packagesPrice}</p></td>
                                <td><p className="my-0">  {pack.packageFacility1}</p></td>
                                <td><p className="my-0">  {pack.packageFacility2}</p></td>
                                <td>
                                    <p className="my-0"> {new Date(pack.createdAt).toLocaleDateString()}</p>
                                    <p className="my-0"> {new Date(pack.updatedAt).toLocaleDateString()}</p>
                                </td>
                                <td>
                                    <Link to={`/packageUpdate/${pack._id}`}>
                                        <button
                                            className=" fw-bold btn-sm btn btn-primary mx-1"
                                        // onClick={() => handleUserUpdate(user._id)}
                                        >
                                            Update
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => setDeleletingPackage(pack._id)}
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
                {deletingPackage && (
                    <ConfirmatinModal
                        title={"Are you sure you want to delete the package?"}
                        message={`If you once delete the package ${deletingPackage.packageName} it's can't be recovered.`}
                        closeModal={closeModal}
                        successAction={handleDelete}
                        successButtonName="Delete"
                        modalData={deletingPackage}
                    ></ConfirmatinModal>
                )}
            </div>
        </div>
    );
};

export default PackageList;
