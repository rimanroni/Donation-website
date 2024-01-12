import React from 'react';
import { NavLink } from 'react-router-dom';

const DonetCard = ({donet}) => {
    const {id, picture,title,category,category_bg,card_bg,text_button_bg} = donet;
    return (
        <NavLink to={`/${id}`}>
        <div className='space-y-2 pb-2' style={{background:`${card_bg}`}}>
            <img src={picture} alt="" />
           <div className='px-2 space-y-2'>
           <h1 style={{background:`${category_bg}`,color:`${text_button_bg}`}} className='font-semibold inline-block px-2 py-1'>{category}</h1>
            <h1 style={{color:`${text_button_bg}`}} className='text-xl font-bold'>{title}</h1>
           </div>
        </div>

        </NavLink>
    );
};

export default DonetCard;