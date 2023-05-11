import React, { useEffect, useState } from 'react';
import './FlightSearchResultPage.css';
import useAuth from '../../../hooks/useAuth';
import { getCookie } from '../../../utilities/helper';
import { Link } from 'react-router-dom';

const FlightSearchResultPage = () => {
    const { searchData, setSearchData } = useAuth();
    const [flights, setFlights] = useState([]);

    // console.log("SearchData : ", travelType, serachFromLocation, serachToLocation, serachDepart, serachReturn);
    // console.log("Search input Data :", travelType, serachFromLocation, serachToLocation, serachDepart, serachReturn);
    console.log("Search input Data :", searchData);
    console.log("Search Results flights:", flights);


    useEffect(() => {
        fetch(`http://localhost:5001/api/show-search-flight-result?travelType=${searchData.travelType}&flightFromCurrentLocation=${searchData.flightFromCurrentLocation.toLowerCase()}&flightToDestinationLocation=${searchData.flightToDestinationLocation.toLowerCase()}&flightDepartingDate=${searchData.flightDepartingDate}&flightReturningDate=${searchData.flightReturningDate}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                // console.log("Search Result Data", data)
                setFlights(data);
            })
    }, [])


    return (
        <div>
            <h2 className="text-center  fw-bold  mt-3">Available Flights</h2>
            <div className=" d-flex  justify-content-end">
                <Link to="/" className="fs-4 text-info text-center text-decoration-none    fw-bold  my-0  ">Search Again</Link>
            </div>
            <table className="table  align-middle table-hover  table-bordered">
                <thead>
                    <tr className=" text-center  table-secondary flightInfoTxt">
                        <th>SL</th>
                        <th>Flight Info</th>


                        {/* <th>Plane Number</th> */}
                        {/* <th>Flight Number</th> */}
                        <th>Package List</th>
                    </tr>
                </thead>
                <tbody className=" ">
                    {flights.map((flight, index) => (
                        <tr key={flight._id} className=" ">
                            <td>{index + 1}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        <p className='mb-0'>{flight.flightFromCurrentLocation}</p>
                                        <p className='mt-0'>{flight.flightDepartingTime}</p>
                                    </span>

                                    <span className=' fs-4 text-capitalize fw-bold'>TO</span>

                                    <span>
                                        <p className='mb-0'>{flight.flightToDestinationLocation}</p>
                                        <p className='mt-0'>{flight.flightArrivalTime}</p>
                                    </span>
                                </div>
                                <div>
                                    <h5 className=' fw-bold text-center mt-2'>Flight Details</h5>
                                    <p className=' text-center small'>{flight.planeNumber}</p>

                                    <p className='mb-0 small'>  {(flight.flightFromCurrentLocation).toUpperCase()}, {new Date(flight.flightDepartingDate).toDateString()}, {flight.flightDepartingTime}</p>

                                    <p className=' mt-0 small'>  {(flight.flightToDestinationLocation).toUpperCase()}, {new Date(flight.flightArrivalDate).toDateString()},{flight.flightArrivalTime}</p>
                                </div>

                            </td>
                            {/* <td> </td> */}
                            {/* <td>  {flight.planeNumber}</td> */}
                            {/* <td>  {flight.flightNumber}</td> */}
                            <td>
                                <div className=' d-flex'>
                                    {
                                        flight.packageList.map(pak =>
                                            <div className=' bg-info ms-1'>
                                                <p className=' text-center'><span className='fw-bold mb-1 bg-primary text-white'>{pak.packageName}</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {pak.packagesPrice}TK</p>
                                                <p><span className='fw-bold'>Weight:</span> Bag Weight Maximum {pak.bagWeight}KG</p>
                                                <p><span className='fw-bold my-0'>Facilities :</span> {pak.packageFacility1} <br /> and {pak.packageFacility2} </p>
                                            </div>
                                        )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FlightSearchResultPage;