import React from 'react';
import { Button } from 'react-bootstrap';
import AdditionalService from '../AdditionalService/AdditionalService';
import Offer from '../Offer/Offer';
import PopularLocations from '../PopularLocations/PopularLocations';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Subscription from '../Subscription/Subscription';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <PopularLocations></PopularLocations>
            <AdditionalService></AdditionalService>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;