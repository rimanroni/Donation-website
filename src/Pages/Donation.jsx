import React, { useEffect, useState } from 'react';
import DontaionDetils from './DontaionDetils';

const Donation = () => {
    const [data, setData] = useState([])
    const [empty, setEmpty] = useState('')
    const [lengthBtn , setLengthBtn] = useState(4);
    const [btnTrue, setBtnTrue] = useState(true)

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('add'));
        if(data){
            setData(data)
         }else{
            setEmpty('No Donation found ')
         }
        
    },[])
 const ClearDataBase = () =>{
    localStorage.clear()
    setEmpty('No Donation found ')
 }
 const btnShow = () =>{
    setLengthBtn(data.length)
    setBtnTrue(!btnTrue)
 }
 const btnLess = () =>{
    setLengthBtn(4)
    setBtnTrue(!btnTrue)
 }
    return (
        <div>
            {empty?<p className='h-screen flex justify-center items-center text-xl font-bold'><div className='text-center'>
                  <img src="/empty-folder.png" className='w-1/2 mx-auto' alt="" />
                  {empty}
                </div></p>:<div  >
                    <div className='mt-4 flex justify-center'>
                        <button onClick={ClearDataBase} className='px-2 py-1 bg-red-500 text-white uppercase rounded'>clear data </button>
                    </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>

                {data.slice(0,lengthBtn).map(item=><DontaionDetils donet={item} key={item.id}/>)}
                 </div>
               <div className='flex justify-center m-2'>
               {data.length>4 && btnTrue? <button 
                className='px-2 bg-green-400 py-1 text-white
                 text-xl capitalize rounded '
                onClick={btnShow}>show all</button> : <button
                className={`px-2 bg-green-400 py-1 text-white
                text-xl capitalize rounded ${btnTrue ? 'hidden':'block'}`}
                onClick={btnLess}>show less</button>}
               </div>
                </div>}
        </div>
    );
};

export default Donation;