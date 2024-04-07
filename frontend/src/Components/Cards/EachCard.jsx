import React from 'react'
import { useNavigate } from 'react-router-dom'
const EachCard = ({data,type}) => {
    const navigate= useNavigate();
     const navigateToShoe=()=>{
         navigate(`/${type}/${data._id}`)

     }
  return (
    <div className="flex p-2 flex-col w-full font-Poppins cursor-pointer opacity-95 hover:opacity-100" onClick={navigateToShoe} >
                <img
                  src={data.image[0]}
                  alt=""
                  className="h-[30rem] w-full rounded-md object-cover"
                />
                <div className="text-lg font-medium">{data.name}</div>
                <div className="text-secondary-text">{data.category}</div>
                <div className="font-medium w-[30rem] ">{data?.price}</div>
              </div>
  );
}

export default EachCard