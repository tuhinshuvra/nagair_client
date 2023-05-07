import React from 'react';
import Banner from '../Banner/Banner';
import HomePageAdditionalService from './HomePageAdditionalService/HomePageAdditionalService';
import HomePageSubscription from './HomePageSubscription/HomePageSubscription';
import HomePageOffer from './HomePageOffer/HomePageOffer';
import HomePagePopularLocations from './HomePagePopularLocations/HomePagePopularLocations';
import HomePageDownloadApp from './HomePageDownloadApp/HomePageDownloadApp';
import './NagAirAnimation.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageDownloadApp></HomePageDownloadApp>
            <HomePageOffer></HomePageOffer>
            <HomePagePopularLocations></HomePagePopularLocations>
            <HomePageAdditionalService></HomePageAdditionalService>
            <HomePageSubscription></HomePageSubscription>
        </div>
    );
};

export default Home;