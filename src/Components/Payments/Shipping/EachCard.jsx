import React, { useState } from 'react'
import GetNumberRange from '../../GetNumberRange';
import GetSizeRange from '../../GetSizeRange';
const EachCard = () => {
    const [qty,setQty]= useState(1)
    const handleValueChange = (newValue) => {
      setQty(newValue)
    };
  return (
    <div className=" flex h-32 w-8/12 border-2 rounded-md  p-1 gap-5">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/21692e08-697b-4bda-9b9d-fea249a11439/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png"
            alt=""
            className="w-28 h-28  rounded-md object-cover "
          />

          <div className="flex flex-col justify-evenly">
            <div className="font-bold text-xl">
              Air Jordan 1 High OG Royal Reimagined
            </div>

            <div className="  text-base flex justify-start items-center gap-10">
               <div className='flex items-center gap-2'>
                <span className="font-medium text-base">Qty: </span>
               <GetNumberRange max={10} defaultvalue={1} min={1} maxw={'160px'} onValueChange={handleValueChange}/>
              </div>
              <div className='flex items-center gap-2'>
                <span className="font-medium text-base">Size: </span>
               <GetSizeRange max={44} defaultvalue={40} min={38}  maxw={'180px'}/>
              </div>
              <div className='flex gap-2 items-center'>
                <span className="font-medium">Color:</span> 
                <select name="" id="" className='focus:outline-none border-[1px] rounded-md px-2 py-2 backdrop:bg-red-500'>
                  <option value="">Blue</option>
                  <option value="">White</option>

                </select>
                
                
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full ml-auto font-bold mr-5 text-xl ">
            {" "}
           {`${qty*150}`} $
          </div>
        </div>
  )
}

export default EachCard