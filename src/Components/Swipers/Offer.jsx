import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const Offer = () => {
  const SwiperTexts = [
    "Get Your Gear Faster Look for Store Pickup at Checkout >>>",
    "Save Up to 40%",
    "Get Your Gear Faster Look for Store Pickup at Checkout >>>",
    "Members: Free Shipping on Orders $50+",
  ];

  return (
    <div className=" w-full bg-[#f7f2f2da]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={false}
        loop={true}
      >
        {SwiperTexts.map((text, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" flex justify-center  h-12 w-full cursor-pointer">
                <div className=" flex justify-center items-center  text-sm">
                  {text}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Offer;
