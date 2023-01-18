import React from 'react';
import Offer1 from '../../assets/image/offer/offer1.jpg';
import Offer2 from '../../assets/image/offer/offer2.jpg';
import Offer3 from '../../assets/image/offer/offer3.jpg';
import Offer4 from '../../assets/image/offer/offer4.jpg';
import Offer5 from '../../assets/image/offer/offer5.jpg';
import Offer6 from '../../assets/image/offer/offer6.jpg';
import Offer7 from '../../assets/image/offer/offer7.jpg';

const Offer = () => {
    return (
        <div className=' my-0 py-0'>
            <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src={Offer1} class="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Offer2} class="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Offer3} class="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Offer4} class="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Offer5} class="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Offer6} class="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Offer7} class="d-block w-100 rounded-3 " alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Offer;