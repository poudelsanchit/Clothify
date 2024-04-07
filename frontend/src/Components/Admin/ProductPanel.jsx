import React, { useState } from 'react'
import AddProduct from './AddProduct';
import { MdVisibility, MdArrowUpward, MdOutlineArrowDownward, MdDelete } from "react-icons/md";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { useToast } from "@chakra-ui/react";
import axios from 'axios'

const ProductPanel = ({ allProducts }) => {
    const toast = useToast();
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
    const handleDelete=(_id)=>{
        axios.delete(`http://localhost:5000/items/${_id}`)
        .then(response => {
            console.log('Product deleted:', _id);
            window.location.reload();
            toast({
                title: "Product Removed.",
                status: "warning",
                duration: 2000,
                position: "top-right",
                isClosable: true,
              });
        })
        .catch(error => {
            // Handle error
            console.error('Error deleting product:', error);
        });


    }
    return (
        <div className='flex flex-col w-full gap-6'>
            <div className='flex justify-evenly'>
                {
                    adminItems.map(({ logo, title, totalStats, growth, percent, thisWeek }) => {
                        return (
                            <div className='min-w-60 min-h-40 bg-[#e1e1e1] flex flex-col items-start justify-center p-4 gap-3 neuphorism '>
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
                <table  >
                    <tr className='bg-[#F8FAFC] text-black font-bold text-xl border-b border-[#e1e1e1] font-roboto '>
                        <td className='p-2'>Image</td>
                        <td className='p-2'>Name</td>
                        <td className='p-2'>Category</td>
                        <td className='p-2'>Price</td>
                        <td className='p-2'>Action</td>
                    </tr>
                    {
                        allProducts.map(({ image, name, price,productType,_id }) => {
                            return (
                                <tr className='border-b border-[#e1e1e1] tracking-tight'>
                                    <td className='p-2 w-[10%]'>
                                        <img className='w-16 h-16 rounded-sm object-cover' src={image[0]} alt="" />
                                    </td>
                                    <td className='p-2 w-[40%]'>{name}</td>
                                    <td className='p-2 w-[10%]'>{productType}</td>
                                    <td className='p-2 w-[10%]'>${price}</td>
                                    <td className='p-2 w-[10%] '>
                                        <div className='flex  items-center gap-5'>
                                        <div className=' w-fit p-2 bg-blue-600 rounded-md    text-white text-2xl text-center cursor-pointer  hover:scale-110 duration-200'>
                                            <CiEdit />
                                        </div>
                                        <div className=' w-fit p-2 bg-red-600 rounded-md    text-white text-2xl text-center cursor-pointer  hover:scale-110 duration-200' onClick={()=>handleDelete(_id)}>
                                            <MdDelete />
                                        </div>
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