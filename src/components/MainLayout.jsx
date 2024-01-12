import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='px-16'>
          <Navbar/>
          <Outlet/>
        </div>
    );
};

export default MainLayout;