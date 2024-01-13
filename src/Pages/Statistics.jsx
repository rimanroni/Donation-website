import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts';



const Statistics = () => {
    const [price, setPrice] = useState(0);
    const [total , setTotal] = useState([])

useEffect(()=>{
     
    const data = JSON.parse(localStorage.getItem('add'))
    if(data){
         const totalPrice = data.reduce((accumulator ,item) => {
            return accumulator += item.price;
          }, 0)
      setPrice(totalPrice)
    }
    fetch('/./data.json')
    .then(res=>res.json())
    .then(data=>setTotal(data))
    
   
},[])
    return (
        <div className='mt-4'>
           <div className='flex justify-center items-center '>
           <PieChart
      series={[
       {
        data: [
         { id: 0, value: 6561 , label:'total donation'  },
         { id: 1, value:  `${price}`,  label:"your donation" }
         
      ],
    },
  ]}
  width={500}
  height={300}
/> <br />
           </div>
          
        </div>
    );
};

export default Statistics ;