import React, { useEffect, useState } from 'react'
import axios from 'axios';

const New = () => {
  const [data,setData]= useState([])
  const fetchData=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/products')
    setData(ProductsData.data)

  }
  useEffect(()=>{
    fetchData();
      


  },[])
  console.log(data)

  return (
    <div>New</div>
  )
}

export default New