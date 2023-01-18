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

                    <div class="col-md-10 mx-auto col-lg-5">
                        <form class="p-4 p-md-5 border rounded-3 bg-light">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>


                            <button class="w-100 btn btn-primary" type="submit">Subscribe</button>
                            {/* <hr class="my-4" /> */}
                            {/* <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;