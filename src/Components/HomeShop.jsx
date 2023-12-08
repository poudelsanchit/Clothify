import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import shoedata from './shoedata'; 
import axios from 'axios';
import EachCard from './EachCard';

const HomeShop = () => {
  const [products,setProducts]= useState([])
  const fetchData=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/products')
    setProducts(ProductsData.data)

  }
  useEffect(()=>{
    fetchData();
  },[])

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
    <div className="w-full h-auto flex justify-center mb-4" id="homeShop">
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
           {products.map((product) => (
             <EachCard data={product}/>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HomeShop;
