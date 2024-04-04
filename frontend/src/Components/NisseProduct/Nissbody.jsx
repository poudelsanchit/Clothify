import React from "react";

function Nissbody({ title, imgurl, subtitle1, subtitle2 }) {
  return (
    <div>
      <div className=" mx-auto w-11/12 flex flex-col  justify-center ">
        <div className=" flex items-center gap-96 my-6">
          <div className="text-3xl ">{title}</div>
          <div className=" flex gap-20 text-base  font-medium cursor-pointer">
            {/* <div>Shoes</div>
            <div>Clothing</div>
            <div>Accessories</div>
            <div>Sale</div> */}
          </div>
        </div>
        <div>
          <img src={imgurl} alt="Nike Just Do It" />
        </div>

        {/* Heading */}
        <div className="  ">
          <div className=" flex text-center mx-auto mt-12 mb-8  font-extrabold  text-4xl lg:text-7xl lg:w-1/2">
            {subtitle1}
          </div>
          <div className=" flex text-center mx-auto my-8  lg:w-1/2   text-base">
            {subtitle2}
          </div>
          <a href="#homeShop">
            <div className="flex text-center font-semibold mx-auto my-6 bg-black text-white rounded-full w-fit   px-6 py-2 text-base cursor-pointer">
              Shop
            </div>
          </a>
        </div>

        {/* slider */}
      </div>
    </div>
  );
}

export default Nissbody;
