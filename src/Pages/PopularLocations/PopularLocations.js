import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import './MulitImageSlider.css';

const PopularLocations = () => {

    return (
        <div className='popular-location location-bg my-0 py-lg-5 '>
            <h1 className=' text-center fw-bold pt-lg-5  text-primary '> Popular Locations </h1>
            <h2 className='text-center fw-bold pt-lg-2 text-primary'> Domestic Flights</h2>
            <div className=' col-lg-10 mx-auto'>

                <Carousel cols={4} rows={1} gap={5} loop={true} autoplay={3000} >
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Cox's Bazar</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Chattogram</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Sylhet</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Jessore</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Cox's Bazar</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Rangamati</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Barishal</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Sylhet</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold  ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Rangpur</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Rajshahi</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Barishal</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Rangpur</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div className=' col-lg-10 mx-auto'>
                <h2 className='text-center fw-bold pt-lg-5 text-primary'> International Flights</h2>
                {/* <h2 className=' fw-bold text-center'>International</h2> */}
                <Carousel cols={4} rows={1} gap={5} loop={true} autoplay={3000} >
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Singapur</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Kolkata</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Mumbai</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Chennai</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Tamilnaru</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Maldives</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Goa</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Kolkata</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Mumbai</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=3" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Bangkok</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=4" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Islamabad</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Darjeling</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Colombo</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Kannakumari</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=2" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Kolkata</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src="https://picsum.photos/800/600?random=1" alt='' />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Kashmir</h5>
                            </div>

                            <div className="card-body">
                                <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div >
    );
};

export default PopularLocations;