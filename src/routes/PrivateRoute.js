import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../views/components/Shared/Loader/Loader";
import { AllContext } from "../hooks/ContextData";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AllContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>;
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    // return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;