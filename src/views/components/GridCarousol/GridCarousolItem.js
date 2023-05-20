import React from 'react';
import { Link } from 'react-router-dom';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree, imgFour, locationOne, locationTwo, locationThree, locationFour, fareOne, fareTwo, fareThree, fareFour }) => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-4  col-sm-6">
                <div className="card mb-2 mx-md-0 mx-2">
                    <img className="card-img-top" src={imgOne} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        {
                            fareOne
                                ?
                                <>
                                    <h5 className="card-title fw-bold">{locationOne}</h5>
                                    <Link to="#" className="text_heading3 text-decoration-none float-end fw-bold">From BDT {fareOne} &#10148;</Link>
                                </>
                                :
                                <>
                                    <h5 className="card-title fw-bold text-center">{locationOne}</h5>
                                </>
                        }


                    </div>

                </div>
            </div>

            <div className="col-lg-3  col-md-4  clearfix d-none d-md-block">
                <div className="card mb-2 mx-md-0 mx-3">
                    <img className="card-img-top" src={imgTwo} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        {
                            fareTwo
                                ?
                                <>
                                    <h5 className="card-title fw-bold">{locationTwo}</h5>
                                    <Link to="#" className="text_heading3 text-decoration-none float-end fw-bold">From BDT {fareTwo} &#10148;</Link>
                                </>
                                :
                                <>
                                    <h5 className="card-title fw-bold text-center">{locationTwo}</h5>
                                </>
                        }
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-4  clearfix d-none d-md-block">
                <div className="card mb-2 mx-md-0 mx-3">
                    <img className="card-img-top" src={imgThree} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        {
                            fareThree
                                ?
                                <>
                                    <h5 className="card-title fw-bold">{locationThree}</h5>
                                    <Link to="#" className="text_heading3 text-decoration-none float-end fw-bold">From BDT {fareThree} &#10148;</Link>
                                </>
                                :
                                <>
                                    <h5 className="card-title fw-bold text-center">{locationThree}</h5>
                                </>
                        }
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-4  clearfix d-none d-lg-block">
                <div className="card mb-2 mx-md-0 mx-3">
                    <img className="card-img-top" src={imgFour} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        {
                            fareFour
                                ?
                                <>
                                    <h5 className="card-title fw-bold">{locationFour}</h5>
                                    <Link to="#" className="text_heading3 text-decoration-none float-end fw-bold">From BDT {fareFour} &#10148;</Link>

                                </>
                                :
                                <>
                                    <h5 className="card-title fw-bold text-center">{locationFour}</h5>
                                </>
                        }
                    </div>
                </div>
            </div>


        </div>

    );
};

export default GridCarousolItem;