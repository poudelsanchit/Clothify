
import React from 'react'
import { Link } from 'react-router-dom';
import Clothify from '../../assets/clothify-dark.png'


export function Footer() {
  return (
    <div className=" border-t-2  shadow-2xl  bottom-0  w-full font-roboto h-14 flex items-center px-8 justify-around">
      <div className="">
        <Link to={"/"}>
          <img src={Clothify} alt="" className="h-8" />
        </Link>
      </div>
      <div className="text-sm font-medium text-gray-500 flex flex-col">
        <div> © 2024 Clothify. All rights reserved.</div>
      </div>
    </div>
  );
}
