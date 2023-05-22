import React, { useEffect } from 'react';
import HomePageFlightSearch from './HomePageFlightSearch/HomePageFlightSearch';
import HomePageAdditionalService from './HomePageAdditionalService/HomePageAdditionalService';
import HomePageSubscription from './HomePageSubscription/HomePageSubscription';
import HomePageOffer from './HomePageOffer/HomePageOffer';
import HomePagePopularLocations from './HomePagePopularLocations/HomePagePopularLocations';
import HomePageDownloadApp from './HomePageDownloadApp/HomePageDownloadApp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 3000,
            delay: 600,
            mirror: true,
            once: false
        });
    }, [])

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