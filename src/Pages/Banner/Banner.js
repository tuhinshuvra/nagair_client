import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='col-lg-12'>
            <div className="py-5 my-5 text-center banner">
                {/* <img className="d-block mx-auto " src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                <h1 className="display-5 fw-bold text-text-black ">LIFE IS SHORT, OR IT'S BIG <br /> LET'S EXPLORE IT</h1>
                <div className="col-lg-6 mx-auto">
                    {/* <p className="lead ">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
                        most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
                        extensive prebuilt components, and powerful JavaScript plugins.</p> */}
                    {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div> */}

                </div>
                <form className=' rounded rounded-2 bg-sm p-5 '>
                    <div className=''>
                        {/* <h5 className=' '>Please login to your account</h5> */}

                        <div className='row col-lg-12'>

                            <div className=' col-lg-5 d-lg-flex'>
                                <div className="form-outline  col-lg-6 mx-1">
                                    <label className="form-label float-start" for="username">From</label>
                                    <input type="text" id="journey-from" className="form-control" placeholder="Enter journety to" />
                                </div>

                                <div className="form-outline  col-lg-6 mx-1">
                                    <label className="form-label float-start" for="password">To</label>
                                    <input type="text" id="journey-to" className="form-control" placeholder='Enter journey to' />
                                </div>

                            </div>
                            <div className=' col-lg-7 d-lg-flex'>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start" for="password">Depart</label>
                                    <input type="date" id="from-date" className="form-control" />
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start" for="password">Return</label>
                                    <input type="date" id="to-date" className="form-control" />
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start" for="password">Cabin Class</label>
                                    {/* <input type="text" id="journey-from" className="form-control" placeholder='Enter journey to' /> */}
                                    <select className="form-select select-bordered  ">
                                        <option disabled selected>Select</option>
                                        <option value={0}>Economy</option>
                                        <option value={1}>Preminum Economy</option>
                                        <option value={2}>Business</option>
                                        <option value={3}>First Class</option>
                                    </select>
                                </div>
                                <div className="form-outline  col-lg-3 mx-1">
                                    <label className="form-label float-start" for="password">Travellers</label>
                                    {/* <input type="text" id="journey-from" className="form-control" placeholder='Enter journey to' /> */}
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