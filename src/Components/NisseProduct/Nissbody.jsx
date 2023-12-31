import React from "react";

function Nissbody() {
  return (
    <div>
      <div className=" mx-auto w-11/12 flex flex-col  justify-center ">
        <div className=" flex items-center gap-80">
          <div className="text-4xl my-4">Men</div>
          <div className=" flex  gap-32 text-base  font-medium cursor-pointer">
            <div>Shoes</div>
            <div>Clothing</div>
            <div>Accessories</div>
            <div>Sale</div>
          </div>
        </div>
        <div>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/bf6ccafa-64c3-4c0f-b6e2-084f4e27af2f/men-s-shoes-clothing-accessories.jpg"
            alt="Nike Just Do It"
          />
        </div>

        {/* Heading */}
        <div className="  ">
          <div className=" flex text-center mx-auto mt-12 mb-8  w-1/2 font-extrabold text-7xl">
            THE RESOLUTION STARTER PACK
          </div>
          <div className=" flex text-center mx-auto my-8  w-1/2  text-base">
            Get after your fitness goals with a curated collection of comfy
            kicks,lightweight tops, and more supportive styles.
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
