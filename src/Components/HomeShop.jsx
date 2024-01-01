import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';
import EachCard from './Cards/EachCard';
import Swiper from './Swipers/Swiper';
import ProductsSwiper from './Swipers/ProductsSwiper';

const HomeShop = () => {
  const [products,setProducts]= useState([])
  const fetchData=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/women')
    setProducts(ProductsData.data)

  }
  const [products2,setProducts2]= useState([])
  const fetchProducts2=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/bestsales')
    setProducts2(ProductsData.data)

  }
  const [products3,setProducts3]= useState([])
  const fetchProducts3=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/bestchoices')
    setProducts3(ProductsData.data)

  }
  useEffect(()=>{
    fetchData();
    fetchProducts2();
    fetchProducts3();

  },[])



  return (
    <div className="w-full h-auto flex justify-center mb-4" id="homeShop">
      <div className="w-11/12">
       

        <ProductsSwiper products={products} title={'Popular right now'}/>
        <ProductsSwiper products={products2}  title={'Best sales'}/>
        <ProductsSwiper products={products} title={'Best Choices'} />
      </div>
    </div>
  );
};

export default HomeShop;
