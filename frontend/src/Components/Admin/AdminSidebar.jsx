import React, { useState } from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { BiCart } from "react-icons/bi";
import { Link } from 'react-router-dom';


const AdminSidebar = ({ sidebarItem, setSidebarItem }) => {
    return (
        <div className='w-2/12 fixed bg-primary-text h-screen flex flex-col justify-between px-4 py-8 border-r border-secondary-bg'>
            <div className='flex flex-col justify-start'>
                <div className='flex justify-center items-center'>
                    <Link to={'/'}>
                        <img className='w-14 h-14' src="src/assets/clothify-dark.png" alt="" />
                    </Link>
                </div>
                <div className='flex flex-col gap-4 py-8'>
                    <div className={`flex justify-center items-center gap-2 min-h-10 text-lg cursor-pointer rounded-lg ${sidebarItem === 1 ? 'bg-black text-primary-text' : 'hover:scale-105 hover:bg-[#e1e1e1] duration-200'}`} onClick={() => setSidebarItem(1)}>
                        <TbShoppingBag className='text-2xl' />
                        <span>Products</span>
                    </div>
                    <div className={`flex justify-center items-center gap-2 min-h-10 text-lg cursor-pointer rounded-lg ${sidebarItem === 2 ? 'bg-black text-primary-text' : 'hover:scale-105 hover:bg-[#e1e1e1] duration-200'}`} onClick={() => setSidebarItem(2)}>
                        <BiCart className='text-2xl' />
                        <span>Orders</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-1 cursor-pointer hover:scale-110 duration-300'>
                <IoLogOutOutline className='text-2xl' />
                <span className="text-md"> Log Out</span>
            </div>
        </div>
    )
}

export default AdminSidebar