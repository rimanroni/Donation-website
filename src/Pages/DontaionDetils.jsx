import React from 'react';
import { NavLink } from 'react-router-dom';

const DontaionDetils = ({donet}) => {
    const {id, picture,title,category,category_bg,card_bg,text_button_bg , price } = donet;
    return (
        <div className={'mt-4 mb-2 mx-auto lg:mx-0'}>
        <div className='space-y-2   lg:flex ' style={{background:`${card_bg}`}}>
            <img src={picture} alt="" />
           <div className='px-2 space-y-2'>
           <h1 style={{background:`${category_bg}`,color:`${text_button_bg}`}} className='font-semibold inline-block px-2 py-1'>{category}</h1>
            <h1 style={{color:`${text_button_bg}`}} className='text-xl font-bold'>{title}</h1>
            <h1 className='text-xl font-bold text-orange-400'>Price $ {price}</h1>
            <NavLink to={`/${id}`}>
            <button style={{background:`${text_button_bg}`}} className='text-white text-xl px-2 rounded  mt-4 py-1'>View Details </button>
            </NavLink>
           </div>
        </div>

        </div>
    );
};

export default DontaionDetils;