import React from 'react'
import ProductPanel from './ProductPanel'
import OrderPanel from './OrderPanel'
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";


const AdminPanel = ({ sidebarItem, allProducts }) => {
    return (
        <div className='w-full pl-72 flex flex-col p-8 gap-6'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='text-sm text-[#616161]'>Welcome back, Ananda</span>
                    <span className='text-5xl font-semibold'>Overview</span>
                </div>
                <div className='flex items-center gap-4 px-2'>
                    <IoSearch className='text-4xl bg-[#e1e1e1] p-2 rounded-full cursor-pointer hover:scale-110 duration-200' />
                    <IoNotificationsOutline className='text-4xl bg-[#e1e1e1] p-2 rounded-full cursor-pointer hover:scale-110 duration-200' />
                    <div className='flex items-center gap-2 p-2 rounded-3xl cursor-pointer hover:bg-[#e1e1e1]'>
                        <img className='w-10 h-10 rounded-full' src="https://avatars.githubusercontent.com/u/105543272?v=4" alt="" />
                        <span className='text-lg'>Ananda</span>
                    </div>
                </div>
            </div>
            {
                sidebarItem === 1 ?
                    <ProductPanel allProducts={allProducts} /> : <OrderPanel />
            }
        </div>
    )
}

export default AdminPanel