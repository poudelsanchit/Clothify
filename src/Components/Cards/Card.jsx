import React, { useEffect, useState } from 'react'
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsDot } from "react-icons/bs";
import { Button } from '@chakra-ui/react'
import { CiShoppingCart,CiHeart  } from "react-icons/ci";
import { IconButton } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Reviews from '../ReviewsSection/Reviews';
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart} from '../../redux/Slices/Cart/cartSlice';

const Card = () => {

  const dispatch = useDispatch();
  const id= useParams()
  const [product,setProducts]= useState([])
  const fetchData=async()=>{

    const response = await axios.get('http://localhost:3000/products')
    const products = response.data;
    const foundProduct = products.find(product => product.productId === id.id);
    if (foundProduct) {
      setProducts(foundProduct);
    } else {
      console.log('Product not found');
    }


  }

  useEffect(()=>{
    window.scrollTo({behavior:'smooth',left:0, top:0})
    fetchData();
      


  },[])

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-20  ">
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
            src={product?.image}
            alt=""
            className="w-11/12 bg-orange-400 rounded-md h-[30rem] object-cover"
          />
          <div className=" flex w-11/12 justify-between gap-5 flex-wrap">
            {product?.imgsides?.slice(0,5).map((shoe)=>{
              return  <img
              src={shoe}
              alt=""
              className="h-[5.2rem] w-[5.2rem] rounded-md object-cover "
            />
            })}
           
            <div className="h-[5.2rem] w-[5.2rem] border-[0.1px] border-[#ece9e9] rounded-md flex justify-center items-center text-xs font-medium text-secondary-text cursor-pointer">
              +2 more
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex mt-12 justify-center ">
          <div className="flex flex-col gap-5 w-5/6">
            <div className="flex items-center gap-2">
              <Avatar src="https://i.pinimg.com/564x/1b/99/35/1b993547a8a3d69870d1a5d55a5cccc2.jpg" />
              <div className="font-medium text-xl font-Poppins">Nike</div>
            </div>
            <div className="font-bold font-Poppins text-3xl">
             {product?.name}
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
            <div className="font-bold font-Poppins text-4xl">{product?.price}</div>
            <div className="flex flex-col ">
              <div className="flex font-Poppins text-sm items-center">
                <div>Color</div> <BsDot className="text-[#a6a6a6] text-3xl" />
                <div className="text-secondary-text">Blue</div>
              </div>
              <div className=" flex gap-2 flex-wrap">
                {product?.color?.map((shoeColor) => {
                  return (
                    <img
                      src={shoeColor}
                      alt=""
                      className="h-14 w-12 rounded-md object-cover "
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col ">
              <div className="flex font-Poppins text-sm items-center">
                <div>Size</div> <BsDot className="text-[#a6a6a6] text-3xl" />
                <div className="text-secondary-text">EU Men</div>
              </div>
              <div className=" flex gap-2 flex-wrap  w-5/6">
                {product?.sizes?.map((sizes) => {
                  return (
                    <div className="h-16 w-16 rounded-md  border-2 flex justify-center items-center text-sm font-Poppins font-bold">
                      {sizes}
                    </div>
                  );
                })}
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
                _hover={{ bgColor: "#4F5054", color: "white" }} onClick={()=>dispatch(addItemToCart(product))}
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
            <div className='flex gap-2 items-center'> <BsTruck /> Free delivery on orders over $30.0</div>
          </div>
        </div>
        
      </div>
      <Reviews/>
    </div>
  );
}

export default Card