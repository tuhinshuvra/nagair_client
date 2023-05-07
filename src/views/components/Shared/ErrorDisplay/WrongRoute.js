import React from 'react';
import { Link } from 'react-router-dom';
// import useTitle from '../Hooks/useTitle';
import './WrongRoute.css'

const WrongRoute = () => {
    // useTitle('Wrong Route');
    return (
        <div className='error-page'>
            <h1 className=' text-4xl text-red-600 font-bold'>404</h1>
            <h2 className=' text-info text-3xl fw-bold' >Sorry! Wrong Route</h2>

            <Link className=' text-green-700  font-bold text-decoration-none' to="/"> <h3>Go Home</h3></Link>
        </div>
    );
};

export default WrongRoute;