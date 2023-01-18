import React from 'react';
import './MulitImageSlider.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import './MulitImageSlider.css';

const PopularLocations = () => {

    return (
        <div className='popular-location location-bg my-0 py-0 '>
            <h1 className=' text-center fw-bold  '> Popular Locations </h1>
            <div className=' col-lg-12 '>
                <div className='row'>

                    <div className=' col-lg-6'>
                        <h2 className=' fw-bold text-center'>Domestic</h2>
                        <Carousel cols={2} rows={1} gap={5} loop={true} autoplay={3000} >
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Cox's Bazar</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Kolkata</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Bangkok</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Londhon</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Cox's Bazar</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Kolkata</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Bangkok</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Londhon</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Cox's Bazar</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Kolkata</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Bangkok</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Londhon</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className=' col-lg-6'>
                        <h2 className=' fw-bold text-center'>International</h2>
                        <Carousel cols={2} rows={1} gap={5} loop={true} autoplay={3000} >
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Cox's Bazar</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Kolkata</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Bangkok</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Londhon</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Cox's Bazar</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Kolkata</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Bangkok</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Londhon</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Cox's Bazar</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Kolkata</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Bangkok</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top img-fluid p-2 rounded-4" style={{ height: "8rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Londhon</h5>
                                    </div>

                                    <div class="card-body">
                                        <Link to="#" class="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularLocations;