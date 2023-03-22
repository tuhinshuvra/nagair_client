import React from 'react';
import { Link } from 'react-router-dom';

const PassengerProfileDisplay = ({ passenger }) => {
    const { id, name, email, phone, weight, bloodGroup, img, travelCount, totalTravelDistance } = passenger;
    return (
        <div>
            <h2>Passenger Display</h2>

            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{email}</p>
                            <p className="card-text">{phone}</p>
                            <p className="card-text">{weight}</p>
                            <p className="card-text"><small className="text-muted">{travelCount}, {totalTravelDistance}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PassengerProfileDisplay;