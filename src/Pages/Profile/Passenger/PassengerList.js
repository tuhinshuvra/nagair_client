import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PassengerList = () => {
    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        fetch('PassengerListData.json')
            .then(response => response.json())
            .then(data => setPassengers(data))
    }, [])

    return (
        <div>
            <h2 className=' text-center text-2xl font-bold my-10 text-secondary my-4 '>Passenger List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className=''>
                            <th>SL</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>No of Travel</th>
                            <th>Total Diatance</th>
                            <th>Action</th>
                            <th>Show Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passengers.map((passenger, index) =>
                            <tr key={passenger.id} className='hover' >
                                <th>{index + 1}</th>
                                <th><img className=' w-25 rounded-5 ' src={passenger.img} alt="" /></th>
                                <th>{passenger.name}</th>
                                <th>{passenger.email}</th>
                                <th>{passenger.phone}</th>
                                <th>{passenger.travelCount}</th>
                                <th>{passenger.totalTravelDistance}</th>
                                <th> <button className=' btn btn-sm btn-primary'>Edit</button></th>
                                <th> <Link className='btn btn-info btn-sm' to={passenger.id}>Details</Link></th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default PassengerList;