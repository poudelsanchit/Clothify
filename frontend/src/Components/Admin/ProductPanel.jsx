import React, { useState } from 'react'
import AddProduct from './AddProduct';
import { MdVisibility, MdArrowUpward, MdOutlineArrowDownward, MdDelete } from "react-icons/md";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

const ProductPanel = ({ allProducts }) => {
    const [isAddProductActive, setIsAddProductActive] = useState(false);
    const toggleAddProduct = () => {
        setIsAddProductActive(prev => !prev);
    }
    const adminItems = [
        {
            logo: <MdVisibility />,
            title: 'Visitors',
            totalStats: '167,783',
            growth: true,
            percent: '9.83',
            thisWeek: '7433',
        },
        {
            logo: <FaArrowTrendUp />,
            title: 'Total Sales',
            totalStats: '$793,623.36',
            growth: true,
            percent: '9.4',
            thisWeek: '+$526',
        },
        {
            logo: <FaArrowTrendDown />,
            title: 'Refunded',
            totalStats: '69,236',
            growth: false,
            percent: '2.6',
            thisWeek: '-128',
        },
    ]
    return (
        <div className='flex flex-col w-full gap-6'>
            <div className='flex justify-evenly'>
                {
                    adminItems.map(({ logo, title, totalStats, growth, percent, thisWeek }) => {
                        return (
                            <div className='min-w-60 min-h-40 bg-[#e1e1e1] flex flex-col items-start justify-center p-4 gap-3'>
                                <div className='flex items-center gap-1 text-sm'>
                                    <span className='text-xl rounded-full'>
                                        {logo}
                                    </span>
                                    <span>{title}</span>
                                </div>
                                <span className='text-2xl font-semibold'>{totalStats}</span>
                                <div className='flex gap-3 items-center'>
                                    <span className={`flex items-center ${growth ? 'text-green-500' : 'text-red-500'} text-[12px]`}>
                                        {growth ? <MdArrowUpward /> : <MdOutlineArrowDownward />}
                                        {percent}%
                                    </span>
                                    <span className='text-[12px] text-[#616161]'>{thisWeek} This Week</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-end px-4'>
                    <span className='font-Montserrat text-2xl font-semibold'>All Products</span>
                    < div className='w-fit px-6 py-2 text-primary-text bg-button rounded-md cursor-pointer active:scale-90 duration-200' onClick={toggleAddProduct} >
                        Add Product
                    </div >
                    {
                        isAddProductActive && (
                            <AddProduct onClose={toggleAddProduct} />
                        )
                    }
                </div>
                <table>
                    <tr className='bg-black text-primary-text'>
                        <td className='p-2'>Image</td>
                        <td className='p-2'>Name</td>
                        <td className='p-2'>Price</td>
                        <td className='p-2'>Action</td>
                    </tr>
                    {
                        allProducts.map(({ image, name, price }) => {
                            return (
                                <tr className='border-b border-[#e1e1e1]'>
                                    <td className='p-2 w-[10%]'>
                                        <img className='w-28 h-28' src={image[0]} alt="" />
                                    </td>
                                    <td className='p-2 w-[30%]'>{name}</td>
                                    <td className='p-2 w-[10%]'>${price}</td>
                                    <td className='p-2 w-[10%]'>
                                        <div className='mb-2 w-fit text-2xl py-1 px-3 text-black text-center cursor-pointer rounded-md hover:scale-110 duration-200'>
                                            <CiEdit />
                                        </div>
                                        <div className='mt-2 w-fit text-2xl py-1 px-3 text-black text-center cursor-pointer rounded-md hover:scale-110 duration-200'>
                                            <MdDelete />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default ProductPanel

// button to add ProductPanel(use later on)
//     < div className = 'w-fit px-6 py-2 text-primary-text bg-button cursor-pointer' onClick = { toggleAddProduct } >
//         Add Product
//                 </div >
// {
//     isAddProductActive && (
//         <AddProduct onClose={toggleAddProduct} />
//     )
//                 }