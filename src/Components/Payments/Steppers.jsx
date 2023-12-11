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
    useSteps,
  } from '@chakra-ui/react'

  import React from 'react'
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Third', description: 'Select Rooms' },
  ]
  
  const Steppers = () => {
   
    const { activeStep, setActiveStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    const activeStepText = steps[activeStep].description
  
    const max = steps.length - 1
    const progressPercent = (activeStep / max) * 100
    return (
      <Box position='relative' className='w-96'>
      <Stepper size='sm' index={activeStep} gap='0'>
        {steps.map((step, index) => (
          <Step key={index} gap='0'>
            <StepIndicator bg='white'>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position='absolute'
        height='3px'
        width='full'
        top='10px'
        zIndex={-1}
      />
    </Box>
    )
  }
  
  export default Steppers