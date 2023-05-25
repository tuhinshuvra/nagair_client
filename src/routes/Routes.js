import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../views/pages/Home/Home';
import HomePageAdditionalService from '../views/pages/Home/HomePageAdditionalService/HomePageAdditionalService';
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
import AddPackage from '../views/pages/Package/AddPackage';
import PackageList from '../views/pages/Package/PackageList';
import PackageUpdate from '../views/pages/Package/PackageUpdate';
import PilotInformation from '../views/pages/PilotInformation/PilotInformation';
import PilotList from '../views/pages/PilotInformation/PilotList';
import CabinCrueInformationEntry from '../views/pages/CabinCrueInformation/CabinCrueInformationEntry';
import CabinCrueList from '../views/pages/CabinCrueInformation/CabinCrueList';
import FlightsInformationEntry from '../views/pages/FlightsInformation/FlightsInformationEntry';
import FlightsInformationList from '../views/pages/FlightsInformation/FlightsInformationList';
import FlightInformationUpdate from '../views/pages/FlightsInformation/FlightInformationUpdate';
import FlightSearchResultPage from '../views/pages/FlightSearchResultPage/FlightSearchResultPage';
import HomePageFlightSearch from '../views/pages/Home/HomePageFlightSearch/HomePageFlightSearch';
import UserProfile from '../views/pages/UserProfile/UserProfile';
import AddDomesticFlightsLocation from '../views/pages/FlightsLocation/DomesticFlightsLocation/AddDomesticFlightsLocation';
import DomesticFlightsLocationList from '../views/pages/FlightsLocation/DomesticFlightsLocation/DomesticFlightsLocationList';
import AddInternationalFlightsLocation from '../views/pages/FlightsLocation/InternationalFlightsLocation/AddInternationalFlightsLocation';
import InternationalFlightsLocationList from '../views/pages/FlightsLocation/InternationalFlightsLocation/InternationalFlightsLocationList';
import DomesticFlightsLocationUpdate from '../views/pages/FlightsLocation/DomesticFlightsLocation/DomesticFlightLocationUpdate';
import InternationalFlightsLocationUpdate from '../views/pages/FlightsLocation/InternationalFlightsLocation/InternationalFlightsLocationUpdate';
import ChangePasswordRequest from '../views/pages/ChangePassword/ChangePasswordRequest';
import ChangePasswordRespond from '../views/pages/ChangePassword/ChangePasswordRespond';
import UpdateProfile from '../views/pages/UserProfile/UpdateProfile';


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
                path: "/booking",
                element: <HomePageFlightSearch></HomePageFlightSearch>
            },

            {
                path: "/flightSearchResult",
                element: <FlightSearchResultPage></FlightSearchResultPage>
            },

            {
                path: "/domesticFlightAdd",
                element: <AddDomesticFlightsLocation></AddDomesticFlightsLocation>
            },

            {
                path: "/domesticFlightList",
                element: <DomesticFlightsLocationList></DomesticFlightsLocationList>
            },

            {
                path: "/internationalFlightAdd",
                element: <AddInternationalFlightsLocation></AddInternationalFlightsLocation>
            },

            {
                path: "/internationalFlightList",
                element: <InternationalFlightsLocationList></InternationalFlightsLocationList>
            },
            {
                path: "/domesticFlightUpdate/:flightId",
                element: <DomesticFlightsLocationUpdate></DomesticFlightsLocationUpdate>
            },

            {
                path: "/internationalFlightUpdate/:flightId",
                element: <InternationalFlightsLocationUpdate></InternationalFlightsLocationUpdate>
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
                path: "/flightInformationUpdate/:id",
                element: <FlightInformationUpdate></FlightInformationUpdate>
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
                path: "/changePasswordRequest",
                element: <ChangePasswordRequest></ChangePasswordRequest>
            },
            {
                path: "/change-password",
                element: <ChangePasswordRespond></ChangePasswordRespond>
            },

            {
                path: "/userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: "/userList",
                element: <UserList></UserList>
            },

            {
                path: "/userDetails/:userId",
                element: <UserDetails></UserDetails>,
            },

            {
                path: "*",
                element: <WrongRoute></WrongRoute>
            }
        ]
    }
])


export default router;