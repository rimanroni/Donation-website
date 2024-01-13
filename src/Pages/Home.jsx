import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import DonetCard from '../components/DonetCard';

const Home = () => {
    const data = useLoaderData()
   
    return (
        <div className='mt-2 py-4'>
            <Banner/>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {data.map(donet=><DonetCard donet={donet} key={donet.id}/>)}
             </div>
        </div>
    );
};

export default Home;