import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Components/Cards/Card';
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
    <div>

<Card/>

    </div>
   
  )
}

export default New