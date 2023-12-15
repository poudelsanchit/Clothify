import React, { useEffect, useState } from 'react'
import GetNumberRange from '../../GetNumberRange';
import GetSizeRange from '../../GetSizeRange';
import {  useDispatch } from 'react-redux'
import { updateCartItemColor, updateCartItemQty, updateCartItemSize } from '../../../redux/Slices/Cart/cartSlice';

const EachCard = ({items}) => {

  const dispatch = useDispatch()
    const [qty,setQty]= useState(items?.qty)
    const [size,setSize]= useState(items?.defaultSize)
    const [color,setColor]= useState(items?.defaultColor)


    const handleQtyChange = (newValue) => {
      setQty(newValue)
      dispatch(updateCartItemQty({ productId: items.productId, qty: newValue }));
    };
    const handleSizeChange=(newValue)=>{
      console.log(newValue)
      dispatch(updateCartItemSize({ productId: items.productId, size: newValue }));

    }
     
    const priceWithoutDollarSign = parseInt(items?.price?.replace(/\D/g, ''), 10);
    const totalPrice = qty * priceWithoutDollarSign;
    const options = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
  ];
  
const onOptionChangeHandler=(event)=>{
  const newColor = event.target.value;

  // Update local state
  setColor(newColor);

  // Dispatch action to update Redux state
  dispatch(updateCartItemColor({ productId: items.productId, color: newColor }));
};

console.log(color)

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
              onValueChange={handleQtyChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-base">Size: </span>
            <GetSizeRange
              max={44}
              defaultvalue={size}
              min={1}
              maxw={"180px"}
              onValueChange={handleSizeChange}
            />
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-medium">Color:</span>
            <select
              onChange={onOptionChangeHandler}
              value={color}
            >
              {items?.color?.map((option, index) => {
                return (
                  <option key={index} value={option.color}>
                    {option.color}
                  </option>
                );
              })}
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