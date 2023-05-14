import React, { useEffect, useState } from 'react';
import './FlightSearchResultPage.css';
import useAuth from '../../../hooks/useAuth';
import { getCookie } from '../../../utilities/helper';
import { Link } from 'react-router-dom';

const FlightSearchResultPage = () => {
    const { searchData, trips, flights, setFlights } = useAuth();


    // console.log("dependency", props.dependency);

    console.log("myflights", flights)



    useEffect(() => {
        fetch(`https://nag-air-server.vercel.app/api/show-search-flight-result?travelType=${searchData.travelType}&flightFromCurrentLocation=${searchData.flightFromCurrentLocation}&flightToDestinationLocation=${searchData.flightToDestinationLocation}&flightDepartingDate=${searchData.flightDepartingDate}&flightReturningDate=${searchData.flightReturningDate}`, {
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
            {flights.length > 0 ?
                <>
                    <h2 className="text-center  fw-bold  mt-3">Available Flights</h2>
                    <div className=" d-flex  justify-content-end">
                        <Link to="/" className="fs-4 text-info text-center text-decoration-none    fw-bold  my-0  ">Search Again</Link>
                    </div>
                    <table className="table  align-middle table-hover  table-bordered">
                        <thead>
                            <tr className=" text-center  table-secondary flightInfoTxt">
                                <th>SL</th>
                                <th>Flight Info</th>
                                <th>Package List</th>
                            </tr>
                        </thead>
                        <tbody className=" ">

                            {flights?.map((flight, index) => (
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

                    <div className=''>
                        <div className=' row'>
                            <div className=' col-md-8 bg-info'>
                                <h4>Trip Summary</h4>
                                <div className=' d-flex justify-content-between'>
                                    <div className=''>
                                        {flights.map(flight =>

                                            <div className=" ">
                                                <div className=' '>
                                                    <p className='mb-0'>{(flight.flightFromCurrentLocation).toUpperCase()} -{(flight.flightToDestinationLocation).toUpperCase()}</p>

                                                </div>


                                                <div>
                                                    <div className=' d-flex'>
                                                        <span className=' fw-bold'>Departure: </span>   <span className='mb-0 ms-1'>{new Date(flight.flightDepartingDate).toDateString()}, {flight.flightDepartingTime}</span>
                                                    </div>
                                                    <div className=' d-flex'>
                                                        <span className=' fw-bold'>Arrival: </span>   <span className='mt-0 ms-1'>{new Date(flight.flightArrivalDate).toDateString()},{flight.flightArrivalTime}</span>
                                                    </div>
                                                </div>
                                                <span><b> Amount:</b>  5000TK</span>
                                            </div>
                                        )}
                                        <div>
                                            <p className=' small'>Refundable with fee

                                                Up to 24 hours before the flight : 1,200 BDT
                                                Starting 24 hours until flight 1,500 BDT
                                                After the flight : 2,000 BDT</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div>
                                            {flights.map(flight =>
                                                <div>

                                                    <div className=" ">
                                                        <div>
                                                            <p className='mb-0'><span className='mb-0 ms-1'>{(flight.flightFromCurrentLocation).toUpperCase()} {new Date(flight.flightDepartingDate).toDateString()}, {flight.flightDepartingTime}</span> </p>

                                                        </div>



                                                        <div>
                                                            <p className='mb-0'>{(flight.flightToDestinationLocation).toUpperCase()} {new Date(flight.flightArrivalDate).toDateString()},{flight.flightArrivalTime}</p>
                                                        </div>
                                                    </div>
                                                    <p><span className=' fw-bold mt-0'>Equipment:</span>{flight.planeNumber}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            Exchange with fee (for all passengers)

                                            Up to 24 hours before the flight : 1,200 BDT
                                            Starting 24 hours until flight 1,800 BDT
                                            After the flight : 2,000 BDT
                                        </div>

                                    </div>
                                    <div>
                                        <p>Direct</p>
                                        <p>
                                            <span> Checked-in luggage</span>

                                            <span> Adult(s) : 20 Kg</span>
                                        </p>
                                    </div>
                                </div>

                                <div>


                                </div>
                            </div>
                            <div className=' col-md-3 bg-info ms-3 '>
                                <h4>Your Selection</h4>
                                <p className=' bg-primary'>Your Trip</p>
                                <div className=''>
                                    {flights.map(flight =>

                                        <div className=" ">
                                            <div className=' '>
                                                <p className='mb-0'>{(flight.flightFromCurrentLocation).toUpperCase()} -{(flight.flightToDestinationLocation).toUpperCase()}</p>

                                            </div>


                                            <div>
                                                <div className=' d-flex'>
                                                    <span className=''>{new Date(flight.flightDepartingDate).toLocaleDateString()}, {flight.flightDepartingTime}- {new Date(flight.flightArrivalDate).toLocaleDateString()},{flight.flightArrivalTime}</span>
                                                </div>
                                                <div className=' d-flex'>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <p>1 Adults</p>
                                                <p>5000 BDT Total</p>

                                            </div>

                                            <div className=' bg-secondary text-center'>
                                                <p className=' fs-4 mb-0'> Booking Total Amount</p>

                                                <p className=' fs-3 fw-bold mt-0'>5000 BDT </p>

                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>

                                </div>

                            </div>
                        </div>
                    </div>

                </>
                :
                <div className=' my-5'>
                    <div className=' fs-3 text-center fw-bolder '>No Flights Found According to Your Search Data</div>
                    <p className=' fs-3 text-info text-center fw-bold my-5'>Please Search again with different data</p>
                    <div className="text-center ">
                        <Link to="/" className="fs-4   text-center text-decoration-none  my-3  fw-bold btn  btn btn-outline-primary btn-sm    ">Go to Search</Link>
                    </div>

                </div>
            }
        </div>
    );
};

export default FlightSearchResultPage;