import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import Register from '../Register/Register';
import WrongRoute from '../Shared/ErrorDisplay/WrongRoute';
import AdditionalService from '../AdditionalService/AdditionalService';
import PopularLocations from '../PopularLocations/PopularLocations';
import Trip from '../Trip/Trip';
import Booking from '../Booking/Booking';

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
                element: <Trip></Trip>
            },
            {
                path: "/booking",
                element: <Booking></Booking>
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