import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../views/pages/Home/Home';
import HomePageAdditionalService from '../views/pages/Home/HomePageAdditionalService/HomePageAdditionalService';
import HomePagePopularLocations from '../views/pages/Home/HomePagePopularLocations/HomePagePopularLocations';
import Banner from '../views/pages/Banner/Banner';
import PassengerForm from '../views/pages/Profile/Passenger/PassengerForm';
import PassengerList from '../views/pages/Profile/Passenger/PassengerList';
import PassengerProfile from '../views/pages/Profile/Passenger/PassengerProfile';
import Login from '../views/pages/Login/Login';
import Register from '../views/pages/Register/Register';
import WrongRoute from '../views/components/Shared/ErrorDisplay/WrongRoute';
import Contact from '../views/pages/Contact/Contact';
import About from '../views/pages/About/About';
import AdminList from '../views/pages/Profile/Admin/AdminList';
import AdminForm from '../views/pages/Profile/Admin/AdminForm';


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
                element: <HomePageAdditionalService></HomePageAdditionalService>
            },
            {
                path: "/info",
                element: <HomePagePopularLocations></HomePagePopularLocations>
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