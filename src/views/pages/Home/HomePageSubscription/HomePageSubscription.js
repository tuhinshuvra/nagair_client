import React from 'react';
import './HomePageSubscription.css';

const HomePageSubscription = () => {
    return (
        <div className="subs_bg col-xl-12">
            <div className=" d-flex flex-column justify-content-center align-items-center  g-lg-5 my-4">
                <div className="col-lg-7 text-center  mx-auto animate_left ">
                    <h1 className="  fw-bold lh-1 mb-3 location_heading">Subscribe & Receive <br />Our Exclusive Offers</h1>
                    {/* <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
                </div>

                <div className=" d-flex justify-content-center align-items-center animate_right">
                    <form className=' d-flex'>
                        <input type="email" className=' form-control' placeholder='Email address' />
                        <button className='custom_btn ms-3'>Subscrive</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePageSubscription;