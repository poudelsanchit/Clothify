import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import { CiCreditCard1, CiShoppingCart } from "react-icons/ci";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Input } from '@chakra-ui/react'
import { IoIosArrowBack } from "react-icons/io";
import { BsDot } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { TfiWorld } from "react-icons/tfi";
import { IoWalletOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { getSumOfProducts } from '../../../redux/Slices/Cart/cartSlice';
import { useAuth0 } from '@auth0/auth0-react';

const Billing = ({handleToggle}) => {
  const { user, isAuthenticated, isLoading  } = useAuth0();
  const navigate = useNavigate();
  const products= useSelector(state=> state.cart.items)
  const total= useSelector(getSumOfProducts)
  const [toggleState, setToggleState] = useState(1);
  const handleBack=()=>{
   navigate(-1)
  }
  
  return (
    <div className='flex flex-col w-full items-center justify-center'>

    <div className=" flex flex-col gap-4 w-full justify-center items-center ">
    <div className='w-11/12'>
          <div className=" flex items-center gap-5">
            <IoIosArrowBack
              className="bg-[#3182ce] cursor-pointer text-white text-3xl rounded-md"
              onClick={handleBack}
            />
            <div className=" font-bold lg:text-4xl text-2xl">Checkout</div>
          </div>
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
              <BreadcrumbLink as={Link} to="/cart">
                Cart
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} to="/checkout">
                Checkout
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          </div>
      
      <div className="flex lg:flex-row flex-row gap-4 justify-between w-11/12 ">
        <div className="flex flex-col  lg:gap-4 gap-2  lg:w-7/12  ">
          <div className=" grid gap-4">
            <div className=" lg:py-10 lg:pl-8 py-2 pl-2 flex items-center gap-8 h-full border border-gray-300 rounded-md    ">
              <div className=" border rounded-full px-2 items-center justify-center font-bold">
                a
              </div>
              <div className="flex w-full ">
                <div className="flex flex-col ">
                  <div className="flex  gap-3  lg:text-sm text-xs font-medium  text-gray-600">
                    LOGIN <FaCheck />
                  </div>
                  <div className=" flex flex-col text-black lg:text-sm text-xs font-medium ">
                   {user?.name} <span>{user?.phone_number}</span>
                  </div>
                </div>
                <Button
                  className="flex gap-1  text-4xl ml-auto lg:mr-10 mr-2"
                  variant="solid"
                  bgColor="black"
                  color="white"
                  colorScheme="#ffffff"
                  width={28}
                  height={10}
                  _hover={{ bgColor: "#4F5054", color: "white" }}
                >
                  Change
                </Button>
               
              </div>
            </div>
            <div className=" lg:py-10 lg:pl-8 py-2 pl-2 flex items-center gap-8 h-full border border-gray-300 rounded-md    ">
              <div className=" border rounded-full px-2 items-center justify-center font-bold">
                a
              </div>
              <div className="flex w-full ">
                <div className="flex flex-col ">
                  <div className="flex  gap-3  lg:text-sm text-xs font-medium  text-gray-600">
                  Shipping Address <FaCheck />
                  </div>
                  <div className=" flex flex-col text-black lg:text-sm text-xs font-medium ">
                    <div>Pokhara 30 Shishuwa, Kaski 33800</div>
                  </div>
                </div>
                <Button
                  className="flex gap-1  text-4xl ml-auto lg:mr-10 mr-2"
                  variant="solid"
                  bgColor="black"
                  color="white"
                  colorScheme="#ffffff"
                  width={28}
                  height={10}
                  _hover={{ bgColor: "#4F5054", color: "white" }}
                >
                  Change
                </Button>
               
              </div>
            </div>
         
          </div>
          <div className="flex flex-col lg:gap-5 gap-2 ">
            <div className=" py-8 px-8 flex items-center gap-8 lg:h-16 h-6  bg-gray-100 rounded-md  mt-5  ">
              <div className=" flex mx-8 text-black lg:text-lg text-sm font-medium ">
                PAYMENT METHOD
              </div>
            </div>
            {/* debit card */}
            <div className='flex justify-center-center gap-5'>
              <div className='w-30 h-12  flex justify-center items-center '>
                <div className={toggleState===1? 'lg:h-7 lg:w-7 h-5 w-5 bg-black rounded-full cursor-pointer': 'lg:h-7 lg:w-7 h-5 w-5 border-2 border-[#322f2f] rounded-full cursor-pointer'}></div>
                 </div>
              <div className="flex flex-col h-max gap-4">
              <div className="flex gap-5 items-center" onClick={()=>setToggleState(1)}>
                <div className=" border-2 border-gray-600 rounded-xl  h-12 w-12 flex justify-center items-center">
                  <CiCreditCard1 size={36} />
                </div>
                <div className="text-lg tracking-tight">
                  Debit Card / Credit Card
                </div>
              </div>
              <div className="hidden">
                <div className="flex">
                  <div className=" leading-8">
                    Enter card Number * <br></br>{" "}
                    <Input placeholder="xxx-xxxx-xxxx" size="lg" width={460} />
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <div className=" leading-8">
                      Enter card Number * <br></br>{" "}
                      <Input
                        placeholder="xxx-xxxx-xxxx"
                        size="lg"
                        width={460}
                      />
                    </div>
                  </div>
                  <div className=" flex gap-4 leading-8">
                    <div>
                      Valid Date<br></br>{" "}
                      <Input placeholder="08/26" size="lg" width={180} />
                    </div>
                    <div>
                      CVV*<br></br>
                      <Input placeholder="xxx" size="lg" width={180} />
                    </div>
                    <Button
                  className="flex gap-1  mt-8 text-4xl ml-auto mr-10"
                  variant="solid"
                  bgColor="black"
                  color="white"
                  colorScheme="#ffffff"
                  width={28}
                  height={14}
                  _hover={{ bgColor: "#4F5054", color: "white" }}
                >
                Pay $117.00
                </Button>
                  </div>
                  <div className=" text-gray-600 text-sm mt-4">
                    *Your card would be securely saved for the faster payments.
                    Your CVV will not be stored
                  </div>
                </div>
              </div>
            </div>
            </div>
            
                {/* Net banking*/}
                <div className='flex justify-center-center gap-5'>
              <div className='w-30 h-12  flex justify-center items-center '>
              <div className={toggleState===2? 'lg:h-7 lg:w-7 h-5 w-5 bg-black rounded-full cursor-pointer': 'lg:h-7 lg:w-7 h-5 w-5 border-2 border-[#322f2f] rounded-full cursor-pointer'}></div>
                 </div>                  
                   <div className="flex flex-col h-max gap-4">
              <div className="flex gap-5 items-center" onClick={()=>setToggleState(2)}>
                <div className=" border-2 border-gray-600 rounded-xl  h-12 w-12 flex justify-center items-center">
                  <TfiWorld size={36} />
                </div>
                <div className="text-lg tracking-tight">
                  Net Banking
                </div>
              </div>
              </div>
              </div>
              
          {/* Google / Apple Waller*/}
          <div className='flex justify-center-center gap-5'>
              <div className='w-30 h-12  flex justify-center items-center '>
              <div className={toggleState===3? 'lg:h-7 lg:w-7 h-5 w-5 bg-black rounded-full cursor-pointer': 'lg:h-7 lg:w-7 h-5 w-5 border-2 border-[#322f2f] rounded-full cursor-pointer'}></div>
                 </div>
          <div className="flex flex-col h-max gap-4">
              <div className="flex gap-5 items-center" onClick={()=>setToggleState(3)}>
                <div className=" border-2 border-gray-600 rounded-xl  h-12 w-12 flex justify-center items-center">
                  <IoWalletOutline size={36} />
                </div>
                <div className="text-lg tracking-tight">
                 Google / Apple Wallet
                </div>
              </div>
              </div>
          </div>
         

          </div>
      
        </div>

       
        <div className=" border h-fit rounded-lg grid gap-3  lg:w-5/12 w-full ">
          <div className=" grid gap-2 px-6 pt-2">
            <div className=" border-b-[1px] py-2">
              <p className=" text-xl font-bold font-Poppins">Your Products</p>
            </div>
            {
              products.map((items)=> { return (
                <div className=" flex gap-4 font-Poppins border-b-[1px] pb-2">
                  <img
                    src={items?.image && items?.image.length>0 ? items.image[0] : "" }
                    alt=""
                    className=" h-24 w-24 bg-orange-400 rounded-md object-cover"
                  />
                  <div className=" grid justify-start  pl-2  m-1">
                    <div className=" font-bold">{items.name}</div>
                    <div>
                      <span className="font-medium">Size: </span> {items?.defaultSize}
                      <span className=" ml-6 font-medium"> color: </span>Blue
                    </div>
                    <div>
                      <span className=" font-medium">
                        Price: {items.price}
                      </span>
                      <span className='ml-6 font-medium'>Qty: {items.qty}</span>
                    </div>
                  </div>
                </div>
              );
          
              
              })
            }
            
            <div className=" flex justify-between">
              <div>Delivery</div>
              <div className=" text-gray-500">
                <span className=" text-black font-bold">$20</span> 
              </div>
            </div>
            <div className=" flex justify-between">
              <div>Discount</div>
              <div className=" text-gray-500">
                <span className=" text-black font-bold">- $20</span>{" "}
                {``}
              </div>
            </div>
          </div>

          <div className=" mx-3 mb-2 py-4 w-46 bg-gray-100  rounded-lg text-2xl font-semibold px-3 flex flex-col gap-10">
            <div className='flex w-full'>
            <div>Total</div>
             <span className=" ml-auto">${total}</span>

            </div>
            <Button
                  className=" gap-1 w-full  text-4xl ml-auto mr-10"
                  variant="solid"
                  bgColor="black"
                  color="white"
                  colorScheme="#ffffff"
                  height={12}
                  _hover={{ bgColor: "#4F5054", color: "white" }}
                >
                Pay ${total}
                </Button>
         
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Billing