
import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import shoedata from './shoedata'; 

const HomeShop = () => {
  const sliderRef = useRef(null);



  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 540;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 540;
    }
  };

  return (
    <div className="w-screen h-auto flex justify-center mb-4" id="homeShop">
      <div className="w-11/12">
        <div className="text-[1.7rem]  font-medium font-Poppins mb-4">
          Popular Right Now
        </div>

        <div className="flex items-center relative group">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white rounded-full text-black absolute right-14 top-2 opacity-50 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />

          <MdChevronRight
            onClick={slideRight}
            className="bg-white rounded-full text-black absolute right-2 top-2 opacity-50 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />

          <div className="flex flex-row gap-4 overflow-x-scroll whitespace-nowrap scroll-smooth relative" ref={sliderRef}>
            {shoedata.map((product, index) => (
              <div key={index} className="flex flex-col font-Poppins">
                <img
                  src={product.image}
                  alt=""
                  className="h-[30rem] w-[30rem] rounded-md object-cover bg-orange-500"
                />
                <div className="text-lg font-medium">{product.name}</div>
                <div className="text-secondary-text">{product.category}</div>
                <div className="font-medium w-[30rem] ">{product.price}</div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HomeShop;
