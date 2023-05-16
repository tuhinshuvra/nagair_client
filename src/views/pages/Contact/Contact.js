import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact_bg col-lg-12 px-lg-4 py-lg-5 py-4">
            <div className="row align-items-center g-lg-5 py-lg-5 col-lg-10 mx-auto p-sm-0">

                <div className="col-md-8 col-xl-6 mx-auto animate_right">
                    <h1 className="text-3xl font-bold mb-2  animate_bottom location_heading text-center">Get in Touch!</h1>
                    <form
                        className='d-flex flex-column'
                        action="https://formspree.io/f/mbjelnwv"
                        method="POST">

                        <input type="text"
                            className=' mb-2 form-control'
                            name="username"
                            autoComplete="off"
                            placeholder='Name'
                            required
                        />

                        <input type="text"
                            className=' mb-2 form-control'
                            name="phone"
                            autoComplete="off"
                            placeholder='Phone No'
                            required
                        />

                        <input type="email"
                            className=' mb-2 form-control'
                            name="email"
                            autoComplete="off"
                            placeholder='Email Address'

                        />
                        <textarea
                            className=' mb-2 form-control'
                            name='message'
                            cols="30"
                            rows="3"
                            autoComplete="off"
                            placeholder='Message'
                            required
                        ></textarea>
                        <input className='searchBtn my-lg-2 ' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;