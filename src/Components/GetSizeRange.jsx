import React, { useState } from 'react'
import {
 
    Button,
    HStack,
    Input,
    useNumberInput,
  } from '@chakra-ui/react'
const GetSizeRange = ({max,defaultvalue,min,maxw}) => {
    const [currentValue, setCurrentValue] = useState(defaultvalue);

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps,value} =
    useNumberInput({
      step: 1,
      defaultValue: defaultvalue,
      min: min,
      max: max,
      onChange: (valueString) => {
        // Parse the valueString to a number if needed
        const newValue = parseInt(valueString, 10);
        setCurrentValue(newValue);
      },
    });
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  console.log(currentValue)

  return (
    <HStack maxW={maxw}  >
      <Button {...dec}  onChange={()=>setQty({"name": valueAsNumber})}>-</Button>
      <Input {...input} />
      <Button {...inc}  onChange={()=>setQty( value)}>+</Button>
    </HStack>
  );
}

export default GetSizeRange