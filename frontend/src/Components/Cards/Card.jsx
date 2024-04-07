import React, { forwardRef, useEffect, useState } from 'react'
import axios from 'axios';
import { Avatar, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack,IconButton ,useToast,Button } from '@chakra-ui/react';
import { Link ,useParams} from 'react-router-dom';
import { CiShoppingCart,CiHeart  } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { BsDot,BsTruck } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart} from '../../redux/Slices/Cart/cartSlice';
import { addToFavorites, removeFromFavorites} from '../../redux/Slices/favorites/favorites'
import Reviews from '../ReviewsSection/Reviews';

const Card = () => {
  const {type} = useParams();
  const id= useParams();
  const toast = useToast()
  const cartItems = useSelector(state=>state.cart.items)
  const favoriteItems = useSelector(state=>state.favorites.favorites)
  const cartItemsLen = cartItems.length
  const dispatch = useDispatch();
  const [product,setProducts]= useState([])

  const fetchData=async()=>{
    const response = await axios.get(`http://localhost:5000/items/type/${type}`)
    const products = response.data;
    const foundProduct = products.find(product => product._id === id.id);
    setProducts(foundProduct);
    setSelectedSize(foundProduct.sizes[0]);
    setSelectedColor(foundProduct.colors[0]?.color);
  }

  const [defaultSize, setSelectedSize] = useState(0);
  const [defaultColor, setSelectedColor] = useState('');

  const handleAddToCart=()=>{
    console.log(product)
  
    dispatch(addItemToCart({...product, defaultSize, defaultColor, qty: 1}));
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
  },[id])

  const isProductInFavorites = favoriteItems.some(item => item._id === id.id);
  console.log(isProductInFavorites)
  const [isFavourite, setIsFavourite] = useState(isProductInFavorites);

  const handleAddToFavorites = ()=>{
    setIsFavourite(prev=>!prev);
    if (!isFavourite) {
      dispatch(addToFavorites({ ...product,type:type  }));
      toast({
        title: "Product added to Wishlists.",
        status: "success",
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
    }
    else
    {
      dispatch(removeFromFavorites({...product}))
      toast({
        title: "Product removed to Wishlists.",
        status: "error",
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
    }
  }

  return (
    <div className="flex flex-col w-full h-auto justify-center items-center gap-20">
      <div className="w-11/12 h-full flex sm:flex-row flex-col">
        <div className="w-full sm:w-1/2 flex flex-col gap-2 mt-2">
          <Breadcrumb
            spacing="2px"
            separator={<BsDot className="text-3xl text-[#a6a6a6]" />}
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
          <div className="flex items-center gap-2 sm:hidden">
            <Avatar src="https://i.pinimg.com/564x/1b/99/35/1b993547a8a3d69870d1a5d55a5cccc2.jpg" />
            <div className="font-medium text-xl font-Poppins">Nike</div>
          </div>
          <div className="font-bold font-Poppins text-2xl sm:hidden block">
            {product?.name}
          </div>
          <div className="flex gap-2 items-center sm:hidden">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
            <div className="text-secondary-text font-Poppins text-xs">
              69 Reviews
            </div>
          </div>
          <div className="font-bold font-Poppins text-4xl sm:hidden block">
            {product?.price}
          </div>
          <img
            src={product?.image && product.image.length > 0 ? product.image[0] : ""}
            alt=""
            className="w-full sm:w-11/12 bg-orange-400 rounded-md h-[30rem] object-cover"
          />
          <div className="flex w-11/12 justify-between gap-2 sm:gap-5 flex-wrap">
            {product?.image?.slice(0,5).map((data, index) => (
              <img
                key={index}
                src={data}
                alt=""
                className="h-[5.2rem] w-[5.2rem] rounded-md object-cover"
              />
            ))}
            <div className="mr-auto h-[5.2rem] w-[5.2rem] border-[0.1px] border-[#ece9e9] rounded-md flex justify-center items-center text-xs font-medium text-secondary-text cursor-pointer">
              +2 more
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex mt-12 justify-center">
          <div className="flex flex-col gap-5 sm:w-full w-full">
            <div className="sm:flex items-center gap-2 hidden">
              <Avatar src="https://i.pinimg.com/564x/1b/99/35/1b993547a8a3d69870d1a5d55a5cccc2.jpg" />
              <div className="font-medium text-xl font-Poppins">Nike</div>
            </div>
            <div className="font-bold font-Poppins text-3xl hidden sm:block">
              {product?.name}
            </div>
            <div className="sm:flex gap-2 items-center hidden">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-300" />
              <div className="text-secondary-text font-Poppins text-xs">
                69 Reviews
              </div>
            </div>
            <div className="font-bold font-Poppins text-4xl hidden sm:block">
              ${product?.price}
            </div>
            <div className="flex flex-col">
              <div className="flex font-Poppins text-sm items-center">
                <div>Color</div> <BsDot className="text-[#a6a6a6] text-3xl" />
                <div className="text-secondary-text">{defaultColor}</div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product?.colors?.map((shoeColor, index) => (
                  <div
                    key={index}
                    className={defaultColor===shoeColor.color ? 'border-[1.7px] border-[#433b3b] rounded-lg h-16 w-16' : 'rounded-lg h-16 w-16'}
                  >
                    <img
                      src={shoeColor.url}
                      alt=""
                      className="object-cover h-full w-full rounded-md cursor-pointer"
                      onClick={() => handleSelectColor(shoeColor.color)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex font-Poppins text-sm items-center">
                <div>Size</div> <BsDot className="text-[#a6a6a6] text-3xl" />
                <div className="text-secondary-text">EU Men</div>
              </div>
              <div className="flex gap-2 flex-wrap w-5/6">
                {product?.sizes?.map((sizes) => (
                  <div
                    key={sizes}
                    className={defaultSize===sizes ? "h-16 w-16 rounded-md border-2 border-[#000000] cursor-pointer flex justify-center items-center text-sm font-Poppins font-bold" : "cursor-pointer h-16 w-16 rounded-md border-2 flex justify-center items-center text-sm font-Poppins font-bold"}
                    onClick={() => handleSizeSelection(sizes)}
                  >
                    {sizes}
                  </div>
                ))}
              </div>
            </div>
            <Stack direction="row" spacing={4} align="center">
              <Button
                className="flex gap-1 text-4xl"
                variant="solid"
                bgColor="black"
                color="white"
                colorScheme="#ffffff"
                width={96}
                height={12}
                _hover={{ bgColor: "#4F5054", color: "white" }}
                onClick={handleAddToCart}
              >
                <CiShoppingCart />
                Add to cart
              </Button>
              <IconButton
                height={12}
                width={12}
                colorScheme={isFavourite ? "blue" : "blue"}
                aria-label="Search database"
                icon={isFavourite ? <FaHeart className="text-2xl text-red-200" /> : <CiHeart className="text-3xl" />}
                onClick={handleAddToFavorites}
              />
            </Stack>
            <div className='flex gap-2 items-center'> <BsTruck /> Free delivery on orders over $30.0</div>
          </div>
        </div>
      </div>
      {/* <Reviews data={product.reviews} /> */}
    </div>
  );
}

export default Card;
