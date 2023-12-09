import React from 'react'
import { TbShoppingBag } from "react-icons/tb";
import { Button, Stack } from '@chakra-ui/react'
import Swiper from './Swipers/AutoSwiper.jsx';


function Home() {
  return (
  
      <div className="flex w-full   pl-12 justify-between ">
        <div className=" w-3/6 mt-8">
          <div className="font-Poppins font-black text-8xl  mb-4 ">
            YOUR STYLE DESERVES <br />
            THE{" "}
            <span className="  bg-gradient-to-r from-purple-800  to-blue-900 text-transparent bg-clip-text ">
              {" "}
              BEST
            </span>
          </div>

          
          <p className=" font-Poppins font-semibold text-lg mt-5  mb-5">
            Elevate your style with our Nike Products, providing top-notch
            fashion solutions to meet your every need. Upgrade your look with us
            today and experience the best in athletic fashion.
          </p>

          <Stack direction="row" spacing={4} align="center">
             <a href="#homeShop">
            <Button
              className="flex gap-1 p-2 mt-6 text-4xl"
              variant="solid"
              bgColor="black"
              color="white"
              colorScheme="#ffffff"
              _hover={{ bgColor: "#4F5054", color: "white" }}
              width={32}
              height={12}
            >
              Shop <TbShoppingBag className="text-xl" />
            </Button> </a>
          </Stack>
        </div>

        <Swiper className=" h-[40rem] bg-pink-100" />
      </div>

  );
}

export default Home