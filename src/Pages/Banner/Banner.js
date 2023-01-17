import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='col-lg-12'>
            <div className="py-5 my-5 text-center banner">
                <h1 className="display-5 fw-bold text-text-black ">LIFE IS SHORT, OR IT'S BIG <br /> LET'S EXPLORE IT</h1>
                <div className="col-lg-6 mx-auto">

                </div>
                <form className='rounded rounded-2 bg-sm p-5 bg-secondary m-3'>
                    <div className=''>
                        <div className='col-lg-4'>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label fw-bold" for="inlineRadio1">Return</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label fw-bold" for="inlineRadio2">One Way</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label class="form-check-label fw-bold" for="inlineRadio3">Multi-city</label>
                            </div>
                        </div>

                        <div className='row col-lg-12'>

                            <div className=' col-lg-5 d-lg-flex'>
                                <div className="form-outline  col-lg-6 mx-1">
                                    <label className="form-label float-start fw-bold" for="username">From</label>
                                    <input type="text" id="journey-from" className="form-control" placeholder="Enter journety to" />
                                </div>

                                <div className="form-outline  col-lg-6 mx-1">
                                    <label className="form-label float-start fw-bold" for="password">To</label>
                                    <input type="text" id="journey-to" className="form-control" placeholder='Enter journey to' />
                                </div>

                            </div>
                            <div className=' col-lg-7 d-lg-flex'>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start fw-bold" for="password">Depart</label>
                                    <input type="date" id="from-date" className="form-control" />
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start fw-bold" for="password">Return</label>
                                    <input type="date" id="to-date" className="form-control" />
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start fw-bold" for="password">Cabin Class</label>
                                    <select className="form-select select-bordered  ">
                                        <option disabled selected>Select</option>
                                        <option value={0}>Economy</option>
                                        <option value={1}>Preminum Economy</option>
                                        <option value={2}>Business</option>
                                        <option value={3}>First Class</option>
                                    </select>
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start fw-bold" for="password">Travellers</label>
                                    <select className="form-select select-bordered  ">
                                        <option disabled selected>Select</option>
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


                        <div className="text-center pt-1 mb-5 pb-1 my-2">
                            <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 float-end" type="button">
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