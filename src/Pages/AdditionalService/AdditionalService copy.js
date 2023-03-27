import React from 'react';
import { span } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import './AdditionalService.css';

import AditionalServiceOne from '../../assets/image/aditional_service/Money_exchange.png';
import AditionalServiceTwo from '../../assets/image/aditional_service/Ship_rental.png';
import AditionalServiceThree from '../../assets/image/aditional_service/Car_rental.png';
import AditionalServiceFour from '../../assets/image/aditional_service/Hotel_booking.png';

const AdditionalService = () => {

    return (
        <div className='ad-service'>
            <h1 className='text-center fw-bold location_heading '> Our Aditional Sevice </h1>
            <div className='col-lg-10 mx-auto'>
                <Carousel cols={4} rows={1} gap={5} loop={true} autoplay={3000} >
                    <Carousel.Item>
                        <div className="card">
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={AditionalServiceOne} alt='' />
                            <div className="card-body">
                                <span className='text-decoration-none' to="">   <h5 className=" card-title fw-bold text-center">Money Transfer</h5></span>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card">
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={AditionalServiceTwo} alt='' />
                            <div className="card-body">
                                <span className=' text-decoration-none' to="">   <h5 className=" card-title fw-bold text-center">Ship Rental</h5></span>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card">
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={AditionalServiceThree} alt='' />
                            <div className="card-body">
                                <span className=' text-decoration-none' to=""> <h5 className=" card-title fw-bold text-center">Car Rental</h5></span>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card">
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={AditionalServiceFour} alt='' />
                            <div className="card-body">
                                <span className=' text-decoration-none' to=""><h5 className=" card-title fw-bold text-center">Hotel Booking</h5></span>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card">
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={AditionalServiceOne} alt='' />
                            <div className="card-body">
                                <span className='text-decoration-none' to="">   <h5 className=" card-title fw-bold text-center">Money Transfer</h5></span>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card">
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={AditionalServiceTwo} alt='' />
                            <div className="card-body">
                                <span className=' text-decoration-none' to="">   <h5 className=" card-title fw-bold text-center">Ship Rental</h5></span>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card">
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={AditionalServiceThree} alt='' />
                            <div className="card-body">
                                <span className=' text-decoration-none' to=""> <h5 className="   card-title fw-bold text-center">Car Rental</h5></span>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card">
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={AditionalServiceFour} alt='' />
                            <div className="card-body">
                                <span className=' text-decoration-none' to=""><h5 className=" card-title fw-bold text-center">Hotel Booking</h5></span>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default AdditionalService;