import React, { useEffect, useState } from 'react'
import {Jordan1,WhiteJordan,NikeDunk} from '../assets/index'
import { nanoid } from 'nanoid'
import EachCard from './EachCard'
import axios from 'axios'
const HomeShop = () => {
  const [products,setProducts]= useState([]);
  const fetchProducts=async()=>{
    const data= await axios.get('http://localhost:3000/products')
    setProducts(data.data)
  }
  useEffect(()=>{
    fetchProducts()

  },[])
 

  const data = [
    {
      img: Jordan1,
      price: "$180",
      name: "Air Jordan 1 Retro High OG",
      id: nanoid(),
    },
    {
      img: WhiteJordan,
      price: "$145",
      name: "Nike Air Force 1 Mid By You",
      id: nanoid(),
    },
    {
      img: NikeDunk,
      price: "$150",
      name: "Nike Dunk Low",
      id: nanoid(),
    },
  ];
  return (
    <div className="w-screen h-auto flex justify-center" id="homeShop">
      <div className="w-11/12 ">
        <div className="text-[1.7rem] font-medium font-Poppins mb-4">
          {" "}
          Popular Right Now
        </div>
        <div className="w-full  flex gap-5">
          {products.map((data) => {
            return (
              <EachCard data={data} key={data.id}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeShop