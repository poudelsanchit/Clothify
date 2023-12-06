import React from 'react'
import { TbShoppingBag } from "react-icons/tb";
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import Swiper from '../Components/SwiperTool.jsx';


function Home() {
  return (
   <>
   <div className="hero-content  flex w-full   pl-12 justify-between bg-indigo-300">
         <div className=' w-3/6 mt-8'> 
                    <h1 className='font-Poppins font-black text-7xl  mb-4 '>YOUR STYLE DESERVES THE BEST</h1>
                <p className="title font-Poppins font-bold text-1xl mt-8 mb-4">
                Elevate your style with our Nike Products, providing top-notch fashion solutions to meet your every need. Upgrade your look with us today and experience the best in athletic fashion.
                </p>
        
                <Stack direction='row' spacing={4} align='center'>
  <Button className='flex gap-1 p-2 mt-6 text-4xl'  variant='solid'
  bgColor="black"  
  color="white"
  colorScheme="#ffffff"
  _hover={{ bgColor: '#4F5054', color: 'white' }}
  
  
  >
    Shop <TbShoppingBag  />
  </Button>
  {/* <Button colorScheme='gray' variant='outline'>
    Button
  </Button> */}
  
</Stack>
  
                {/* <div className="shopping">
                    <p>Also Available On</p>
        
                    <div className="brand-icons">
                    <img width={80} height="10px" src="https://benkoorthodontics.com/wp-content/uploads/2018/12/2000px-Amazon_logo_plain.svg.png" alt="flipkart-logo" />
                    </div>
                </div> */}
                </div>
           
                <Swiper className=" h-[40rem] bg-pink-100" />    
         
        </div>
        

   </>
  )
}

export default Home