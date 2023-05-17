import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, getCookie, isAuth } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";

const UserList = () => {
    const { setUserDetails, isLoading, setIsLoading } = useAuth();
    const [allUser, setAllUser] = useState([]);
    const navigate = useNavigate();

    console.log("userListData : ", allUser);


    useEffect(() => {
        fetch(`https://nag-air-server.vercel.app/api/user-list`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAllUser(data);
            });
    }, []);


    return (
        <div className="col-md-8 mx-auto">
            <h2 className="text-center  fw-bold  my-4">All User</h2>
            <div className="overflow-x-auto">
                <table className="table text-center table-hover  table-bordered">
                    <thead>
                        <tr className="  table-secondary">
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {allUser.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <p className="my-0"> {user.name}</p>


                                    {/* onClick={() => handleMakeAdmin(user._id)} */}

                                    <Link onClick={() => setUserDetails(user._id)} to={`/userDetails/${user?._id}`} className="btn btn-sm btn-primary my-0">Show Details</Link>

                                </td>
                                <td>{user.email}</td>
                                {/* <td>{user.userType}</td> */}
                                <td>
                                    {user?.role === "admin"
                                        ?
                                        <p className=" fw-bolder text-success">Admin</p>
                                        :
                                        <>
                                            <p className="text-info my-0">Passenger</p>
                                            <button
                                                className=" btn btn-sm btn-info my-0"
                                            // onClick={() => handleMakeAdmin(user.email)}
                                            >
                                                Make Admin
                                            </button>
                                        </>
                                    }
                                </td>
                                {/* <td>
                                    <Link to={`/dashboard/userUpdate/${user._id}`}>
                                        <button
                                            className=" fw-bold btn-sm btn btn-primary mx-1"
                                        // onClick={() => handleUserUpdate(user._id)}
                                        >
                                            Update
                                        </button>
                                    </Link>

                                    <button
                                        // onClick={() => setDeletingUser(user)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#confirmationModal"
                                        className=" btn btn-sm  btn-outline-danger"
                                    >
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* {deletingUser && (
                    <ConfirmatinModal
                        title={"Are you sure you want to delete the user?"}
                        message={`If you once delete the user ${deletingUser.name} it's can't be recovered.`}
                        closeModal={closeModal}
                        successAction={handleDelete}
                        successButtonName="Delete"
                        modalData={deletingUser}
                    ></ConfirmatinModal>
                )} */}
            </div>
        </div>
    );
};

export default UserList;
