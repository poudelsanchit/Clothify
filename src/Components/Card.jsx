import React from 'react'
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsDot } from "react-icons/bs";
import Jordan from '../assets/jordan.png'
import Jordan1 from '../assets/jordan.png'
import Jordan3 from '../assets/Jordan3.png'
import Jordan4 from '../assets/Jordan4.png'
import whiteJordan from '../assets/whiteJordan.png'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CiShoppingCart,CiHeart  } from "react-icons/ci";

import { IconButton } from '@chakra-ui/react'



import { Badge } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex w-full h-full justify-center  ">
      <div className="w-11/12 h-full flex ">
        <div className=" w-1/2  flex flex-col gap-2 mt-2">
          <Breadcrumb
            spacing="2px"
            separator={<BsDot className="text-3xl text-[#a6a6a6] " />}
            className="text-secondary-text font-Poppins text-sm"
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/men">
                Men
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} to="/men/product">
                Product
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <img
            src={Jordan}
            alt=""
            className="w-11/12 bg-orange-400 rounded-md h-[30rem] object-cover"
          />
          <div className=" flex w-11/12 justify-between gap-5">
            <img
              src={Jordan}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <img
              src={Jordan1}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <img
              src={Jordan1}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <img
              src={Jordan3}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <img
              src={Jordan4}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <div className="h-[5.2rem] w-[5.2rem] border-[0.1px] border-[#ece9e9] rounded-md flex justify-center items-center text-xs font-medium text-secondary-text cursor-pointer">
              +2 more
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex mt-12 justify-center ">
          <div className='flex flex-col gap-5 w-5/6'>
          <div className="flex items-center gap-2">
            <Avatar src="https://i.pinimg.com/564x/1b/99/35/1b993547a8a3d69870d1a5d55a5cccc2.jpg" />
            <div className="font-medium text-xl font-Poppins">Nike</div>
          </div>
          <div className="font-bold font-Poppins text-3xl">
            Air Jordan 1 Retro High OG
          </div>
          <div className="flex gap-2 items-center ">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
            <div className="text-secondary-text font-Poppins text-xs">
              {" "}
              69 Reviews
            </div>
          </div>
          <div className="font-bold font-Poppins text-4xl">$180</div>
          <div className="flex flex-col ">
            <div className='flex font-Poppins text-sm items-center'>
              
              <div>Color</div> <BsDot className="text-[#a6a6a6] text-3xl" />
              <div className="text-secondary-text">White</div>
            </div>
            <div className=" flex gap-2">
            <img
              src={Jordan1}
              alt=""
              className="h-14 w-12 rounded-md object-cover "
            />
            <img
              src={whiteJordan}
              alt=""
              className="h-14 w-12 rounded-md object-cover "
            />
          </div>

          </div>
        
          <div className="flex flex-col ">
            <div className='flex font-Poppins text-sm items-center'>
              
              <div>Size</div> <BsDot className="text-[#a6a6a6] text-3xl" />
              <div className="text-secondary-text">EU Men</div>
            </div>
            <div className=" flex gap-2">
            <img
              src={Jordan1}
              alt=""
              className="h-16 w-14 rounded-md object-cover "
            />
            <img
              src={whiteJordan}
              alt=""
              className="h-16 w-14 rounded-md object-cover "
            />
          </div>

          </div>
          <Stack direction="row" spacing={4} align="center">
            <Button
              className="flex gap-1  text-4xl"
              variant="solid"
              bgColor="black"
              color="white"
              colorScheme="#ffffff"
              width={96}
              height={12}
              _hover={{ bgColor: "#4F5054", color: "white" }}
            >
              <CiShoppingCart />
              Add to cart
            </Button>
            <IconButton
              height={12}
              width={12}
              colorScheme="blue"
              aria-label="Search database"
              icon={<CiHeart className="text-2xl" />}
            />
          </Stack>
          <div>Free delivery on orders over $30.0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card