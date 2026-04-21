import React from 'react';
import NavBar from '../../components/shared/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;