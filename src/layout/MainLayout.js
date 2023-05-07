import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../views/components/Shared/Navbar/Navbar';
import Footer from '../views/components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='container'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;