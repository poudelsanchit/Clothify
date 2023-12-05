import React from 'react'
import Nike from '../assets/nike.png'
import { IoFingerPrintOutline,IoSearch } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="sticky bg-white py-1 top-0  z-50 w-full font-Montserrat text-black flex flex-col items-center">
      <div className="flex justify-between items-center  text-lg font-medium h-16 w-11/12 ">
        <img src={Nike} alt="" className="h-12" />
        {/* <div className='flex gap-5'>
          <div>New & Featured</div>
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </div> */}
        <div className='bg-[#f4f4f4] flex justify-center items-center rounded-md'>
      <IoSearch className='text-[#a6a6a6] text-xl mx-2'/>
          <input type="text" className='bg-[#f4f4f4] rounded-xl focus:outline-none  text-[#a6a6a6] h-10 w-72 placeholder:text-sm text-sm' placeholder='Search'/></div>
        <div className='flex justify-center items-center gap-2 cursor-pointer '>
        <IoFingerPrintOutline  className='text-2xl hover:scale-[1.01]'/>login</div>
      </div>
      <div className='w-11/12 flex gap-10 font-medium tracking-tighter py-3  border-b-[0.1px] border-[#f4f4f4]'>
        <div>Men</div>
        <div>Women</div>
        <div>Kids</div>
        <div>Sports</div>
        <div>New</div>
        <div>Sale</div>



        </div>
    </div>
  );
}

export default NavBar