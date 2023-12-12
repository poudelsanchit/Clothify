import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { CiCreditCard1, CiShoppingCart } from "react-icons/ci";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Input } from '@chakra-ui/react'
import { IoIosArrowBack } from "react-icons/io";
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { TfiWorld } from "react-icons/tfi";
import { IoWalletOutline } from "react-icons/io5";

const Billing = ({handleToggle}) => {
  const handleCheckout=()=>{
    handleToggle(1);
  }
  
  return (
    <div className=" flex gap-4 w-full justify-center items-center ">
      <div className="flex gap-4 justify-between w-11/12 ">
        <div className="flex flex-col  gap-4  w-7/12 ">
          <div className=" flex items-center gap-5">
            <IoIosArrowBack
              className="bg-[#3182ce] cursor-pointer text-white text-3xl rounded-md"
              onClick={handleCheckout}
            />
            <div className=" font-bold text-4xl">Shopping cart</div>
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
          <div className=" grid gap-4">
            <div className=" py-10 pl-8 flex items-center gap-8 h-16 border border-gray-300 rounded-md    ">
              <div className=" border rounded-full px-2 items-center justify-center font-bold">
                a
              </div>
              <div className="flex w-full ">
                <div className="flex flex-col ">
                  <div className="flex  gap-3  text-sm font-medium  text-gray-600">
                    LOGIN <FaCheck />
                  </div>
                  <div className=" flex flex-col text-black text-sm font-medium ">
                    Sanchit Poudel <span>+977-9860000044</span>
                  </div>
                </div>
                <Button
                  className="flex gap-1  text-4xl ml-auto mr-10"
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
            <div className=" py-10 pl-8 flex items-center gap-8 h-16 border border-gray-300 rounded-md    ">
              <div className=" border rounded-full px-2 items-center justify-center font-bold">
                a
              </div>
              <div className="flex w-full ">
                <div className="flex flex-col ">
                  <div className="flex items-center  gap-3  text-sm font-medium  text-gray-600">
                    <div> Shipping Address</div>
                    <FaCheck />
                  </div>
                  <div className=" flex flex-col text-black text-sm font-medium ">
                    <div>Pokhara 30 Shishuwa, Kaski</div> <span>33800</span>
                  </div>
                </div>
                <Button
                  className="flex gap-1  text-4xl ml-auto mr-10"
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
          <div className="flex flex-col gap-5 ">
            <div className=" py-8 px-8 flex items-center gap-8 h-16  bg-gray-100 rounded-md  mt-5  ">
              <div className=" flex mx-8 text-black text-md font-medium ">
                PAYMENT METHOD
              </div>
            </div>
            {/* debit card */}
            <div className='flex justify-center-center gap-5'>
              <div className='w-30 h-12  flex justify-center items-center '>
                <div className='h-7 w-7 bg-black rounded-full cursor-pointer'></div>
                 </div>
              <div className="flex flex-col h-max gap-4">
              <div className="flex gap-5 items-center">
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
                <div className='h-7 w-7 border-2 border-[#322f2f] rounded-full cursor-pointer'></div>
                 </div>                  
                   <div className="flex flex-col h-max gap-4">
              <div className="flex gap-5 items-center">
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
                <div className='h-7 w-7 border-2 border-[#322f2f] rounded-full'></div>
                 </div>
          <div className="flex flex-col h-max gap-4">
              <div className="flex gap-5 items-center">
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

        {/*  */}
        <div className=" border h-fit rounded-lg grid gap-3 mt-24">
          <div className=" grid gap-4 px-6 pt-6">
            <div className="">
              <p className=" text-xl font-bold">Your Order</p>
            </div>
            <hr />
            <div className=" flex gap-4">
              <div className=" h-32 w-24 bg-orange-400 rounded-md"></div>
              <div className=" grid justify-start  pl-2  m-1">
                <div className=" font-bold">Blue Shoe Jorden</div>
                <div>
                  {" "}
                  <span className="font-medium">Size: </span> XL{" "}
                  <span className=" ml-6 font-medium"> color: </span>Blue
                </div>
                <div className=" font-semibold">$39,00 x 02</div>
              </div>
            </div>
            <hr />
            <div className=" flex gap-4">
              <div className=" h-32 w-24 bg-orange-400 rounded-md"></div>
              <div className=" grid justify-start  pl-2  m-1">
                <div className=" font-bold">Black Jorden</div>
                <div>
                  {" "}
                  <span className="font-medium">Size: </span> XL{" "}
                  <span className=" ml-6 font-medium"> color: </span>Blue
                </div>
                <div className=" font-semibold">$39,00 x 02</div>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div>Delivery</div>
              <div className=" text-gray-500">
                <span className=" text-black font-bold">$20</span> {`(Express)`}
              </div>
            </div>
            <div className=" flex justify-between">
              <div>Discount</div>
              <div className=" text-gray-500">
                <span className=" text-black font-bold mr-[4.4rem]">- $20</span>{" "}
                {``}
              </div>
            </div>
          </div>

          <div className=" mx-3 mb-2 py-8 w-46 bg-gray-100  rounded-lg text-3xl font-semibold px-3">
            Total <span className=" ml-14">$177,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing