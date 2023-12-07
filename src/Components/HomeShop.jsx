import React from 'react'
import {Jordan1,WhiteJordan} from '../assets/index'
const HomeShop = () => {
  return (
    <div className="w-screen h-auto flex justify-center">
      <div className="w-11/12 ">
        <div className="text-[1.7rem] font-medium font-Poppins mb-4">
          {" "}
          Popular Right Now
        </div>
        <div className="w-full  flex gap-5">
          <div className="flex flex-col font-Poppins">
            <img
              src={Jordan1}
              alt=""
              className="h-[30rem] w-[30rem] rounded-md bg-orange-500"
            />
            <div className=' text-lg font-medium'>Air Jordan 1 Retro High OG</div>
            <div className='text-secondary-text '>Men's Shoes</div>
            <div className=' font-medium'>$180</div>
          </div>
          <div>
            {" "}
            <img
              src={WhiteJordan}
              alt=""
              className="h-[30rem] w-[30rem] rounded-md bg-orange-500"
            />
          </div>
          <div>
            {" "}
            <img
              src={Jordan1}
              alt=""
              className="h-[30rem] w-[30rem] rounded-md bg-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeShop