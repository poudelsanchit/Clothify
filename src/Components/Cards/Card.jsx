import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Avatar, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack,IconButton ,useToast,Button } from '@chakra-ui/react';
import { Link ,useParams} from 'react-router-dom';
import { CiShoppingCart,CiHeart  } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { BsDot,BsTruck } from "react-icons/bs";
import Reviews from '../ReviewsSection/Reviews';

import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart} from '../../redux/Slices/Cart/cartSlice';

const Card = () => {
  const toast = useToast()
  const cartItems = useSelector(state=>state.cart.items)
  const cartItemsLen = cartItems.length
  const dispatch = useDispatch();
  const id= useParams();
  const [isFavourite,setIsFavourite] = useState(false);
  const [product,setProducts]= useState([])
  const fetchData=async()=>{

    const response = await axios.get('http://localhost:3000/products')
    const products = response.data;
    const foundProduct = products.find(product => product.productId === id.id);
    setSelectedSize(foundProduct.sizes[0]);
    setSelectedColor(foundProduct.color[0].color)

    if (foundProduct) {
      setProducts(foundProduct);
    } else {
    }


  }
  const [defaultSize, setSelectedSize] = useState(0);
  const [defaultColor, setSelectedColor] = useState(0);

const handleAddToCart=()=>{
  console.log(defaultColor)
  dispatch(addItemToCart({ ...product, defaultSize, defaultColor }));
  toast({
    title: "Product added to cart.",
    status: "success",
    duration: 2000,
    position: "top-right",
    isClosable: true,
  });
}
const handleSizeSelection = (size) => {
  setSelectedSize(size);
};
const handleSelectColor=(color)=>{
  setSelectedColor(color);
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
                <div className="text-secondary-text">{defaultColor}</div>
              </div>
              <div className=" flex gap-2 flex-wrap">
                {product?.color?.map((shoeColor) => {
                  return (
                    <div className={defaultColor===shoeColor.color? 'border-[1.7px] border-[#433b3b] rounded-lg h-16 w-16 ' : 'rounded-lg h-16 w-16 ' }>
                      {" "}
                      <img
                        src={shoeColor.url}
                        alt=""
                        className='object-cover h-full w-full rounded-md  cursor-pointer '
                        onClick={() => handleSelectColor(shoeColor.color)}
                      />
                    </div>
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
                    <div
                      key={sizes} 
                      className={defaultSize===sizes ? "h-16 w-16 rounded-md  border-2 border-[#000000] cursor-pointer  flex justify-center items-center text-sm font-Poppins font-bold" : " cursor-pointer h-16 w-16 rounded-md  border-2 flex justify-center items-center text-sm font-Poppins font-bold"}
                      onClick={() => handleSizeSelection(sizes)}
                    >
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
                _hover={{ bgColor: "#4F5054", color: "white" }} onClick={handleAddToCart}
              >
                <CiShoppingCart />
                Add to cart
              </Button>
              <IconButton
                height={12}
                width={12}
                colorScheme="blue"
                aria-label="Search database"
                icon={isFavourite? <FaHeart className="text-2xl text-red-400" /> : <CiHeart className="text-2xl "/>}
                onClick={()=>setIsFavourite(prev=>!prev)}
              />
            </Stack>
            <div className='flex gap-2 items-center'> <BsTruck /> Free delivery on orders over $30.0</div>
          </div>
        </div>
        
      </div>
      <Reviews data={product.reviews} />
    </div>
  );
}

export default Card