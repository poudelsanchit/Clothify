import React from 'react'
import {
 
  Button,
  HStack,
  Input,
  useNumberInput,
} from '@chakra-ui/react'
const Shipping = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.01,
      defaultValue: 1.53,
      min: 1,
      max: 6,
      precision: 2,
    });

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()


  return (
    <div className=" w-11/12 font-Poppins flex flex-col gap-5">
      <div className="text-2xl font-medium">Your Orders</div>
      <div className="flex">
        <div className=" flex h-32 w-8/12 border-2 rounded-t-md  p-1 gap-5">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/21692e08-697b-4bda-9b9d-fea249a11439/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png"
            alt=""
            className="w-28 h-28  rounded-md object-cover "
          />

          <div className="flex flex-col justify-evenly">
            <div className="font-bold text-xl">
              Air Jordan 1 High OG Royal Reimagined
            </div>

            <div className="  text-base flex justify-start gap-32 items-start">
              <div>
                <span className="font-medium">Size:</span>
                <HStack maxW="170px">
                  <Button {...inc}>+</Button>
                  <Input {...input} />
                  <Button {...dec}>-</Button>
                </HStack>
              </div>
              <div>
                <span className="font-medium">Color:</span> Blue
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full ml-auto font-bold mr-10 ">
            {" "}
            150 $
          </div>
        </div>
        <div className="h-28 w-4/12 "></div>
      </div>
    </div>
  );
}

export default Shipping