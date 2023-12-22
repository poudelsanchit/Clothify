import React, { useState } from 'react'
import {
 
    Button,
    HStack,
    Input,
    useNumberInput,
  } from '@chakra-ui/react'

const GetNumberRange = ({defaultvalue,min,onValueChange }) => {
    const [currentValue, setCurrentValue] = useState(defaultvalue);

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps,value} =
    useNumberInput({
      step: 1,
      defaultValue: defaultvalue,
      min: min,
      max: 999,
      onChange: (valueString) => {
        // Parse the valueString to a number if needed
        const newValue = parseInt(valueString, 10);
        setCurrentValue(newValue);
        if (onValueChange) {
            onValueChange(newValue);
          }
      },
    });
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <div className='flex justify-evenly items-centerg gap-1'  >
      <div className='sm:w-10 w-5 h-5  sm:h-10  bg-[#edf2f7] flex justify-center items-center rounded-sm' {...dec}  onChange={()=>setQty({"name": valueAsNumber})}>-</div>
      <input type="number"  className='border-2 rounded-sm sm:w-10 w-10 h-5  sm:h-10 focus:outline-none pl-2' {...input}/>
      <div className='sm:w-10 w-5 h-5  sm:h-10  bg-[#edf2f7] flex justify-center items-center rounded-sm' {...inc}  onChange={()=>setQty( value)}>+</div>

    </div>
  );
}

export default GetNumberRange