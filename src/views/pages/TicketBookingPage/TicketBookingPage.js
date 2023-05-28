import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './TicketBookingPage.css';
import { toast } from 'react-hot-toast';

const TicketBookingPage = () => {
    const { searchData, trips, flights, isLoading, setIsLoading, travellers, totalFare, } = useAuth();

    console.log("Search Data, flights, Traveller and totalFare :", searchData, flights, travellers, totalFare);

    const handlePrintTicket = () => {
        toast.success('Sussessfuly Printed the ticket.')
    }

    return (
        <div className='col-md-4 mx-auto my-5'>
            <div className='  ticketBooking px-5 py-3'>
                <h4 className=' text-center fw-bold my-4'>Ticket Booking</h4>

                <p>Travel Type:{searchData?.travelType}, Date:{searchData?.flightDepartingDate}</p>
                <p>Travel: {searchData?.flightFromCurrentLocation} To {searchData?.flightToDestinationLocation}</p>
                <p>Travellers: {(travellers > 1) ? <>{travellers} Persons </> : <>{travellers} Person</>}</p>
                <p>Total Fare: {totalFare}</p>

                <div className=' d-flex justify-content-end'>
                    <button onClick={() => handlePrintTicket()} className=' btn btn-success fw-bold mt-3'>Print Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default TicketBookingPage;