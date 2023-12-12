import React, { useState } from 'react'
import {
    Box,
    Progress,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Text,
    useSteps,
  } from '@chakra-ui/react'
  const steps = [
    { title: 'Shipping', description: 'Contact Info' },
    { title: 'Billing', description: 'Date & Time' },
  ]
const Steppers = ({handleToggle}) => 
{
  const[tooglePage,setTogglePage] = useState(1);

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <Stepper size='md' index={activeStep}>
    {steps.map((step, index) => (
      <Step key={index}>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>

        <Box flexShrink='0'>
          <div  className='font-Poppins text-lg'>{step.title}</div>
        </Box>

        <StepSeparator />
      </Step>
    ))}
  </Stepper>
  );
}

export default Steppers