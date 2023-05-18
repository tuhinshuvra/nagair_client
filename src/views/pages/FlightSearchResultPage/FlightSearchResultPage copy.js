import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getCookie } from '../../../utilities/helper';
import { Link } from 'react-router-dom';
import './FlightSearchResultPage.css';

const FlightSearchResultPage = () => {
    const { searchData, trips, flights, setFlights } = useAuth();

    const [selectedPackage, setSelectedPackage] = useState({});

    // console.log("selectedPackage : ", selectedPackage);
    console.log("Search Data :", searchData);


    // console.log("dependency", props.dependency);

    console.log("myflights", flights)



    useEffect(() => {
        fetch(`${process.env.REACT_APP_NAGAIR}/api/show-search-flight-result?travelType=${searchData.travelType}&flightFromCurrentLocation=${searchData.flightFromCurrentLocation}&flightToDestinationLocation=${searchData.flightToDestinationLocation}&flightDepartingDate=${searchData.flightDepartingDate}&flightReturningDate=${searchData.flightReturningDate}`, {
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

                                            <p className='mb-0 small'>  {(flight.flightFromCurrentLocation)}, {new Date(flight.flightDepartingDate).toDateString()}, {flight.flightDepartingTime}</p>

                                            <p className=' mt-0 small'>  {(flight.flightToDestinationLocation)}, {new Date(flight.flightArrivalDate).toDateString()},{flight.flightArrivalTime}</p>
                                        </div>

                                    </td>
                                    <td>
                                        <div className=' d-flex' >
                                            <div onClick={() => setSelectedPackage()} className=' bg-info ms-1'>
                                                <p className=' text-center'><span className='fw-bold mb-1 bg-primary text-white'>Silver Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight.silverPackagesPrice}TK</p>
                                                <p className=' small'><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight.bagWeight}10 KG</p>
                                            </div>
                                            <div onClick={() => setSelectedPackage()} className=' bg-info ms-1'>
                                                <p className=' text-center'><span className='fw-bold mb-1 bg-primary text-white'>Gold Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight.goldPackagesPrice}TK</p>
                                                <p className=' small'><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight.bagWeight}10 KG</p>
                                            </div>
                                            <div onClick={() => setSelectedPackage()} className=' bg-info ms-1'>
                                                <p className=' text-center'><span className='fw-bold mb-1 bg-primary text-white'>Platinum Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight.platinumpackagesPrice}TK</p>
                                                <p className=' small'><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight.bagWeight}10 KG</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className=''>
                        <div className=' row'>
                            <div className=' col-md-8 tripSummary '>
                                <h4>Trip Summary</h4>
                                <div className=' d-flex justify-content-between '>
                                    <div className=''>
                                        {/* {flights.map(flight => */}

                                        {/* for Departure */}
                                        <div className="bg-info ">
                                            <h3 className=' text-center'>Departure</h3>
                                            <div className=' '>
                                                <p className='mb-0'>{(searchData.flightFromCurrentLocation)}-{(searchData.flightToDestinationLocation)}</p>

                                            </div>


                                            <div>
                                                <div className=' d-flex'>
                                                    <span className=' fw-bold'>Departure: </span>   <span className='mb-0 ms-1'>{new Date(searchData.flightDepartingDate).toDateString()}, {searchData.flightReturningDate}</span>
                                                </div>
                                                { }
                                                <div className=' d-flex'>
                                                    <span className=' fw-bold'>Arrival: </span>   <span className='mt-0 ms-1'>{new Date(searchData.flightArrivalDate).toDateString()},{searchData.flightArrivalTime}</span>
                                                </div>
                                            </div>
                                            <span><b> Amount:</b> {selectedPackage}TK</span>

                                            <p className=' small  bg-secondary'>
                                                Refundable with fee

                                                Up to 24 hours before the flight : 1,500 BDT
                                                Starting 24 hours until flight 1,800 BDT
                                                After the flight : 2,000 BDT
                                                Exchange with fee (for all passengers)


                                            </p>
                                        </div>



                                        {/* for return */}
                                        {searchData?.flightReturningDate && <>
                                            <div className=" bg-secondary my-1">
                                                <h3 className=' text-center'>Return</h3>
                                                <div className=' '>
                                                    {/* <p className='mb-0'>{(searchData.flightToDestinationLocation)}-{(searchData.flightFromCurrentLocation)}</p> */}

                                                </div>


                                                {/* <div>
                                                    <div className=' d-flex'>
                                                        <span className=' fw-bold'>Departure: </span>   <span className='mb-0 ms-1'>{new Date(searchData.flightReturningDate).toDateString()}, {selectedPackage}</span>
                                                    </div>
                                                    { }
                                                    <div className=' d-flex'>
                                                        <span className=' fw-bold'>Arrival: </span>   <span className='mt-0 ms-1'>{new Date(searchData.flightArrivalDate).toDateString()},{selectedPackage}</span>
                                                    </div>
                                                </div>
                                                <span><b> Amount:</b> {selectedPackage.packagesPrice}TK</span> */}

                                                <p className=' small  bg-info'>
                                                    Up to 24 hours before the flight : 1,000 BDT
                                                    Starting 24 hours until flight 1,500 BDT
                                                    After the flight : 1,800 BDT
                                                    Checked-in luggage

                                                    Adult(s) : 20 Kg
                                                </p>
                                            </div>

                                        </>}

                                        {/* )} */}


                                    </div>


                                </div>

                                <div>


                                </div>
                            </div>



                            <div className=' col-md-4 bg-info '>
                                <h4>Your Selection</h4>
                                <p className=' bg-primary'>Your Trip</p>
                                <h3 className=' text-center'>Departure</h3>
                                {/* <p className='mb-0'>{(searchData.flightFromCurrentLocation)}-{(searchData.flightToDestinationLocation)}</p>
                                {selectedPackage.packagesPrice} */}

                                {/* {searchData?.flightReturningDate && <>
                                    <h3 className=' text-center'>Return</h3>
                                    <div className=' '>
                                        <p className='mb-0'>{(searchData.flightToDestinationLocation)}-{(searchData.flightFromCurrentLocation)}</p>
                                        {selectedPackage.packagesPrice}
                                    </div>
                                </>
                                } */}

                                <div>

                                </div>

                            </div>
                        </div>
                    </div>

                </>
                :
                <div className=' my-5'>
                    <div className=' fs-3 text-center fw-bolder'>No Flights Found According to Your Search Data</div>
                    <p className=' fs-3 text-info text-center fw-bold my-5'>Please Search again with different data</p>
                    <div className="text-center ">
                        <Link to="/" className="fs-4 text-center text-decoration-none my-3  fw-bold btn  btn btn-outline-primary btn-sm">Go to Search</Link>
                    </div>

                </div>
            }
        </div>
    );
};

export default FlightSearchResultPage;