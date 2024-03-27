import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsSwiper from "./Swipers/ProductsSwiper";

const HomeShop = () => {

  const [popular,setProducts]= useState([])
  const fetchData=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/popular')
    setProducts(ProductsData.data)
  }
  const [bestsales,setProducts2]= useState([])
  const fetchProducts2=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/bestsales')
    setProducts2(ProductsData.data)

  }
  const [bestchoices,setProducts3]= useState([])
  const fetchProducts3=async()=>{
    const ProductsData = await axios.get('http://localhost:3000/bestchoices')
    setProducts3(ProductsData.data)

  }
  useEffect(()=>{
    fetchData();
    fetchProducts2();
    fetchProducts3();
  }, []);

  return (
    <div className="w-full h-auto flex justify-center mb-4" id="homeShop">
      <div className="w-11/12">
        {popular.length !== 0 ? (
          <ProductsSwiper
            products={popular}
            title={"Popular right now"}
            type={"popular"}
          />
        ) : null}
        {bestsales.length !== 0 ? (
          <ProductsSwiper
            products={bestsales}
            title={"Best sales"}
            type={"bestsales"}
          />
        ) : null}

        {bestchoices.length !== 0 ? (
          <ProductsSwiper
            products={bestchoices}
            title={"Best Choices"}
            type={"bestchoices"}
          />
        ) : null}
        {
          (popular.length ===0 && bestsales.length ===0 && bestchoices.length===0) ?  <h1>No products available</h1> : null
        }
      </div>
    </div>
  );
};

export default HomeShop;
