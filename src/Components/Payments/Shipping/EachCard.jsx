import React, { useState } from 'react'
import GetNumberRange from '../../GetNumberRange';
import GetSizeRange from '../../GetSizeRange';
import {  useDispatch } from 'react-redux'
import { updateCartItemQty } from '../../../redux/Slices/Cart/cartSlice';

const EachCard = ({items}) => {
  const dispatch = useDispatch()
    const [qty,setQty]= useState(items?.qty)
    const handleValueChange = (newValue) => {
      setQty(newValue)
      dispatch(updateCartItemQty({ productId: items.productId, qty: newValue }));
    };
    const priceWithoutDollarSign = parseInt(items?.price?.replace(/\D/g, ''), 10);
    const totalPrice = qty * priceWithoutDollarSign;

  return (
    <div className=" flex h-32 w-full border-2 rounded-md  p-1 gap-5">
      <img
        src={items?.image}
        alt=""
        className="w-28 h-28  rounded-md object-cover "
      />

      <div className="flex flex-col justify-evenly">
        <div className="font-bold text-xl">{items.name}</div>

        <div className="  text-base flex justify-start items-center gap-10">
          <div className="flex items-center gap-2">
            <span className="font-medium text-base">Qty: </span>
            <GetNumberRange
              max={10}
              defaultvalue={qty}
              min={1}
              maxw={"160px"}
              onValueChange={handleValueChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-base">Size: </span>
            <GetSizeRange max={44} defaultvalue={40} min={38} maxw={"180px"} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-medium">Color:</span>
            <select
              name=""
              id=""
              className="focus:outline-none border-[1px] rounded-md px-2 py-2 backdrop:bg-red-500"
            >
              <option value="">Blue</option>
              <option value="">White</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full ml-auto font-bold mr-5 text-xl ">
        {" "}
        $ {totalPrice}
      </div>
    </div>
  );
}

export default EachCard