import React, { useState } from 'react'
import {
 
    Button,
    HStack,
    Input,
    useNumberInput,
  } from '@chakra-ui/react'

const GetNumberRange = ({max,defaultvalue,min,maxw,onValueChange }) => {
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
        if (onValueChange) {
            onValueChange(newValue);
          }
      },
    });
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  console.log(input)
  console.log(currentValue)

  return (
    <HStack maxW={maxw}  >
      <Button {...dec}  onChange={()=>setQty({"name": valueAsNumber})}>-</Button>
      <Input {...input} />
      <Button {...inc}  onChange={()=>setQty( value)}>+</Button>
    </HStack>
  );
}

export default GetNumberRange