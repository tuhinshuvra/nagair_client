import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../../assets/image/plane/aeroplane-mobile.jpg';
import '../About/About.css';

const About = () => {
    return (
        <div class="about_us col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src={AboutImage} class="d-block mx-lg-auto img-fluid rounded-5 shadow-lg" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">Nag Air</h1>
                    <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius vitae consectetur beatae soluta omnis voluptatibus sed, maxime recusandae veniam? Quisquam!</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/contact">  <button type="button" class=" btn btn-primary  px-4  text-center">Contact US</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;