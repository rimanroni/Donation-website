import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Detils = () => {
    const {ids} = useParams()
    const data = useLoaderData();
    const findData = data.find(item=>item.id ==ids)
    const {id,picture,title,category,category_bg,card_bgtext_button_bg,description,price,text_button_bg} = findData;
    return (
        <div className='mt-4  '>
            <div className='relative   '>
                <img src={picture} className='w-full lg:h-[400px]' alt="" /> 
                <div className=' px-2 lg:px-4'>
                <div className='bg-black text-white px-4  opacity-100 absolute w-[95%] py-3 rounded bottom-3 '>
                    <button className=' px-4 py-2 rounded text-white  ' style={{background:`${text_button_bg}`}}>Donet ${ price}</button>
                </div>
                </div>
            </div>
            <div className='mt-2 space-y-2'>
                <h1 className='text-2xl font-bold '>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Detils;