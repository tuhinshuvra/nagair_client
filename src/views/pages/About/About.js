import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../../../assets/image/NagAirBanner.png';
import './About.css';

const About = () => {
    return (
        <div className="about_us px-md-4 py-5">
            <div className="col-lg-11 mx-auto row  flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-xl-6">
                    <img src={AboutImage} className="aboutImage d-block mx-lg-auto img-fluid rounded-3 shadow-lg" alt="Bootstrap Themes" loading="lazy" />
                </div>
                <div className="col-xl-6">
                    <h1 className="fw-bold lh-1 mb-3 aboutUsHeading d-flex justify-content-md-start justify-content-center ">Nag Air</h1>
                    <p className="lead">We come together each day to fulfill a promise of offering the single most comprehensive travel experience to users, through award-winning Mobile and Desktop solutions. With intuitive products that have the largest selection of flights and hotels, we keep customers at the center of everything we do.</p>
                    <p className='lead'>Our leadership team is an eclectic mix, that is driven by values important to us. Their constant endeavor is to keep innovating and provide a best-in-class customer experience.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center">
                        <Link to="/contact">  <button type="button" className="custom_btn  px-4  text-center">Contact US</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;