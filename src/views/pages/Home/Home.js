import React from 'react';
import HomeFlightSearch from './HomeFlightSearch/HomeFlightSearch';
import HomePageAdditionalService from './HomePageAdditionalService/HomePageAdditionalService';
import HomePageSubscription from './HomePageSubscription/HomePageSubscription';
import HomePageOffer from './HomePageOffer/HomePageOffer';
import HomePagePopularLocations from './HomePagePopularLocations/HomePagePopularLocations';
import HomePageDownloadApp from './HomePageDownloadApp/HomePageDownloadApp';
import '../../components/Shared/NagAirAnimation.css';

const Home = () => {
    return (
        <div>
            <HomeFlightSearch></HomeFlightSearch>
            <HomePageDownloadApp></HomePageDownloadApp>
            <HomePageOffer></HomePageOffer>
            <HomePagePopularLocations></HomePagePopularLocations>
            <HomePageAdditionalService></HomePageAdditionalService>
            <HomePageSubscription></HomePageSubscription>
        </div>
    );
};

export default Home;