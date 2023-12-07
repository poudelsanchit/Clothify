import React from 'react'
import { useNavigate } from 'react-router-dom'
const EachCard = ({data}) => {
    const navigate= useNavigate();
    const navigateToShoe=()=>{
        navigate(`/shoes/${data.productId}`)

    }
  return (
    <div
      className="flex flex-col font-Poppins cursor-pointer"
      onClick={navigateToShoe}
    >
      <img
        src={data?.image}
        alt=""
        className="h-[30rem] w-[30rem] rounded-md bg-orange-500"
      />
      <div className=" text-lg font-medium">{data?.product_name}</div>
      <div className="text-secondary-text ">Men's Shoes</div>
      <div className=" font-medium">{data?.price}</div>
    </div>
  );
}

export default EachCard