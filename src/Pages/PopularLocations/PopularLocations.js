import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import './MulitImageSlider.css';
import DomesticOne from '../../assets/image/flights/domestic/Barisal.png';
import DomesticTwo from '../../assets/image/flights/domestic/Chittagong.png';
import DomesticThree from '../../assets/image/flights/domestic/Jessore.png';
import DomesticFour from '../../assets/image/flights/domestic/Rajshahi.png';
import DomesticFive from '../../assets/image/flights/domestic/Saidpur.png';
import DomesticSix from '../../assets/image/flights/domestic/Sylhet.png';
import DomesticSeven from '../../assets/image/flights/domestic/Thakurgaon.png';
import DomesticEight from '../../assets/image/flights/domestic/Barisal.png';
import DomesticNine from '../../assets/image/flights/domestic/Jessore.png';
import DomesticTen from '../../assets/image/flights/domestic/Saidpur.png';


import InternationalOne from '../../assets/image/flights/international/singapore.png';
import InternationalTwo from '../../assets/image/flights/international/Beijing.png';
import InternationalThree from '../../assets/image/flights/international/Delhi.png';
import InternationalFour from '../../assets/image/flights/international/Hong Kong.png';
import InternationalFive from '../../assets/image/flights/international/mumbai.png';
import InternationalSix from '../../assets/image/flights/international/jeddah.png';
import InternationalSeven from '../../assets/image/flights/international/Shanghai.png';
import InternationalEight from '../../assets/image/flights/international/Dubai.png';
import InternationalNine from '../../assets/image/flights/international/doha.png';
import InternationalTen from '../../assets/image/flights/international/Bangalore.png';


const PopularLocations = () => {

    return (
        <div className='popular-location location-bg my-0 py-lg-5 '>
            <h1 className=' text-center fw-bold pt-lg-5  nag_heading animate_bottom'> Popular Locations </h1>
            <h2 className='text-center fw-bold pt-lg-2 nag_heading animate_left'> Domestic Flights</h2>
            <div className=' col-lg-10 mx-auto'>
                <div className="animate_left" >
                    <Carousel cols={4} rows={1} gap={5} loop={true} autoplay={3000} >
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticOne} alt='' />
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
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticTwo} alt='' />
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
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticThree} alt='' />
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
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticFour} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Saidpur</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticFive} alt='' />
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
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticSix} alt='' />
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
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticSeven} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Thakurgaon</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticEight} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Barishal</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold  ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticNine} alt='' />
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
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticTen} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Saidpur</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticSix} alt='' />
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
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={DomesticSeven} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Thakurgaon</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>



                    </Carousel>
                </div>
            </div>
            <div className=' col-lg-10 mx-auto'>
                <h2 className='text-center fw-bold pt-lg-5 nag_heading animate_right'> International Flights</h2>

                <div className="animate_right" >
                    <Carousel cols={4} rows={1} gap={5} loop={true} autoplay={3000} className="animate_right">
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalOne} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Singapore</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalTwo} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Beijing</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalThree} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Delhi</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalFour} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Hong Kong</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalFive} alt='' />
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
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalSix} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Jeddah</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalSeven} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Shanghai</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalEight} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Dubai</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalNine} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Doha</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalTen} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Bangalore</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalSix} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Jeddah</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card" style={{ width: "16rem" }}>
                                <img className="card-img-top img-fluid p-2 rounded-4" style={{ height: "12rem" }} src={InternationalSeven} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Shanghai</h5>
                                </div>

                                <div className="card-body">
                                    <Link to="#" className="card-link text-decoration-none float-end fw-bold ">From BDT 11894 &#10148;</Link>
                                </div>
                            </div>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

        </div >
    );
};

export default PopularLocations;