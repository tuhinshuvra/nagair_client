import React, { useEffect } from 'react';
import './FlightSearchResultPage.css';
import useAuth from '../../../hooks/useAuth';
import { getCookie } from '../../../utilities/helper';

const FlightSearchResultPage = () => {
    const { searchData, setSearchData, travelType, setTravelType, serachFromLocation, setSearchFormLocation, serachToLocation, setSearchToLocation,
        serachDepart, setSearchDepart, serachReturn, setSearchReturn,
        serachCabinClass, setSearchCabinClass, serachTravellers, setSearchTravellers } = useAuth();

    // console.log("SearchData : ", travelType, serachFromLocation, serachToLocation, serachDepart, serachReturn);
    // console.log("Search input Data :", travelType, serachFromLocation, serachToLocation, serachDepart, serachReturn);
    console.log("Search input Data :", searchData);



    useEffect(() => {
        fetch(`http://localhost:5001/api/show-search-flight-result?travelType=${searchData.travelType}&flightFromCurrentLocation=${searchData.flightFromCurrentLocation.toLowerCase()}&flightToDestinationLocation=${searchData.flightToDestinationLocation.toLowerCase()}&flightDepartingDate=${searchData.flightDepartingDate}&flightReturningDate=${searchData.flightReturningDate}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then(response => response.json())
            .then(data => console.log("Search Result Data", data))
    }, [])
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_CABD_server_address}/homeJobSearch/${searchData.jobTitle}/${searchLocationtionData.location}/${searchOrganizationData.orgaType}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // console.log(" Home Job Search Result :", data);
    //             // setShowJobs(data);
    //             // setSearchData("");
    //             // setSearchLocationtionData("");
    //             // setSearchOrganizationData("");
    //             // console.log(" Home Job Search Result22 :", data);
    //         });
    // }, []);

    return (
        <div>
            <h2>FlightSearchResultPage</h2>
        </div>
    );
};

export default FlightSearchResultPage;