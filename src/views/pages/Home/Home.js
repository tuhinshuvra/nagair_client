import React from 'react';
import HomePageFlightSearch from './HomePageFlightSearch/HomePageFlightSearch';
import HomePageAdditionalService from './HomePageAdditionalService/HomePageAdditionalService';
import HomePageSubscription from './HomePageSubscription/HomePageSubscription';
import HomePageOffer from './HomePageOffer/HomePageOffer';
import HomePagePopularLocations from './HomePagePopularLocations/HomePagePopularLocations';
import HomePageDownloadApp from './HomePageDownloadApp/HomePageDownloadApp';

const Home = () => {
    return (
        <div>
            <HomePageFlightSearch></HomePageFlightSearch>
            <HomePageDownloadApp></HomePageDownloadApp>
            <HomePageOffer></HomePageOffer>
            <HomePagePopularLocations></HomePagePopularLocations>
            <HomePageAdditionalService></HomePageAdditionalService>
            <HomePageSubscription></HomePageSubscription>
        </div>
    );
};

export default Home;