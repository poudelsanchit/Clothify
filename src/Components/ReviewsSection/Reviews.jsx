import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom';
import ReviewComment from './ReviewComment';
import ReviewDetails from './ReviewDetails';
const Reviews = () => {
  const [togglePage,setTogglePage]= useState(1);

  

  return (
    <div className="w-11/12 h-96 p-1  ">
      <div className=" mb-2 flex gap-4 text-2xl font-semibold">
        <div className={togglePage===1? " text-black cursor-pointer": " text-gray-400 cursor-pointer"} onClick={() => setTogglePage(1)}>
          Details
        </div>
        <div className={togglePage===2? " text-black cursor-pointer": " text-gray-400 cursor-pointer"} onClick={() => setTogglePage(2)}>
          Reviews
        </div>
        <div className={togglePage===3? " text-black cursor-pointer": " text-gray-400 cursor-pointer"} onClick={() => setTogglePage(3)}>
          Discussion
        </div>
      </div>

      {togglePage === 1 ? (
        <div>Details</div>
      ) : togglePage === 2 ? (
        <div className="w-11/12 flex justify-between">
          <div>
            {/* review Comment */}
            <div className="mt-4 ">
              <select className="pr-6 mt-1 border-white outline-zinc-200 border-8 font-medium border-solid outline outline-offset-2 outline-1 rounded-sm ">
                <option value="0">Newest</option>
                <option value="1">Top</option>
              </select>
            </div>
            <ReviewComment />
            <ReviewComment reply={true} />
          </div>
          {/* rateing and offer */}
          <div>
            <ReviewDetails />
          </div>
        </div>
      ) : (
        <div>Discussion</div>
      )}
    </div>
  );
}

export default Reviews