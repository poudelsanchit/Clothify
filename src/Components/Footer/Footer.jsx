import React from 'react'
import { Link } from 'react-router-dom';
import Nike from './nike.png'

export function Footer() {
  return (
    <div className=" border-t-2  shadow-2xl  bottom-0  w-full font-roboto h-14 flex items-center px-8 justify-around mt-10">
      <div className="">
        <Link to={"/"}>
          <img src={Nike} alt="" className="h-12" />
        </Link>
      </div>
      <div className="text-sm font-medium text-gray-500 flex flex-col">
        <div> © 2024 NIKE. All rights reserved.</div>
        <Link to={"/contributers"}>
          <div className='underline'>contributers</div>
        </Link>
      </div>
    </div>
  );
}
