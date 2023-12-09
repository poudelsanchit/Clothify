import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import shoedata from './shoedata'; 
import axios from 'axios';
import EachCard from './EachCard';
import Swiper from '../Components/Swiper';

const HomeShop = () => {
  const [products,setProducts]= useState([])
  const fetchData=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/products')
    setProducts(ProductsData.data)

  }
  const [products2,setProducts2]= useState([])
  const fetchProducts2=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/products2')
    setProducts2(ProductsData.data)

  }
  const [products3,setProducts3]= useState([])
  const fetchProducts3=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/products3')
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
       

        <Swiper products={products} title={'Popular right now'}/>
        <Swiper products={products2}  title={'Best sales'}/>
      </div>
    </div>
  );
};

export default HomeShop;
