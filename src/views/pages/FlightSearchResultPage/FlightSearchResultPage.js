import React, { useEffect, useState } from 'react';
import { getCookie } from '../../../utilities/helper';
import { Link } from 'react-router-dom';
import './FlightSearchResultPage.css';
import Loader from '../../components/Shared/Loader/Loader';
import useAuth from '../../../hooks/useAuth';

const FlightSearchResultPage = () => {
    const { searchData, trips, flights, setFlights, isLoading, setIsLoading } = useAuth();

    const [selectedPackage, setSelectedPackage] = useState('');

    // console.log("selectedPackage : ", selectedPackage);
    // console.log("Search Data :", searchData);

    // let locationFrom = 'dhaka';
    // let locationTo = 'rajshahi';
    // let locationFrom = (searchData?.flightFromCurrentLocation);
    // let locationTo = (searchData?.flightToDestinationLocation);


    // console.log("dependency", props.dependency);

    console.log("Flights searched result", flights)
    if (flights.length === 0) {
        setIsLoading(true)
    } else {
        setIsLoading(false)
    }


    return (
        <div>
            {isLoading &&
                <Loader></Loader>
            }
            {flights.length > 0 ?
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
                                <th>Package List</th>
                            </tr>
                        </thead>
                        <tbody className=" ">

                            {flights?.map((flight, index) => (
                                <tr key={flight._id} className=" ">
                                    <td>{index + 1}</td>
                                    <td className=' col-md-4'>
                                        <div className="d-flex justify-content-evenly">
                                            <span>
                                                <p className='mb-0 fw-bold'>{flight?.flightFromCurrentLocation?.toUpperCase()}</p>
                                                <p className='mt-0  '>{new Date(flight?.flightDepartingDate).toLocaleDateString()}, {flight.flightDepartingTime}</p>
                                            </span>

                                            <span className=' fs-4 text-capitalize fw-bold'>TO</span>

                                            <span>
                                                <p className='mb-0 fw-bold'>{flight?.flightToDestinationLocation.toUpperCase()}</p>
                                                <p className='mt-0'>{new Date(flight?.flightArrivalDate).toLocaleDateString()}, {flight.flightArrivalTime}</p>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className=' fw-bold text-center mt-2'>Flight Details</h5>
                                            <p className=' text-center small'>{flight?.planeNumber}</p>

                                            <p className='mb-0 small'>  {(flight?.flightFromCurrentLocation)}, {new Date(flight.flightDepartingDate).toDateString()}, {flight.flightDepartingTime}</p>

                                            <p className=' mt-0 small'>  {(flight?.flightToDestinationLocation)}, {new Date(flight.flightArrivalDate).toDateString()},{flight.flightArrivalTime}</p>
                                        </div>

                                    </td>
                                    <td className=' col-md-8'>
                                        <div className=' d-flex justify-content-around' >
                                            <div onClick={() => setSelectedPackage(flight?.silverPackagesPrice)} className=' bg-info p-2'>
                                                <p className=' text-center'><span className='fw-bold mb-1 bg-primary text-white'>Silver Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight.silverPackagesPrice}TK</p>
                                                <p className=' '><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight.bagWeight}10 KG</p>
                                                <p>Its a real silver package</p>
                                                <p>Non smoking cabin</p>
                                            </div>
                                            <div onClick={() => setSelectedPackage(flight?.goldPackagesPrice)} className=' bg-info mx-1 p-2'>
                                                <p className=' text-center'><span className='fw-bold mb-1 bg-primary text-white'>Gold Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight.goldPackagesPrice}TK</p>
                                                <p className=' '><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight?.bagWeight}10 KG</p>
                                                <p>Its a real Gold package</p>
                                                <p>Non smoking cabin</p>
                                            </div>
                                            <div onClick={() => setSelectedPackage(flight?.platinumpackagesPrice)} className=' bg-info p-2'>
                                                <p className=' text-center'><span className='fw-bold mb-1 bg-primary text-white'>Platinum Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight?.platinumpackagesPrice}TK</p>
                                                <p className=' '><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight?.bagWeight}10 KG</p>
                                                <p>Its a real Platinum package</p>
                                                <p>Non smoking cabin</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className=''>
                        <div className=' row'>
                            <div className=' col-md-8   '>
                                <h4>Trip Summary</h4>
                                <div className=' d-flex justify-content-between bg-info px-2 py-4'>

                                    <div>
                                        <div className=' '>
                                            <p className='mb-0'>{searchData?.flightFromCurrentLocation}-{(searchData?.flightToDestinationLocation)}</p>

                                        </div>
                                        <div>
                                            <div className=' d-flex'>
                                                <span className=' fw-bold'>Departure: </span>   <span className='mb-0 ms-1'>{new Date(searchData.flightDepartingDate).toDateString()}, <b> {searchData.flightDepartingTime}</b></span>
                                                {/* <span className=' fw-bold'>Arrival: </span>   <span className='mb-0 ms-1'>{new Date(searchData.flightArrivalDate).toDateString()}, <b> {searchData.flightDepartingTime}</b></span> */}
                                            </div>
                                            <div className=' d-flex'>
                                                {/* <span className=' fw-bold'>Arrival: </span>   <span className='mt-0 ms-1'>{new Date(searchData.flightArrivalDate).toDateString()},{searchData.flightArrivalTime}</span> */}
                                            </div>

                                            {selectedPackage !== '' ?
                                                <><b> Amount:</b> {selectedPackage}TK</> : <p className=' fw-bold text-danger'>You have not selected any package</p>
                                            }
                                            <div className=' d-flex justify-content-between mt-2'>
                                                <p className=' col-md-4 small  '>
                                                    <b>Refundable with fee</b> <br />

                                                    Up to 24 hours before the flight : 1,500 BDT
                                                    Starting 24 hours until flight 1,800 BDT
                                                    After the flight : 2,000 BDT
                                                    Exchange with fee (for all passengers)
                                                </p>

                                                <p className='col-md-4 small   '>
                                                    <b> Exchange with fee (for all passengers)</b><br />

                                                    Up to 24 hours before the flight : 1,500 BDT
                                                    Starting 24 hours until flight 1,800 BDT
                                                    After the flight : 2,000 BDT
                                                    Exchange with fee (for all passengers)
                                                </p>
                                                <p className='col-md-3 small  '>
                                                    <b>Checked-in luggage</b> <br />
                                                    Adult(s) : 20 Kg
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' col-md-4 '>
                                <h4>Your Selection</h4>
                                <div className=' bg-info px-1 py-2'>
                                    {/* <p className=' text-primary text-uppercase text-center text-white'>Your Trip</p> */}
                                    {flights?.map((flight, index) => (


                                        <div className=' text-center text-uppercase'>
                                            <p className='mb-0'>{(flight.flightFromCurrentLocation)}-{flight.flightToDestinationLocation}</p>
                                            <p className='mb-0'>{new Date(flight.flightDepartingDate).toLocaleDateString()}-{new Date(flight.flightArrivalDate).toLocaleDateString()}</p>

                                        </div>
                                    ))}


                                    {/* {searchData?.flightReturningDate && <>
                                    <h3 className=' text-center'>Return</h3>
                                    <div className=' '>
                                        <p className='mb-0'>{(searchData.flightToDestinationLocation)}-{(searchData.flightFromCurrentLocation)}</p>
                                        {selectedPackage.packagesPrice}
                                    </div>
                                </>
                                } */}
                                    <p className=' text-center'>1 Person
                                        {selectedPackage !== '' ?
                                            <><b> Amount:</b> {selectedPackage}TK</> : <span className=' fw-bold text-danger'> You have not selected any package</span>
                                        }
                                    </p>
                                    <div className=' fs-3 text-center'>
                                        <span className=' mb-0'>Booking total amount</span>  <br />

                                        {selectedPackage !== '' ?
                                            <b className=' mt-0'>{selectedPackage}TK</b> : <span className=' mt-0  text-danger'> 0 TK </span>
                                        }

                                    </div>
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
        </div>
    );
};

export default FlightSearchResultPage;