import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import './AdditionalService.css';

const AdditionalService = () => {

    return (
        <div className='popular-location ad-service bg-secondary pb-lg-5 pt-lg-1'>
            <h1 className=' text-center my-lg-5 fw-bold '> Our Aditional Sevice </h1>
            <Carousel cols={3} rows={1} gap={5} loop={true} autoplay={3000} >
                <Carousel.Item>
                    <div class="card">
                        <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "18rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                        <div class="card-body">
                            <Link className=' text-decoration-none' to=""><h5 class="card-title fw-bold text-center">Hotel Booking</h5></Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="card">
                        <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "18rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                        <div class="card-body">
                            <Link className=' text-decoration-none' to=""> <h5 class="card-title fw-bold text-center">Car Rental</h5></Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="card">
                        <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "18rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                        <div class="card-body">
                            <Link className=' text-decoration-none' to="">   <h5 class="card-title fw-bold text-center">Money Transfer</h5></Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="card">
                        <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "18rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                        <div class="card-body">
                            <Link className=' text-decoration-none' to="">    <h5 class="card-title fw-bold text-center">Ship Rental</h5></Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="card">
                        <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "18rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                        <div class="card-body">
                            <Link className=' text-decoration-none' to="">   <h5 class="card-title fw-bold text-center">Ship Rental</h5></Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="card">
                        <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "18rem" }} src="https://picsum.photos/800/600?random=5" alt='' />
                        <div class="card-body">
                            <Link className=' text-decoration-none' to=""> <h5 class="card-title fw-bold text-center">Ship Rental</h5></Link>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default AdditionalService;