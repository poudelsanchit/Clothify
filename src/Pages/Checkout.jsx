import React, { useState } from 'react'
import Shipping from '../Components/Payments/Shipping';
import Billing from '../Components/Payments/Billing';

const Checkout = () => {
    const[tooglePage,setTogglePage] = useState(1);
  
  return (
    <div className='flex flex-col w-full items-center justify-center'>
        <div className='w-11/12  flex justify-evenly text-3xl font-bold font-Poppins  '>
            <div onClick={()=>setTogglePage(1)} className='cursor-pointer'>Shipping</div>
            <div  onClick={()=>setTogglePage(2)} className='cursor-pointer'> Billing</div>
        </div>
        {tooglePage===1? <Shipping/> : <Billing/>}
        
    </div>
  )
}

export default Checkout