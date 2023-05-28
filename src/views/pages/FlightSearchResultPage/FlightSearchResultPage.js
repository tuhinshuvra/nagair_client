import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FlightSearchResultPage.css';
import useAuth from '../../../hooks/useAuth';
import { setLocalStorage } from '../../../utilities/helper';

const FlightSearchResultPage = () => {
    const { searchData, trips, flights, travellers, setTotalFare, selectedFlight, setSelectedFlight } = useAuth();

    const [selectedPackage, setSelectedPackage] = useState('');


    // console.log("selectedPackage :", selectedPackage);
    // console.log("selectedFlight :", selectedFlight);

    console.log("flights : ", flights.departureResults);
    // console.log("flights : ", flights.returnResults);


    let totalCost = 0;
    const handleTotalFare = () => {
        totalCost = selectedPackage * travellers;
        setTotalFare(totalCost);
        return totalCost;
    }

    const handleBookingFlights = (key, value, flightPrice) => {
        const totalFlightBookingData = {
            planeNumber: value.planeNumber,
            flightNumber: value.flightNumber,

            flightFromCurrentLocation: value.flightFromCurrentLocation,
            flightToDestinationLocation: value.flightToDestinationLocation,


            flightDepartingDate: value.flightDepartingDate,
            flightDepartingTime: value.flightDepartingTime,

            flightArrivalDate: value.flightArrivalDate,
            flightArrivalTime: value.flightArrivalTime,
            flightPrice,


        }

        setLocalStorage(key, value)

    }


    return (
        <div>
            {Object.keys(flights).length > 0 ?
                <div>
                    <h2 className="text-center  fw-bold  mt-3">Available Flights</h2>
                    <div className=" d-flex  justify-content-end">
                        <Link to="/" className="fs-4 text-info text-center text-decoration-none  fw-bold  my-0">Search Again</Link>
                    </div>

                    <tr> <h3>Departuring Flights</h3></tr>
                    <table className="table align-middle table-hover table-bordered">
                        <thead>
                            <tr className="text-center  table-secondary flightInfoTxt">
                                <th>SL</th>
                                <th className=' fs-5'>Flight Info</th>
                                <th className=' fs-5'>Package List</th>
                            </tr>
                        </thead>
                        <tbody className=" ">
                            {flights?.departureResults?.map((flight, index) => (
                                <tr key={flight._id} className=" ">
                                    <td>{index + 1}</td>
                                    <td className=' col-md-4 '>

                                        <div className='flightInfo'>
                                            <div>
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

                                                {/* <div className=' text-center'>
                                                    <button onClick={() => handleBookingFlights("departure", flight)} className='btn btn-info btn-sm'>Select Flight</button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' col-md-8'>
                                        <div className=' d-flex justify-content-around' >


                                            {flight.packageList.map((pack) => (
                                                <div className='packageBg p-2'>
                                                    <p className=' text-center'><span className='fw-bold mb-1 packageHeading text-white'>{pack.packageName}</span> </p>
                                                    <p><span className='fw-bold my-0'>Price:</span> {flight.silverPackagesPrice}TK</p>
                                                    <p className=' '><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {pack.bagWeight}KG</p>
                                                    <p>{pack.packageFacility1}</p>
                                                    <p>{pack.packageFacility2}</p>
                                                    <div className=' text-center'>
                                                        <button onClick={() => handleBookingFlights("return", flight,)} className='btn btn-info btn-sm'>Select Flight</button>
                                                    </div>
                                                </div>

                                            ))}


                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <tr> <h3>Returning Flights</h3></tr>
                    <table className="table align-middle table-hover table-bordered">
                        <thead>
                            <tr className="text-center  table-secondary flightInfoTxt">
                                <th>SL</th>
                                <th className=' fs-5'>Flight Info</th>
                                <th className=' fs-5'>Package List</th>
                            </tr>
                        </thead>
                        <tbody className=" ">
                            {flights?.returnResults?.map((flight, index) => (
                                <tr key={flight._id} className=" ">
                                    <td>{index + 1}</td>
                                    <td className=' col-md-4 '>

                                        <div className='flightInfo'>
                                            <div>
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

                                                {/* <div className=' text-center'>
                                                    <button onClick={() => handleBookingFlights("return", flight)} className='btn btn-info btn-sm'>Select Flight</button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' col-md-8'>
                                        <div className=' d-flex justify-content-around' >
                                            <div className='packageBg p-2'>
                                                <p className=' text-center'><span className='fw-bold mb-1 packageHeading text-white'>Silver Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight.silverPackagesPrice}TK</p>
                                                <p className=' '><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight.bagWeight}10 KG</p>
                                                <p>Its a real silver package</p>
                                                <p>Non smoking cabin</p>
                                                <div className=' text-center'>
                                                    <button onClick={() => handleBookingFlights("return", flight)} className='btn btn-info btn-sm'>Select Flight</button>
                                                </div>
                                            </div>
                                            <div className=' packageBg   p-2'>
                                                <p className=' text-center'><span className='fw-bold mb-1 packageHeading text-white'>Gold Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight.goldPackagesPrice}TK</p>
                                                <p className=' '><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight?.bagWeight}10 KG</p>
                                                <p>Its a real Gold package</p>
                                                <p>Non smoking cabin</p>
                                                <div className=' text-center'>
                                                    <button onClick={() => handleBookingFlights("return", flight)} className='btn btn-info btn-sm'>Select Flight</button>
                                                </div>
                                            </div>
                                            <div className=' packageBg p-2'>
                                                <p className=' text-center'><span className='fw-bold mb-1 packageHeading text-white'>Platinum Package</span> </p>
                                                <p><span className='fw-bold my-0'>Price:</span> {flight?.platinumpackagesPrice}TK</p>
                                                <p className=' '><span className=' fw-bold' >Weight:</span> Bag Weight Maximum {flight?.bagWeight}10 KG</p>
                                                <p>Its a real Platinum package</p>
                                                <p>Non smoking cabin</p>
                                                <div className=' text-center'>
                                                    <button onClick={() => handleBookingFlights("return", flight)} className='btn btn-info btn-sm'>Select Flight</button>
                                                </div>
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
                                <div className=' d-flex justify-content-between tripSummary px-2 py-4'>

                                    <div>

                                        <div>
                                            {(selectedFlight !== '')
                                                ?
                                                <>
                                                    <p className='mb-0 text-uppercase fw-bold'>{(selectedFlight.flightFromCurrentLocation)}-{selectedFlight.flightToDestinationLocation}</p>
                                                    <p className='mb-0'> <b> Departure: </b> {new Date(selectedFlight.flightDepartingDate).toLocaleDateString()}({selectedFlight.flightDepartingTime})</p>
                                                    <p>  <b> Arrival :  </b> {new Date(selectedFlight.flightArrivalDate).toLocaleDateString()}({selectedFlight.flightArrivalTime})</p>


                                                    <div className=' d-flex'>
                                                        {/* <span className=' fw-bold'>Arrival: </span>   <span className='mt-0 ms-1'>{new Date(searchData.flightArrivalDate).toDateString()},{searchData.flightArrivalTime}</span> */}
                                                    </div>

                                                </>
                                                :
                                                <>
                                                    <p className=' text-danger   fw-bold'>You have not selected any flight</p>
                                                </>
                                            }

                                            {selectedPackage !== '' ?
                                                <><b> Amount:</b> {handleTotalFare()}TK</> : <p className=' fw-bold text-danger'>You have not selected any package</p>
                                            }
                                            <div className=' d-flex justify-content-between mt-2'>
                                                <p className=' col-md-4 small refundable '>
                                                    <b>Refundable with fee</b> <br />
                                                    Up to 24 hours before the flight : 1,500 BDT  Starting 24 hours until flight 1,800 BDT   After the flight : 2,000 BDT   Exchange with fee (for all passengers)</p>

                                                <p className='col-md-4 small exchange'>
                                                    <b> Exchange with fee (for all passengers)</b><br />
                                                    Up to 24 hours before the flight : 1,500 BDT  Starting 24 hours until flight 1,800 BDT After the flight : 2,000 BDT Exchange with fee (for all passengers)</p>
                                                <p className='col-md-3 small luggage '>
                                                    <b>Checked-in luggage</b> <br /> Adult(s) : 20 Kg
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' col-md-4 '>
                                <h4>Your Selection</h4>
                                <div className=' selectedFlight px-1 py-2'>
                                    {/* <p className=' text-primary text-uppercase text-center text-white'>Your Trip</p> */}


                                    {(selectedFlight !== '') ?

                                        <div className=' text-center text-uppercase'>
                                            <p className='mb-0'>{(selectedFlight.flightFromCurrentLocation)}-{selectedFlight.flightToDestinationLocation}</p>
                                            <p className='mb-0'>{new Date(selectedFlight.flightDepartingDate).toLocaleDateString()}({selectedFlight.flightDepartingTime})-{new Date(selectedFlight.flightArrivalDate).toLocaleDateString()}({selectedFlight.flightArrivalTime})</p>
                                        </div>

                                        :
                                        <>
                                            <p className=' text-danger text-center fw-bold'>You have not selected any flight</p>
                                        </>
                                    }


                                    <p className=' text-center'>{(travellers > 1) ? <>{travellers} Persons</> : <>{travellers} Person</>}
                                        {selectedPackage !== '' ?
                                            <><b> Amount:</b> {handleTotalFare()}TK</> : <span className=' fw-bold text-danger'> You have not selected any package</span>
                                        }
                                    </p>
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
        </div>
    );
};

export default FlightSearchResultPage;