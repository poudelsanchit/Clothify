import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsDot } from "react-icons/bs";
import Jordan from '../assets/jordan.png'
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
              src={Jordan}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <img
              src={Jordan}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <img
              src={Jordan}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <img
              src={Jordan}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            <div className="h-[5.2rem] w-[5.2rem] border-[0.1px] border-[#ece9e9] rounded-md flex justify-center items-center text-xs font-medium text-secondary-text cursor-pointer">
              +2 more
            </div>
          </div>
        </div>
        <div className=" w-1/2"></div>
      </div>
    </div>
  );
}

export default Card