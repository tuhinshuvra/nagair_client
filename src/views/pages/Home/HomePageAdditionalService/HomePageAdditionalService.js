import React from 'react';

import MoneyExchange from '../../../../assets/image/aditional_service/Money_exchange.png';
import ShipRental from '../../../../assets/image/aditional_service/Ship_rental.png';
import CarRental from '../../../../assets/image/aditional_service/Car_rental.png';
import HotelBooking from '../../../../assets/image/aditional_service/Hotel_booking.png';
import GridCarousolItem from '../../../components/GridCarousol/GridCarousolItem';
import './HomePageAdditionalService.css';

const HomePageAdditionalService = () => {

    return (
        <div className='service'>
            <div className=' col-11 mx-auto'>
                <h1 className='text-center fw-bold location_heading ' data-aos="fade-up"> Our Aditional Sevice </h1>
                <div id="domesticGridCarousol" className="carousel slide carousel-dark" data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="8000">
                            <GridCarousolItem
                                imgOne={MoneyExchange}
                                imgTwo={ShipRental}
                                imgThree={CarRental}
                                imgFour={HotelBooking}

                                locationOne="Money Exchange"
                                locationTwo="Ship Rental"
                                locationThree="Car Rental"
                                locationFour="Hotel Booking"
                            ></GridCarousolItem>
                        </div>

                        <div className="carousel-item" data-bs-interval="8000">
                            <GridCarousolItem
                                imgOne={ShipRental}
                                imgTwo={MoneyExchange}
                                imgThree={CarRental}
                                imgFour={HotelBooking}

                                locationOne="Ship Rental"
                                locationTwo="Money Exchange"
                                locationThree="Car Rental"
                                locationFour="Hotel Booking"
                            ></GridCarousolItem>
                        </div>

                        <div className="carousel-item" data-bs-interval="8000">
                            <GridCarousolItem
                                imgOne={CarRental}
                                imgTwo={ShipRental}
                                imgThree={MoneyExchange}
                                imgFour={HotelBooking}

                                locationOne="Car Rental"
                                locationTwo="Ship Rental"
                                locationThree="Money Exchange"
                                locationFour="Hotel Booking"
                            ></GridCarousolItem>
                        </div>

                        <div className="carousel-item" data-bs-interval="8000">
                            <GridCarousolItem
                                imgOne={HotelBooking}
                                imgTwo={ShipRental}
                                imgThree={CarRental}
                                imgFour={MoneyExchange}

                                locationOne="Hotel Booking"
                                locationTwo="Ship Rental"
                                locationThree="Car Rental"
                                locationFour="Money Exchange"
                            ></GridCarousolItem>
                        </div>

                    </div>
                    <button className="carousel-control-prev sliderPrevIcon" type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next sliderNextIcon" type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePageAdditionalService;