import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PassengerProfileDisplay from './PassengerProfileDisplay';

const PassengerProfile = () => {

    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        fetch('PassengerListData.json')
            .then(response => response.json())
            .then(data => setPassengers(data))
    }, [])

    return (
        <div>
            <h2 className=' text-center fw-bold my-4'>Passenger Profile</h2>
            {
                passengers.map(passenger =>
                    <PassengerProfileDisplay
                        key={passenger.id}
                        passenger={passenger}
                    ></PassengerProfileDisplay>
                )
            }

        </div>
    );
};

export default PassengerProfile;