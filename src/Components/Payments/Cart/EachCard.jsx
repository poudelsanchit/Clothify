import React, { useEffect, useState } from 'react'
import GetNumberRange from '../../Inputs/GetNumberRange';
import GetSizeRange from '../../Inputs/GetSizeRange';
import {  useDispatch } from 'react-redux'
import { updateCartItemColor, updateCartItemQty, updateCartItemSize } from '../../../redux/Slices/Cart/cartSlice';
import {SwiperImage1,SwiperImage2,SwiperImage3,SwiperImage4} from '../../../assets/index'

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


  return (
    <div className=" flex h-32 w-full border-2 rounded-md  p-1 gap-5 ">
      <img
        src={items?.image}
        // src={SwiperImage1}
        alt=""
        className="w-28 h-28  rounded-md object-cover "
      />

      <div className="flex flex-col justify-evenly w-full">
        <div className="font-bold sm:text-xl text-sm">{items.name}</div>

        <div className="  text-base flex sm:flex-row flex-col justify-start  sm:gap-10 gap-2 text-secondary-text">
          <div className='flex gap-5  sm:flex-row '>
          <div className="flex items-center gap-2">
            <span className="font-medium  sm:text-base text-xs">Qty: </span>
            <GetNumberRange
              defaultvalue={qty}
              min={1} 
              onValueChange={handleQtyChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium sm:text-base text-xs">Size: </span>
            <GetSizeRange
              max={44}
              defaultvalue={size}
              min={1}
              maxw={"180px"}
              onValueChange={handleSizeChange}
            />
          </div>

          </div>
          
          <div className="flex gap-2 items-center">
            <span className=" sm:text-base text-xs font-medium">Color:</span>
            <select
              onChange={onOptionChangeHandler}
              value={color}
              className='text-xs sm:text-base'
            >
              {items?.color?.map((option, index) => {
                return (
                  <option key={index} value={option.color} >
                    {option.color}
                  </option>
                );
              })}
            </select>

          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center h-full ml-auto font-bold mr-5 text-xl ">
        {" "}
        $ {totalPrice}
      </div> */}
    </div>
  );
}

export default EachCard