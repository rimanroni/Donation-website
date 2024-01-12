import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mt-2'>
            <div className='md:flex  justify-between items-center'>
                <div className='text-center md:text-left'>
                    <img src="/navlogo.png" alt="Donation-logo" className='md:w-10/12 ' />
                </div>
                <nav className='space-x-4 text-xl font-bold mt-4 md:mt-0 text-center '>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink>Donation</NavLink>
                    <NavLink>Statistics</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;