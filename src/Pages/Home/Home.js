import React from 'react';
import { Button } from 'react-bootstrap';
import FlightBooking from '../FlightBooking/FlightBooking';
import AdditionalService from '../AdditionalService/AdditionalService';
import Offer from '../Offer/Offer';
import PopularLocations from '../PopularLocations/PopularLocations';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FlightBooking></FlightBooking>
            <PopularLocations></PopularLocations>
            <AdditionalService></AdditionalService>
            <Offer></Offer>

        </div>
    );
};

export default Home;