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
import UserList from '../views/pages/Profile/Admin/UserList/UserList';
import UserDetails from '../views/pages/Profile/Admin/UserList/UserDetails/UserDetails';
import AddDomesticFlights from '../views/pages/Flights/DomesticFlights/AddDomesticFlights';
import DomesticFlightsList from '../views/pages/Flights/DomesticFlights/DomesticFlightsList';
import InternationalFlightsList from '../views/pages/Flights/InternationalFlights/InternationalFlightsList';
import AddInternationalFlights from '../views/pages/Flights/InternationalFlights/AddInternationalFlights';
import AddPackage from '../views/pages/Package/AddPackage';
import PackageList from '../views/pages/Package/PackageList';
import PackageUpdate from '../views/pages/Package/PackageUpdate';
import InternationalFlightsUpdate from '../views/pages/Flights/InternationalFlights/InternationalFlightsUpdate';
import DomesticFlightUpdate from '../views/pages/Flights/DomesticFlights/DomesticFlightUpdate';
import PilotInformation from '../views/pages/PilotInformation/PilotInformation';
import PilotList from '../views/pages/PilotInformation/PilotList';
import CabinCrueInformationEntry from '../views/pages/CabinCrueInformation/CabinCrueInformationEntry';
import CabinCrueList from '../views/pages/CabinCrueInformation/CabinCrueList';
import FlightsInformationEntry from '../views/pages/FlightsInformation/FlightsInformationEntry';
import FlightsInformationList from '../views/pages/FlightsInformation/FlightsInformationList';


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
                path: "/domesticFlightAdd",
                element: <AddDomesticFlights></AddDomesticFlights>
            },

            {
                path: "/domesticFlightList",
                element: <DomesticFlightsList></DomesticFlightsList>
            },

            {
                path: "/internationalFlightAdd",
                element: <AddInternationalFlights></AddInternationalFlights>
            },

            {
                path: "/internationalFlightList",
                element: <InternationalFlightsList></InternationalFlightsList>
            },
            {
                path: "/domesticFlightUpdate/:flightId",
                element: <DomesticFlightUpdate></DomesticFlightUpdate>
            },

            {
                path: "/internationalFlightUpdate/:flightId",
                element: <InternationalFlightsUpdate></InternationalFlightsUpdate>
            },

            {
                path: "/packageAdd",
                element: <AddPackage></AddPackage>
            },

            {
                path: "/packageList",
                element: <PackageList></PackageList>
            },

            {
                path: "/packageUpdate/:packageId",
                element: <PackageUpdate></PackageUpdate>
            },

            {
                path: "/passengerEntry",
                element: <PassengerForm></PassengerForm>
            },

            {
                path: "/pilotEntry",
                element: <PilotInformation></PilotInformation>
            },
            {
                path: "/pilotEntry",
                element: <PilotInformation></PilotInformation>
            },
            {
                path: "/pilotList",
                element: <PilotList></PilotList>
            },

            {
                path: "/cabinCrueEntry",
                element: <CabinCrueInformationEntry></CabinCrueInformationEntry>
            },
            {
                path: "/cabinCrueList",
                element: <CabinCrueList></CabinCrueList>
            },
            {
                path: "/flightInformationEntry",
                element: <FlightsInformationEntry></FlightsInformationEntry>
            },
            {
                path: "/flightInformationList",
                element: <FlightsInformationList></FlightsInformationList>
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
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/userList",
                element: <UserList></UserList>
            },
            // {
            //     path: "/jobDetails/:jobId",
            //     // element: <PostedJobDetails></PostedJobDetails>,
            //     loader: async ({ params }) => await fetch(`${process.env.REACT_APP_CABD_server_address}/jobs/${params.jobId}`)
            // },
            {
                path: "/userDetails/:userId",
                element: <UserDetails></UserDetails>,
                // loader: async ({ params }) => await fetch(`http://localhost:5001/api/user-details?id=${params.userId}`)
            },

            {
                path: "*",
                element: <WrongRoute></WrongRoute>
            }
        ]
    }
])


export default router;