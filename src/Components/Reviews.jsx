import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom';
import ReviewComment from './ReviewComment';
import ReviewDetails from './ReviewDetails';
const Reviews = () => {

  

  return <div className='w-11/12 h-96 p-1  '>
          {/* heading */}
          <div className=' mb-2 flex gap-4 text-2xl font-semibold'>
            <Link to={'/new'} className=' text-gray-400'>Details</Link>
            <Link to="/new" className=' text-black'>Reviews</Link>
            <Link to={'/new'} className=' text-gray-400'>Discussion</Link>
          </div>

          {/* 
          
          <ul className=' mb-2 flex gap-4 text-2xl font-semibold'>
            <li className=' text-gray-400'>Details</li>
            <li className=' text-black'>Reviews</li>
            <li className=' text-gray-400'>Discussion</li>
          </ul>

          */}

          {/* body */}

          <div className='w-11/12 flex justify-between' >

              <div>
                {/* review Comment */}
                <div className='mt-4 '>
                  <select className='pr-6 mt-1 border-white outline-zinc-200 border-8 font-medium border-solid outline outline-offset-2 outline-1 rounded-sm '>
                  <option value="0">Newest</option>
                  <option value="1">Top</option>
                  </select>
                  </div>
                  <ReviewComment />
                  <ReviewComment reply={true} />
                  </div>
            {/* rateing and offer */}
            <div>
              <ReviewDetails/>
            </div>
          

          
          </div>
          






  </div>
}

export default Reviews