import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { Input } from '@chakra-ui/react'
import { IoIosArrowBack } from "react-icons/io";

const Billing = ({handleToggle}) => {
  const handleCheckout=()=>{
    handleToggle(1);
  }
  
  return (
    <div className=' flex gap-4 w-full justify-center items-center '>
         <div className=' p-2 flex gap-4 justify-around w-11/12 '>

         <div className='grid  gap-4  '>

          <div className=' flex items-center font-bold text-4xl gap-2'><IoIosArrowBack className='bg-[#3182ce] cursor-pointer text-white rounded-md' onClick={handleCheckout}/><div>Shopping cart</div></div>
          <div><p>HomePage / Clothing Catagories / <span className=' underline'>My Shopping</span></p></div>
          <div className=' grid gap-4'>
            <div className=' py-10 pl-8 flex items-center gap-8 h-16 border border-gray-300 rounded-md    '>
              <div className=' border rounded-full px-2 items-center justify-center font-bold'>a</div>
              <div className='   pr-44'><div className='flex  gap-3  text-sm font-medium  text-gray-600'>LOGIN <FaCheck /></div>
                   <div className=' flex text-black text-sm font-medium '>Sumit Rana <span className=' ml-6'>+977-9860000044</span></div>
              </div>
              <div><button className=' px-6 py-2 bg-slate-100 rounded-md text-black text-sm'>CHANGE</button></div>
            </div>

            <div className=' py-12 px-8 flex items-center gap-8 h-16 border border-gray-300 rounded-md    '>
                <div className=' border rounded-full px-2 items-center justify-center font-bold'>b</div>
                <div className='  pr-48 grid gap-1'><div className='flex  gap-3  text-sm font-medium  text-gray-600'>SHIPPING ADDRESS <FaCheck /></div>
                    <div className=' flex text-black text-sm font-medium '>Syangja waling Gandaki,  Pokhara  <br/>- Prithvi Chowk </div>
                </div>
                <div><button className=' px-6 py-2 bg-slate-100 rounded-md text-black text-sm'>CHANGE</button></div>
                </div>
              </div>
              <div> 
              <div className=' py-8 px-8 flex items-center gap-8 h-16  bg-gray-100 rounded-md    '>
                    <div className=' border rounded-full px-2 items-center justify-center font-normal text-base bg-slate-900 text-white'>b</div>
                        <div className=' flex mx-8 text-black text-sm font-medium '>PAYMENT METHOD</div>
                </div>

                <div className='flex gap-4 my-8'>
                <div className=' h-5 w-5 mt-4  bg-slate-900 rounded-full'></div>
                  <div>
                  <div> <div className=' flex items-center my-3  gap-4 text-base font-semibold'> <span className=' border-2 border-gray-600 rounded-lg py-1 px-2'><CiCreditCard1 size={36} /></span>Debit Card / Credit Card</div></div>
                  <div className='mb-2'><div className=' leading-8' >Enter card Number * <br></br> <Input placeholder='xxx-xxxx-xxxx' size='lg' width={460}  /></div> </div>
                  <div className=' flex gap-4 leading-8'>
                      <div>Valid Date<br></br> <Input placeholder='08/26' size='lg' width={180}  /></div>
                      <div>CVV*<br></br><Input placeholder='xxx' size='lg' width={180}  /></div>
                      <div className=' bg-black text-white font-medium py-3 px-4 h-fit  mx-2 mt-7 rounded-md justify-center items-end text-lg'> Pay $117.00</div>
                  </div>
                  <div className=' text-gray-600 text-sm mt-4'>*Your card would be securely saved for the faster payments. Your CVV will not be stored</div>
                  </div>
                </div>


              </div>
          </div>





{/*  */}
          <div className=' border h-fit rounded-lg grid gap-3 mt-24'>
<div className=' grid gap-4 px-6 pt-6'>
<div className=''><p className=' text-xl font-bold'>Your Order</p></div>
            <hr/>
            <div className=' flex gap-4'>
                  <div className=' h-32 w-24 bg-orange-400 rounded-md'></div>
                  <div className=' grid justify-start  pl-2  m-1'>
                    <div className=' font-bold'>Blue Shoe Jorden</div>
                    <div> <span className='font-medium'>Size: </span>  XL <span className=' ml-6 font-medium'> color: </span>Blue</div>
                    <div className=' font-semibold'>$39,00 x 02</div>
                  </div>
            </div>
            <hr/>
            <div className=' flex gap-4'>
                  <div className=' h-32 w-24 bg-orange-400 rounded-md'></div>
                  <div className=' grid justify-start  pl-2  m-1'>
                    <div className=' font-bold'>Black  Jorden</div>
                    <div> <span className='font-medium'>Size: </span>  XL <span className=' ml-6 font-medium'> color: </span>Blue</div>
                    <div className=' font-semibold'>$39,00 x 02</div>
                  </div>
            </div>
            <hr/>
            <div className=' flex justify-between'>
            <div>Delivery</div>
            <div className=' text-gray-500'><span className=' text-black font-bold'>$20</span> {`(Express)`}</div>
             </div>
             <div className=' flex justify-between'>
            <div>Discount</div>
            <div className=' text-gray-500'><span className=' text-black font-bold mr-[4.4rem]'>- $20</span> {``}</div>
             </div>
            
</div>
            
            <div className=' mx-3 mb-2 py-8 w-46 bg-gray-100  rounded-lg text-3xl font-semibold px-3'>Total <span className=' ml-14'>$177,00</span></div>


          </div>

         </div>


    </div>
  )
}

export default Billing