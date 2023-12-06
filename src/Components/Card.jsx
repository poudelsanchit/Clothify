import React from 'react'
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsDot } from "react-icons/bs";
import Jordan from '../assets/jordan.png'
import Jordan1 from '../assets/jordan.png'
import Jordan2 from '../assets/Jordan2.png'
import Jordan3 from '../assets/Jordan3.png'
import Jordan4 from '../assets/Jordan4.png'
import whiteJordan from '../assets/whiteJordan.png'

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
            srcset=""
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
              src={Jordan2}
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
        <div className=" w-1/2  mt-12">
          <div className="flex items-center gap-2">
            <Avatar    src="https://i.pinimg.com/564x/1b/99/35/1b993547a8a3d69870d1a5d55a5cccc2.jpg" />
            <div className='font-medium text-xl font-Poppins'>Nike</div>
          </div>
          <div>Air Jordan 1 Retro High OG</div>
          <div className='flex gap-2 items-center '>
           <FaStar/>    
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
              42 Reviews

          </div>
          <div>$180</div>
          <div className='flex items-center'>
            Color <BsDot/> White
          </div>
          <div className=' flex gap-2'>
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
      </div>
    </div>
  );
}

export default Card