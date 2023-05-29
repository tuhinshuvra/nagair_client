import React, { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../../utilities/helper';
import useAuth from '../../../hooks/useAuth';

const RoundTripResult = () => {
    const { searchData, trips, flights, departureBookingInfo, setDepartureBookingInfo, returnBookingInfo, setReturnBookingInfo } = useAuth();

    const [selectedPackage, setSelectedPackage] = useState('');


    const handleBookingFlights = (key, value, packageName, packagePrice) => {
        const totalFlightBookingData = {
            planeNumber: value.planeNumber,
            flightNumber: value.flightNumber,

            flightFromCurrentLocation: value.flightFromCurrentLocation,
            flightToDestinationLocation: value.flightToDestinationLocation,


            flightDepartingDate: value.flightDepartingDate,
            flightDepartingTime: value.flightDepartingTime,

            flightArrivalDate: value.flightArrivalDate,
            flightArrivalTime: value.flightArrivalTime,
            packageName: packageName,
            packagePrice: packagePrice

        }

        setLocalStorage(key, totalFlightBookingData)

        if (key === 'departure') {
            const result = getLocalStorage(key)
            setDepartureBookingInfo(result);
        }
        if (key === 'return') {
            const result = getLocalStorage(key)
            setReturnBookingInfo(result);
        }
        // console.log("packagePrice : ", packagePrice);

    }

    console.log("bookingInfo : ", departureBookingInfo);

    return (
        <div>
            <h3>Departuring Flights</h3>
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
                                        <div className='packageBg p-2' key={pack._id}>
                                            <p className='text-center'>
                                                <span className='fw-bold mb-1 packageHeading text-white'>
                                                    {pack.packageName}
                                                </span>
                                            </p>
                                            <p>
                                                <span className='fw-bold my-0'>Price:</span>{" "}
                                                {flight[`${pack.packageName}`]} TK
                                            </p>
                                            <p className=''>
                                                <span className='fw-bold'>Weight:</span> Bag Weight Maximum{" "}
                                                {pack.bagWeight} KG
                                            </p>
                                            <p>{pack.packageFacility1}</p>
                                            <p>{pack.packageFacility2}</p>
                                            <div className='text-center'>
                                                <button
                                                    onClick={() =>
                                                        handleBookingFlights(
                                                            "departure",
                                                            flight,
                                                            pack.packageName,
                                                            flight[`${pack.packageName}`]
                                                        )
                                                    }
                                                    className='btn btn-info btn-sm'
                                                >
                                                    Select Flight
                                                </button>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Returning Flights</h3>
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
                                    {flight.packageList.map((pack) => (
                                        <div className='packageBg p-2' key={pack._id}>
                                            <p className='text-center'>
                                                <span className='fw-bold mb-1 packageHeading text-white'>
                                                    {pack.packageName}
                                                </span>
                                            </p>
                                            <p>
                                                <span className='fw-bold my-0'>Price:</span>{" "}
                                                {flight[`${pack.packageName}`]} TK
                                            </p>
                                            <p className=''>
                                                <span className='fw-bold'>Weight:</span> Bag Weight Maximum{" "}
                                                {pack.bagWeight} KG
                                            </p>
                                            <p>{pack.packageFacility1}</p>
                                            <p>{pack.packageFacility2}</p>
                                            <div className='text-center'>
                                                <button
                                                    onClick={() =>
                                                        handleBookingFlights(
                                                            "return",
                                                            flight,
                                                            pack.packageName,
                                                            flight[`${pack.packageName}`]
                                                        )
                                                    }
                                                    className='btn btn-info btn-sm'
                                                >
                                                    Select Flight
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoundTripResult;