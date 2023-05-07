import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, getCookie, isAuth } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";

const UserList = () => {
    const { user, setUser, isLoading, setIsLoading, setAuthError, authError } = useAuth();
    const [allUser, setAllUser] = useState([]);
    const navigate = useNavigate();

    console.log("userListData : ", allUser);


    useEffect(() => {
        fetch(`http://localhost:5001/api/user-list`, {
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
        <div>
            <h2 className="text-center  fw-bold  my-4">All User</h2>
            <div className="overflow-x-auto">
                <table className="table table-hover  table-bordered">
                    <thead>
                        <tr className=" text-center table-secondary">
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUser.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.userType}</td>
                                {/* <td>
                                    {user?.role === "admin" ? (
                                        <p className=" fw-bolder text-success">Admin</p>
                                    ) : (
                                        <button
                                            className=" btn btn-sm btn-info"
                                        // onClick={() => handleMakeAdmin(user.email)}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td> */}
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
