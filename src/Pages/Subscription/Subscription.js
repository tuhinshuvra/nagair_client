import React from 'react';
import './Subscription.css';

const Subscription = () => {
    return (
        <div>
            <div class="subs-bg col-xl-12 px-4 py-lg-5">
                <div class="align-items-center g-lg-5">
                    <div class="col-lg-7 text-center  mx-auto my-lg-5">
                        <h1 class="display-4 fw-bold lh-1 mb-3">Subscribe & Receive <br />Our Exclusive Offers</h1>
                        {/* <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
                    </div>

                    <div class=" d-flex justify-content-center align-items-center">
                        <form className=' d-flex'>
                            <input type="email" className=' form-control' placeholder='Email address' />
                            <button className=' btn btn-primary ms-1' >Subscrive</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;