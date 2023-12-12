import { Button, IconButton, Stack } from '@chakra-ui/react';
import EachCard from './EachCard';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../../redux/Slices/Cart/cartSlice';

const Shipping = ({handleToggle}) => {
  const cartItems = useSelector(state=>state.cart.items)
  const subTotal = useSelector(getTotalPrice);
  const tax= 2;
  const totalPrice = subTotal+ tax;

 
const handleCheckout=()=>{
  handleToggle(2);
}
cartItems.map((data)=>{
  
})

  return (
    <>
      <div className="flex w-11/12 gap-10 ">
        <div className=" w-8/12 font-Poppins flex flex-col gap-5">
          <div className="text-3xl font-medium tracking-tighter">Prodcuts</div>
          <div className="flex flex-col gap-2 w-full">
            {cartItems.map((items)=>{
              return <EachCard items={items}/>
            })}
          
          </div>
        </div>
        <div className="h-max w-4/12 pb-5  mt-12  rounded-md border-2 hover:shadow-xl transition-all flex flex-col pl-5 pr-5">
          <div className="font-semibold text-xl font-Poppins pb-2 border-b-2 pt-2">
            Order Summary
          </div>
          <div className=" text-xl font-Poppins flex pb-2">
            {" "}
            <div>Subtotal:</div> <div className="ml-auto ">$ {subTotal}</div>{" "}
          </div>
          <div className=" text-xl font-Poppins flex pb-2">
            {" "}
            <div>Shipping Fee:</div> <div className="ml-auto "> $ {tax}</div>{" "}
          </div>
          <div className=" text-xl font-Poppins flex pb-2">
            {" "}
            <div>Total :</div> <div className="ml-auto  text-red-600 font-semibold"> $ {totalPrice}</div>{" "}
            
          </div>
              <Button
                className="flex gap-3  mt-10 text-4xl "
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
    </>
  );
}

export default Shipping