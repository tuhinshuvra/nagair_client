import React from 'react';
import AdditionalService from '../AdditionalService/AdditionalService';
import Offer from '../Offer/Offer';
import PopularLocations from '../PopularLocations/PopularLocations';
import Banner from '../Banner/Banner';
import Subscription from '../Subscription/Subscription';
import GridCarousol from '../GridCarousol';
import './NagAirAnimation.css';

const Home = () => {
    return (
        <div>
            {/* <GridCarousol></GridCarousol> */}
            <Banner></Banner>
            <Offer></Offer>
            <PopularLocations></PopularLocations>
            <AdditionalService></AdditionalService>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;