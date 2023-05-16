import React from 'react';
import Offer1 from '../../../../assets/image/offer/offer1.png';
import Offer2 from '../../../../assets/image/offer/offer2.png';
import Offer3 from '../../../../assets/image/offer/offer3.png';
import Offer4 from '../../../../assets/image/offer/offer4.png';
import Offer5 from '../../../../assets/image/offer/offer1.png';

const HomePageOffer = () => {
    return (
        <div className='my-0 py-0  '>
            <div id="nagAirCarouseleInterval" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={Offer1} className="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Offer2} className="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Offer3} className="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Offer4} className="d-block w-100 rounded-3 " alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Offer5} className="d-block w-100 rounded-3 " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#nagAirCarouseleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#nagAirCarouseleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HomePageOffer;