import React, { useState } from 'react'
import Shipping from '../Components/Payments/Shipping/Shipping';
import Billing from '../Components/Payments/Billing';
import  Steppers  from '../Components/Steppers';

const Checkout = () => {
    const[tooglePage,setTogglePage] = useState(1);
   const handleToggle=(data)=>{
    setTogglePage(data)
   }
  return (
    <div className='flex flex-col w-full items-center justify-center'>
        
       
        {tooglePage===1? <Shipping handleToggle={handleToggle}/> : <Billing handleToggle={handleToggle}/>}
        
    </div>
  )
}

export default Checkout