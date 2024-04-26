import React, { useEffect, useState } from "react";
import Offer from "../Components/Swipers/Offer";
import Nissbody from "../Components/NisseProduct/Nissbody";
import ProductsSwiper from "../Components/Swipers/ProductsSwiper";
import axios from "axios";
import Loader from "../Components/Loaders/Loader";

const Sports = () => {
  const [data,setData]= useState([])
  const fetchMenData = async()=>{
    const res = await axios.get('https://clothify-api.onrender.com/items/type/sports')
     setData(res.data)
  }
  useEffect(()=>{
    fetchMenData()
  },[])
 
  return (
    <>
    {
       data.length ==0 ? <Loader/> :
    <div className=" p-0 flex flex-col items-start  w-full min-h-screen">
      {/* <Offer />
      <Nissbody /> */}
      <div className="w-full h-auto flex justify-center mb-4" id="homeShop">
      <div className="w-11/12">
        {
          data.length!==0 ? <>
            <ProductsSwiper products={data} title={'Cleats'} type={'sports'}/>
        <ProductsSwiper products={data} title={'Sports'} type={'sports'}/>
          </> : <h1>No Products Available</h1>
        }
      
        </div>
        </div>
    </div>
}
</>
  );
};

export default Sports;
