import React from 'react';

import Barisal from '../../../../assets/image/flights/domestic/Barisal.png';
import Chattogram from '../../../../assets/image/flights/domestic/Chittagong.png';
import Jessore from '../../../../assets/image/flights/domestic/Jessore.png';
import Rajshahi from '../../../../assets/image/flights/domestic/Rajshahi.png';

import Saidpur from '../../../../assets/image/flights/domestic/Saidpur.png';
import Sylhet from '../../../../assets/image/flights/domestic/Sylhet.png';
import Thakurgaon from '../../../../assets/image/flights/domestic/Thakurgaon.png';

import Singapore from '../../../../assets/image/flights/international/singapore.png';
import Beijing from '../../../../assets/image/flights/international/Beijing.png';
import Delhi from '../../../../assets/image/flights/international/Delhi.png';
import HongKong from '../../../../assets/image/flights/international/HongKong.png';

import Mumbai from '../../../../assets/image/flights/international/mumbai.png';
import Jeddah from '../../../../assets/image/flights/international/jeddah.png';
import Shanghai from '../../../../assets/image/flights/international/Shanghai.png';
import Dubai from '../../../../assets/image/flights/international/Dubai.png';

import Doha from '../../../../assets/image/flights/international/doha.png';
import Bangalore from '../../../../assets/image/flights/international/Bangalore.png';

import GridCarousolItem from '../../../components/GridCarousol/GridCarousolItem';
import './MulitImageSlider.css'

const HomePagePopularLocations = () => {
    return (
        <div className=' col-md-11 mx-auto py-md-5 py-4'>
            {/* ########################## domestic locations flights ################################ */}

            <h1 className='  text-center fw-bold pt-lg-5  location_heading ' data-aos="fade-up-right"> Popular Locations </h1>
            <h2 className='text-center fw-bold pt-lg-2   location_heading2 mb-lg-3' data-aos="fade-up-left"> Domestic Flights</h2>
            <div id="domesticGridCarousol" className="carousel slide carousel-dark" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <GridCarousolItem
                            imgOne={Barisal}
                            locationOne="Barishal"
                            fareOne="11995"

                            imgTwo={Chattogram}
                            locationTwo="Chattogram"
                            fareTwo="9995"

                            imgThree={Jessore}
                            locationThree="Jessore"
                            fareThree="10995"

                            imgFour={Rajshahi}
                            locationFour="Rajshahi"
                            fareFour="10995"

                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <GridCarousolItem
                            imgOne={Saidpur}
                            locationOne="Saidpur"
                            fareOne="11995"

                            imgTwo={Sylhet}
                            locationTwo="Sylhet"
                            fareTwo="9995"

                            imgThree={Thakurgaon}
                            locationThree="Thakurgaon"
                            fareThree="10995"

                            imgFour={Jessore}
                            locationFour="Jessore"
                            fareFour="10995"
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <GridCarousolItem
                            imgOne={Saidpur}
                            locationOne="Saidpur"
                            fareOne="11995"

                            imgTwo={Chattogram}
                            locationTwo="Chattogram"
                            fareTwo="9995"

                            imgThree={Rajshahi}
                            locationThree="Rajshahi"
                            fareThree="10995"

                            imgFour={Jessore}
                            locationFour="Jessore"
                            fareFour="10995"
                        ></GridCarousolItem>
                    </div>

                </div>
                <button className="carousel-control-prev  sliderPrevIcon" type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next sliderNextIcon" type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* ########################## internationl locations flights ################################ */}
            <h2 className='text-center fw-bold pt-lg-5 nag_heading  location_heading2 mb-lg-3' data-aos="fade-up"> International Flights</h2>
            <div id="internationalGridCarousol" className="carousel  carousel-dark slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <GridCarousolItem
                            imgOne={Singapore}
                            locationOne="Singapore"
                            fareOne="101995"

                            imgTwo={Beijing}
                            locationTwo="Beijing"
                            fareTwo="99995"

                            imgThree={Delhi}
                            locationThree="Delhi"
                            fareThree="110995"

                            imgFour={HongKong}
                            locationFour="HongKong"
                            fareFour="100995"

                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <GridCarousolItem
                            imgOne={Mumbai}
                            locationOne="Mumbai"
                            fareOne="20995"

                            imgTwo={Singapore}
                            locationTwo="Singapore"
                            fareTwo="45995"

                            imgThree={Jeddah}
                            locationThree="Jeddah"
                            fareThree="70995"

                            imgFour={Shanghai}
                            locationFour="Shanghai"
                            fareFour="80995"
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <GridCarousolItem
                            imgOne={Dubai}
                            locationOne="Dubai"
                            fareOne="60995"

                            imgTwo={Doha}
                            locationTwo="Doha"
                            fareTwo="50095"

                            imgThree={Bangalore}
                            locationThree="Bangalore"
                            fareThree="18995"

                            imgFour={Jeddah}
                            locationFour="Jeddah"
                            fareFour="75995"
                        ></GridCarousolItem>
                    </div>

                </div>
                <button className="carousel-control-prev sliderPrevIcon" type="button" data-bs-target="#internationalGridCarousol" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next sliderNextIcon" type="button" data-bs-target="#internationalGridCarousol" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HomePagePopularLocations;