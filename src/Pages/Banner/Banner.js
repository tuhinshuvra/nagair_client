import React from 'react';
import { FaCalendarCheck, FaCannabis, FaPeopleArrows, FaPlane, FaPlaneArrival, FaPlaneDeparture, FaSpa } from 'react-icons/fa';
import './Banner.css'

const Banner = () => {
    return (
        <div className=' my-0 py-0'>
            <div className="text-center banner d-flex flex-column justify-content-end">
                <h1 className="display-5 fw-bold text-text-black nag_heading animate_bottom">Life Is Short, Or It's, Big<br /> Let's Explore It</h1>
                {/* <div className="col-lg-6 mx-auto ">

                </div> */}
                <form className='col-lg-10 mx-auto rounded rounded-2 p-2 m-3 flight-search mb-3'>
                    <div className=''>
                        <div className='col-lg-4'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="return" id="return" value="return" />
                                <label className="form-check-label fw-bold" htmlFor="return">Return</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="one-way" id="one-way" value="one-way" />
                                <label className="form-check-label fw-bold" htmlFor="one-way">One Way</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="multi-way" id="multi-way" value="multi-way" />
                                <label className="form-check-label fw-bold" htmlFor="multi-way">Multi-city</label>
                            </div>
                        </div>

                        <div className='row col-lg-12'>
                            <div className=' col-lg-5 d-lg-flex'>
                                <div className="form-outline  col-lg-6 mx-1">
                                    <label className="form-label float-start fw-bold" htmlFor="journey-from">
                                        <FaPlaneDeparture />
                                        <span className=''>   From</span>
                                    </label>
                                    <input type="text" id="journey-from" className="form-control" placeholder="Enter journety to" />
                                </div>

                                <div className="form-outline  col-lg-6 mx-1">
                                    <label className="form-label float-start fw-bold " htmlFor="journey-to">
                                        <FaPlaneArrival />
                                        <span className=''>  To </span>
                                    </label>
                                    <input type="text" id="journey-to" className="form-control" placeholder='Enter journey to' />
                                </div>

                            </div>
                            <div className=' col-lg-7 d-lg-flex'>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start fw-bold" htmlFor="password">
                                        < FaCalendarCheck />
                                        <span className=''>Depart</span>
                                    </label>
                                    <input type="date" id="from-date" className="form-control" />
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start fw-bold" htmlFor="password">
                                        < FaCalendarCheck />
                                        <span className=''> Return</span>
                                    </label>
                                    <input type="date" id="to-date" className="form-control" />
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start fw-bold" htmlFor="password">
                                        <FaSpa />
                                        <span className=''>  Cabin Class </span>

                                    </label>
                                    <select className="form-select select-bordered  ">
                                        <option disabled defaultValue>Select</option>
                                        <option value={0}>Economy</option>
                                        <option value={1}>Preminum Economy</option>
                                        <option value={2}>Business</option>
                                        <option value={3}>First Class</option>
                                    </select>
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start fw-bold" htmlFor="password">

                                        < FaPlane />
                                        <span className=''>Travellers</span>
                                    </label>
                                    <select className="form-select select-bordered  ">
                                        <option disabled defaultValue>Select</option>
                                        <option value={0}>One</option>
                                        <option value={1}>Two</option>
                                        <option value={2}>Three</option>
                                        <option value={3}>Four</option>
                                        <option value={4}>Five</option>
                                        <option value={5}>Six</option>
                                        <option value={6}>Seven</option>
                                        <option value={7}>Eight</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="text-center pt-3 pb-3">
                            <button className="custom_btn" type="button">
                                Search Flights &#10148;
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Banner;