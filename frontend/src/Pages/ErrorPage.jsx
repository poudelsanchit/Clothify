import React from "react";
import Image from "../assets/404.jpg"
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleToHome=()=>{
navigate('/')
    }
  return (
    <div className="h-screen flex justify-center  w-screen">
      <div className=" w-10/12 h-11/12 flex ">
        <div className="w-screen flex flex-col  pt-32 items-center">
            <div className="flex flex-col w-10/12 gap-2">
            <div className=" text-9xl font-Montserrat font-semibold tracking-wider bg-gradient-to-r from-red-800  to-blue-800 text-transparent bg-clip-text ">Oops!</div>
            <div className="text-3xl font-Poppins ">We can't find the page you're looking for. </div>
            <div className="text-base text-secondary-text font-Poppins">The link you followed is either outdated, inaccurate or the server has been instructed not to let you have it  </div>
                <div className="bg-gradient-to-r from-red-800  to-blue-800 rounded-md w-60 h-12 flex justify-center items-center text-xl text-white mt-6 cursor-pointer" onClick={handleToHome}>Go to Homepage</div>
            </div>
         

        </div>
        <div className=" w-screen">
            <img src={Image} alt="" />
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;
