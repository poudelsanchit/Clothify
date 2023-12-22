import { Button, IconButton, Stack } from '@chakra-ui/react';
import EachCard from './EachCard';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../../redux/Slices/Cart/cartSlice';
import { getSumOfProducts } from '../../../redux/Slices/Cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const Shipping = ({handleToggle}) => {
  const navigate = useNavigate();
  const cartItems = useSelector(state=>state.cart.items)
  const subTotal = useSelector(getTotalPrice);
  const tax= 2;
const total= useSelector(getSumOfProducts)

const handleCheckout=()=>{
  navigate('/checkout')
}


  return (
    <>
        <div className='flex flex-col w-full items-center justify-center '>

      <div className="flex lg:flex-row flex-col lg:w-11/12 w-full gap-10  ">
        <div className=" lg:w-8/12 w-full font-Poppins flex flex-col lg:gap-5 gap-1 ">
          <div className="lg:text-3xl text-xl font-medium tracking-tighter p-2 ">Prodcuts</div>
          <div className="flex flex-col gap-2 w-full p-2 ">
            {cartItems.map((items)=>{
              return <EachCard items={items}/>
            })}
          
          </div>
        </div>
        <div className="h-max lg:w-4/12 w-full  lg:pb-5  lg:mt-12  rounded-md  transition-all flex flex-col lg:pl-5 lg:pr-5 p-2 ">
          <div className='w-full border-2  p-2 rounded-md lg:text-xl '>

          <div className="font-semibold  font-Poppins pb-2 border-b-2 pt-2">
            Order Summary
          </div>
          <div className="  font-Poppins flex pb-2">
            {" "}
            <div>Subtotal:</div> <div className="ml-auto ">$ {total}</div>{" "}
          </div>
          <div className="  font-Poppins flex pb-2">
            {" "}
            <div>Shipping Fee:</div> <div className="ml-auto "> $ {tax}</div>{" "}
          </div>
          <div className="  font-Poppins flex pb-2">
            {" "}
            <div>Total :</div> <div className="ml-auto  text-red-600 font-semibold"> $ {total+2}</div>{" "}
            
          </div>
              <Button
                className="flex gap-3  lg:mt-10 mt-2 text-4xl "
                variant="solid"
                bgColor="black"
                color="white"
                colorScheme="#ffffff"
                height={12}
                _hover={{ bgColor: "#4F5054", color: "white" }} onClick={handleCheckout}
              >
                <CiShoppingCart  className='text-2xl'/>
                Proceed to checkout
              </Button>
          </div>
          
            
        </div> 
      </div>
      </div>
    </>
  );
}

export default Shipping