import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './TicketBookingPage.css';
import { toast } from 'react-hot-toast';

const TicketBookingPage = () => {
    const { searchData, travellers, totalFare, selectedFlight } = useAuth();

    console.log("Search Data, selectedFlight, Traveller and totalFare :", searchData, selectedFlight, travellers, totalFare);

    const handlePrintTicket = () => {
        toast.success('Sussessfuly Printed the ticket.')
    }

    return (
        <div className='col-md-4 mx-auto my-5'>
            <div className='  ticketBooking px-5 py-3'>
                <h4 className=' text-center fw-bold my-4'>Ticket Booking</h4>
                <p > <b>Travel :  </b> <span className=' text-uppercase'> {searchData?.flightFromCurrentLocation}</span> -  <span className=' text-uppercase'>{searchData?.flightToDestinationLocation}</span> </p>
                <div className=' d-flex justify-content-between'>

                    <p> <b>Plane: </b>{selectedFlight?.planeNumber}</p>
                    <p> <b>Flight No: </b>{selectedFlight?.flightNumber}</p>
                </div>
                <p> <b>Travel Type: </b>{searchData?.travelType}</p>
                <p> <b>Departure: </b> {new Date(selectedFlight.flightDepartingDate).toLocaleDateString()}({selectedFlight.flightDepartingTime})</p>
                <p> <b>Arrival: </b> {new Date(selectedFlight?.flightArrivalDate).toLocaleDateString()}({selectedFlight.flightArrivalTime})</p>
                <p> <b>Travellers: </b> {(travellers > 1) ? <>{travellers} Persons </> : <>{travellers} Person</>}</p>
                <p> <b>Total Fare: </b> {totalFare}</p>
                <p className=' small '>N.B. Nag air ltd reserves the right to make any flight related decisions.</p>
                <div className=' d-flex justify-content-center'>
                    <button onClick={() => handlePrintTicket()} className=' btn btn-success fw-bold mt-3'>Print Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default TicketBookingPage;