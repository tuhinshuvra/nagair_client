import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FlightSearchResultPage.css';
import useAuth from '../../../hooks/useAuth';
import { getLocalStorage, setLocalStorage } from '../../../utilities/helper';
import RoundTripResult from './RoundTripResult';
import OneWayResult from './OneWayResult';
import MultiCityResult from './MultiCityResult';

const FlightSearchResultPage = () => {
    const { searchData, trips, flights, travellers, setTotalFare, departureBookingInfo, setDepartureBookingInfo,
        returnBookingInfo, setReturnBookingInfo, multiCityBooking, setMultiCityBooking } = useAuth();

    const [selectedPackage, setSelectedPackage] = useState('');


    // console.log("selectedPackage :", selectedPackage);
    // console.log("selectedFlight :", selectedFlight);

    console.log("flights : ", flights);
    // console.log("flights : ", flights.returnResults);


    let totalCost = 0;
    const handleTotalFare = () => {
        totalCost = selectedPackage * travellers;
        setTotalFare(totalCost);
        return totalCost;
    }

    console.log("travellers : ", travellers);


    console.log("bookingInfo : ", departureBookingInfo);


    return (
        <div>
            {Object.keys(flights).length > 0 ?
                <div>
                    <h2 className="text-center  fw-bold  mt-3">Available Flights</h2>
                    <div className=" d-flex  justify-content-end">
                        <Link to="/" className="fs-4 text-info text-center text-decoration-none  fw-bold  my-0">Search Again</Link>
                    </div>
                    {searchData.travelType === 'roundTrip'
                        ? <RoundTripResult></RoundTripResult>
                        : searchData.travelType === 'oneWay'
                            ? <OneWayResult></OneWayResult> : <MultiCityResult></MultiCityResult>
                    }







                    <div className=''>
                        <div className=' row'>
                            <div className=' col-md-8   '>
                                <h4>Trip Summary</h4>
                                {/* summary for multi city */}
                                {searchData.travelType === 'multiWay' ?
                                    <div className=' d-flex justify-content-between  tripSummary px-2 py-4'>
                                        {/* for departure */}
                                        <div>
                                            {multiCityBooking.map(data =>
                                                <div key={data._id}>
                                                    <div className=' col-md-8    d-flex justify-content-between mb-0'>
                                                        <p className=' text-uppercase'>{data?.flightFromCurrentLocation}</p>
                                                        <span className=' fw-bold'> <i> To</i></span>
                                                        <p className=' text-uppercase'>{data?.flightToDestinationLocation}</p>
                                                    </div>

                                                    <p className=''>
                                                        {new Date(data?.flightDepartingDate).toLocaleDateString()} ({data?.flightDepartingTime})
                                                        <span className=' fw-bold'> <i> To </i></span>
                                                        {new Date(data?.flightDepartingDate).toLocaleDateString()}({data?.flightArrivalTime})
                                                    </p>


                                                    <div className=' d-flex justify-content-between'>
                                                        <p><b>Plane  : </b>{data?.planeNumber}</p>
                                                        <p><b>Flight : </b>{data?.flightNumber}</p>
                                                    </div>
                                                    <p>
                                                        <b>Packages: </b>{data?.packageName} <br />
                                                        <b>Fare: </b>{data?.packagePrice}
                                                    </p>
                                                    {/* <p>{departureBookingInfo}</p> */}

                                                </div>
                                            )



                                            }

                                        </div>
                                        {Object.keys(returnBookingInfo).length > 0 ? <div className=' vr'></div> : <></>}
                                        {/* for return */}

                                        <div>
                                            {Object.keys(returnBookingInfo).length > 0 ?
                                                <div>
                                                    <div className=' col-md-8    d-flex justify-content-between mb-0'>
                                                        <p className=' text-uppercase'>{returnBookingInfo?.flightFromCurrentLocation}</p>
                                                        <span className=' fw-bold'> <i> To</i></span>
                                                        <p className=' text-uppercase'>{returnBookingInfo?.flightToDestinationLocation}</p>
                                                    </div>

                                                    <p className=''>
                                                        {new Date(returnBookingInfo?.flightDepartingDate).toLocaleDateString()} ({returnBookingInfo?.flightDepartingTime})
                                                        <span className=' fw-bold'> <i> To </i></span>
                                                        {new Date(returnBookingInfo?.flightDepartingDate).toLocaleDateString()}({returnBookingInfo?.flightArrivalTime})
                                                    </p>


                                                    <div className=' d-flex justify-content-between'>
                                                        <p><b>Plane  : </b>{returnBookingInfo?.planeNumber}</p>
                                                        <p><b>Flight : </b>{returnBookingInfo?.flightNumber}</p>
                                                    </div>
                                                    <p>
                                                        <b>Packages: </b>{returnBookingInfo?.packageName} <br />
                                                        <b>Fare: </b>{returnBookingInfo?.packagePrice}
                                                    </p>
                                                    {/* <p>{departureBookingInfo}</p> */}

                                                </div>
                                                :
                                                <></>
                                            }

                                        </div>


                                    </div>
                                    : <></>
                                }

                                {/* summary for multi city */}

                                <div className=' d-flex justify-content-between  tripSummary px-2 py-4'>
                                    {/* for departure */}
                                    <div>
                                        {Object.keys(departureBookingInfo).length > 0 ?
                                            <div>
                                                <div className=' col-md-8    d-flex justify-content-between mb-0'>
                                                    <p className=' text-uppercase'>{departureBookingInfo?.flightFromCurrentLocation}</p>
                                                    <span className=' fw-bold'> <i> To</i></span>
                                                    <p className=' text-uppercase'>{departureBookingInfo?.flightToDestinationLocation}</p>
                                                </div>

                                                <p className=''>
                                                    {new Date(departureBookingInfo?.flightDepartingDate).toLocaleDateString()} ({departureBookingInfo?.flightDepartingTime})
                                                    <span className=' fw-bold'> <i> To </i></span>
                                                    {new Date(departureBookingInfo?.flightDepartingDate).toLocaleDateString()}({departureBookingInfo?.flightArrivalTime})
                                                </p>


                                                <div className=' d-flex justify-content-between'>
                                                    <p><b>Plane  : </b>{departureBookingInfo?.planeNumber}</p>
                                                    <p><b>Flight : </b>{departureBookingInfo?.flightNumber}</p>
                                                </div>
                                                <p>
                                                    <b>Packages: </b>{departureBookingInfo?.packageName} <br />
                                                    <b>Fare: </b>{departureBookingInfo?.packagePrice}
                                                </p>
                                                {/* <p>{departureBookingInfo}</p> */}

                                            </div>
                                            :
                                            <></>
                                        }

                                    </div>
                                    {Object.keys(returnBookingInfo).length > 0 ? <div className=' vr'></div> : <></>}
                                    {/* for return */}

                                    <div>
                                        {Object.keys(returnBookingInfo).length > 0 ?
                                            <div>
                                                <div className=' col-md-8    d-flex justify-content-between mb-0'>
                                                    <p className=' text-uppercase'>{returnBookingInfo?.flightFromCurrentLocation}</p>
                                                    <span className=' fw-bold'> <i> To</i></span>
                                                    <p className=' text-uppercase'>{returnBookingInfo?.flightToDestinationLocation}</p>
                                                </div>

                                                <p className=''>
                                                    {new Date(returnBookingInfo?.flightDepartingDate).toLocaleDateString()} ({returnBookingInfo?.flightDepartingTime})
                                                    <span className=' fw-bold'> <i> To </i></span>
                                                    {new Date(returnBookingInfo?.flightDepartingDate).toLocaleDateString()}({returnBookingInfo?.flightArrivalTime})
                                                </p>


                                                <div className=' d-flex justify-content-between'>
                                                    <p><b>Plane  : </b>{returnBookingInfo?.planeNumber}</p>
                                                    <p><b>Flight : </b>{returnBookingInfo?.flightNumber}</p>
                                                </div>
                                                <p>
                                                    <b>Packages: </b>{returnBookingInfo?.packageName} <br />
                                                    <b>Fare: </b>{returnBookingInfo?.packagePrice}
                                                </p>
                                                {/* <p>{departureBookingInfo}</p> */}

                                            </div>
                                            :
                                            <></>
                                        }

                                    </div>


                                </div>
                            </div>

                            <div className=' col-md-4 '>
                                <h4>Your Selection</h4>
                                <div className=' selectedFlight px-1 py-2'>
                                    {/* summary for multi city */}
                                    {multiCityBooking.length > 0 && (
                                        multiCityBooking.map(data => (
                                            <div className=' ' key={data._id}>
                                                <p className='text-uppercase text-center mb-0'>
                                                    {data?.flightFromCurrentLocation}
                                                    <span className='mx-2'> <i> To </i></span>
                                                    {data?.flightToDestinationLocation}
                                                </p>
                                                <p className='text-center mt-0'>
                                                    {new Date(data?.flightDepartingDate).toLocaleDateString()} ({data?.flightDepartingTime})
                                                    <span className='mx-2'> <i> To </i></span>
                                                    {new Date(data?.flightDepartingDate).toLocaleDateString()} ({data?.flightArrivalTime})
                                                </p>
                                            </div>
                                        ))
                                    )}

                                    {/* end summary for multi city */}

                                    {Object.keys(departureBookingInfo).length > 0
                                        ?
                                        <>
                                            <div className=' '>
                                                <p className=' text-uppercase text-center  mb-0'>
                                                    {departureBookingInfo?.flightFromCurrentLocation}
                                                    <span className=' mx-2 '> <i>   To  </i></span>
                                                    {departureBookingInfo?.flightToDestinationLocation}
                                                </p>

                                                <p className=' text-center mt-0'>
                                                    {new Date(departureBookingInfo?.flightDepartingDate).toLocaleDateString()} ({departureBookingInfo?.flightDepartingTime})
                                                    <span className=' mx-2'> <i> To </i></span>
                                                    {new Date(departureBookingInfo?.flightDepartingDate).toLocaleDateString()}({departureBookingInfo?.flightArrivalTime})
                                                </p>
                                            </div>

                                        </>
                                        :
                                        <>
                                            <p className=' fs-3 text-info fst-italic'>Please select a package</p>
                                        </>
                                    }

                                    {Object.keys(returnBookingInfo).length > 0
                                        ?
                                        <>
                                            <div className='  mb-0'>
                                                <p className=' text-uppercase text-center mb-0'>
                                                    {returnBookingInfo?.flightFromCurrentLocation}
                                                    <span className=' mx-2 '> <i>   To  </i></span>
                                                    {returnBookingInfo?.flightToDestinationLocation}
                                                </p>

                                                <p className=' text-center mt-0'>
                                                    {new Date(returnBookingInfo?.flightDepartingDate).toLocaleDateString()} ({returnBookingInfo?.flightDepartingTime})
                                                    <span className=' mx-2'> <i> To </i></span>
                                                    {new Date(returnBookingInfo?.flightDepartingDate).toLocaleDateString()}({returnBookingInfo?.flightArrivalTime})
                                                </p>
                                            </div>

                                        </>
                                        :
                                        <>
                                            <p className=' fs-3 text-info fst-italic'>Please select a package</p>
                                        </>
                                    }




                                    <div className=' fs-3 text-center'>
                                        <span className=' mb-0'>Booking total amount</span>  <br />

                                        {selectedPackage !== '' ?
                                            <b className=' mt-0'>{handleTotalFare()}TK</b> : <span className=' mt-0  text-danger'> 0 TK </span>
                                        }

                                    </div>
                                    {(totalCost !== 0)
                                        &&
                                        <>
                                            <div className=' text-center mt-4'>
                                                <Link to="/ticketBooking" className=' btn btn-success w-50 fw-bold '>Confirm Book</Link>
                                            </div>

                                        </>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                :
                <div className=' my-5'>
                    <div className=' fs-3 text-center fw-bolder'>No Flights Found According to Your Search Data</div>
                    <p className=' fs-3 text-info text-center fw-bold my-5'>Please Search again with different data</p>
                    <div className="text-center ">
                        <Link to="/" className="fs-4 text-center text-decoration-none my-3  fw-bold btn  btn btn-outline-primary btn-sm">Go to Search</Link>
                    </div>

                </div>
            }
        </div >
    );
};

export default FlightSearchResultPage;