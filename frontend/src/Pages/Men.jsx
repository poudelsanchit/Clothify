import React, { useEffect, useState } from "react";
import Offer from "../Components/Swipers/Offer";
import Nissbody from "../Components/NisseProduct/Nissbody";
import ProductsSwiper from "../Components/Swipers/ProductsSwiper";
import axios from "axios";

const Men = () => {
  const [data,setData]= useState([])
  const fetchMenData = async()=>{
    const res = await axios.get('http://localhost:5000/items/type/mens')
     setData(res.data)
  }

  useEffect(()=>{
    fetchMenData()

  },[])
 
  return (
    <div className=" p-0 flex flex-col items-start  w-full">
      <Offer />
      {/* <Nissbody
        title={"Men"}
        imgurl={
          "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/bf6ccafa-64c3-4c0f-b6e2-084f4e27af2f/men-s-shoes-clothing-accessories.jpg"
        }
        subtitle1={"THE RESOLUTION STARTER PACK"}
        subtitle2={
          "Get after your fitness goals with a curated collection of comfy kicks,lightweight tops, and more supportive styles."
        }
      /> */}
      <div className="w-full h-auto flex justify-center mb-4" id="homeShop">
        <div className="w-11/12">
          {
            data.length !==0?           <ProductsSwiper products={data} title={"Men"} type={"mens"} /> : <h1>No products Available..</h1>

          }
        </div>
      </div>
    </div>
    
  );
};

export default Men;
