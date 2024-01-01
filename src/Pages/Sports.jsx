
import React, { useEffect, useState } from 'react'
import ComingSoon from './ComingSoon'
import axios from 'axios';

const Sports = () => {
  const [products,setProducts]= useState([]);
  const fetchProducts= async()=>{
    const data = await axios.get('http://localhost:3000/bestchoices')
    setProducts(data.data)
  }
  useEffect(()=>{
    fetchProducts

  },[])
  console.log(products)
  
  return (
    <>
    </>
  );
};

export default Sports;
