import React from 'react'
import { MdArrowUpward, MdOutlineArrowDownward } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import orderDetails from "./orderDetails.json";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDone } from "react-icons/md";


const OrderPanel = () => {
  const adminItems = [
    {
      logo: <BiCart />,
      title: 'Orders',
      totalStats: '50,215',
      growth: false,
      percent: '2.51',
      thisWeek: '2104',
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
      logo: <IoIosPeople />,
      title: 'Customers',
      totalStats: '16,451',
      growth: true,
      percent: '4.6',
      thisWeek: '1204',
    },
  ]
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
          <span className='font-Montserrat text-2xl font-semibold'>All Orders</span>
        </div>
        <table>
        <tr className='bg-[#F8FAFC] text-black font-bold text-xl border-b border-[#e1e1e1] font-roboto '>
            <td className='p-2'>Order Id</td>
            <td className='p-2'>Customer Name</td>
            <td className='p-2'>Total Sale</td>
            <td className='p-2'>Status</td>
          </tr>
          {
            orderDetails.map(({ order_id, customer_name, total_sale, status }) => {
              return (
                <tr className='border-b border-[#e1e1e1]'>
                  <td className='p-3 w-[10%]'>#{order_id}</td>
                  <td className='p-3 w-[30%]'>{customer_name}</td>
                  <td className='p-3 w-[10%]'>${total_sale}</td>
                  <td className={`p-3 w-[10%] ${status === 'Delivered' ? 'text-green-600' : 'text-orange-600'}`}>
                    <span className='flex items-center gap-1 text-lg'>
                      {status}
                      {status === 'Delivered' ? <MdDone /> : <TbTruckDelivery />}
                    </span>
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

export default OrderPanel