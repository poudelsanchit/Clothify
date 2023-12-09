import React, { useRef } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import EachCard from './EachCard';

const Swiper = ({products,title}) => {
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
    <>
      <div className="text-[1.7rem]  font-medium font-Poppins mb-4 mt-10">
       {title}
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

        <div
          className="flex flex-row gap-4 overflow-x-scroll whitespace-nowrap scroll-smooth relative"
          ref={sliderRef}
        >
          {products.map((product) => (
            <EachCard data={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Swiper