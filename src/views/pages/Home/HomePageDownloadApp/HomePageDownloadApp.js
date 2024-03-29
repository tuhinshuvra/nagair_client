import React from 'react';
import AppImgOne from '../../../../assets/image/app/app_image_001.png';
import AppleStore from '../../../../assets/image/app/apple-store.png';
import AndroidStore from '../../../../assets/image/app/android-store.png';
import './HomePageDownloadApp.css';

const HomePageDownloadApp = () => {
  return (
    <div className="px-4 bgDownloadApp py-4">
      <div className="col-md-10 mx-auto row flex-lg-row-reverse align-items-center">

        <div className="col-lg-4 d-flex justify-content-center" data-aos="fade-up-left">
          <img src={AppImgOne} className="appImage" alt="Mobile_App_Img" loading="lazy" />
        </div>

        <div className="col-lg-8 mt-md-0 mt-sm-5" data-aos="fade-up-right">
          <div className=''>

            <h1 className="fw-bold   my-4 text-black appTextHead text-md-start text-center">Download the app to to get special offers!</h1>
            {/* <p className="lead my-lg-5">Quickly design and customize responsive mobile-first sites with Bootstrap, 
        the world’s most popular front-end open source toolkit, featuring Sass variables </p> */}
          </div>


          <div className="d-grid gap-2 d-flex justify-content-lg-start justify-content-center">
            <a href="https://play.google.com/store/apps/details?id=com.nagair.app&pli=1" target='_blank' rel="noreferrer" > <img className='AndroidStore' src={AndroidStore} alt="" /> </a>
            <a href="/" target='_blank' rel="noreferrer" > <img className='AndroidStore' src={AppleStore} alt="" /> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDownloadApp;