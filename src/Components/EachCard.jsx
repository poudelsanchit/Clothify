import React from 'react'
import { useNavigate } from 'react-router-dom'
const EachCard = ({data}) => {
    const navigate= useNavigate();
     const navigateToShoe=()=>{
         navigate(`/shoes/${data.productId}`)

     }
  return (
    <div className="flex flex-col font-Poppins" onClick={navigateToShoe}>
                <img
                  src={data.image}
                  alt=""
                  className="h-[30rem] w-[30rem] rounded-md object-cover bg-orange-500"
                />
                <div className="text-lg font-medium">{data.name}</div>
                <div className="text-secondary-text">{data.category}</div>
                <div className="font-medium w-[30rem] ">{data?.price}</div>
              </div>
  );
}

export default EachCard