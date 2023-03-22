import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import WrongRoute from '../Shared/ErrorDisplay/WrongRoute';
import AdditionalService from '../AdditionalService/AdditionalService';
import PopularLocations from '../PopularLocations/PopularLocations';
import Banner from '../Banner/Banner';
import PassengerForm from '../Profile/Passenger/PassengerForm';
import AdminForm from '../Profile/Admin/AdminForm';
import PassengerList from '../Profile/Passenger/PassengerList';
import AdminList from '../Profile/Admin/AdminList';
import PassengerProfile from '../Profile/Passenger/PassengerProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/services",
                element: <AdditionalService></AdditionalService>
            },
            {
                path: "/info",
                element: <PopularLocations></PopularLocations>
            },
            {
                path: "/trip",
                element: <Banner></Banner>
            },
            {
                path: "/booking",
                element: <Banner></Banner>
            },
            {
                path: "/passengerEntry",
                element: <PassengerForm></PassengerForm>
            },
            {
                path: "/passengerList",
                element: <PassengerList></PassengerList>
            },
            {
                path: "/passengerProfile",
                element: <PassengerProfile></PassengerProfile>
            },
            {
                path: "/adminEntry",
                element: <AdminForm></AdminForm>
            },
            {
                path: "/adminList",
                element: <AdminList></AdminList>
            },
            {
                path: "/info",
                element: <PopularLocations></PopularLocations>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "*",
                element: <WrongRoute></WrongRoute>
            }
        ]
    }
])


export default router;