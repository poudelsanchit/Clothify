import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Navigation } from 'swiper/modules';
import EachCard from '../Cards/EachCard';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import 'swiper/css/bundle';


const ProductsSwiper = ({ title, products,type }) => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
//random data every time 
  const shuffledProducts = products.slice().sort(() => Math.random() - 0.5);


  return (
    <>
      <div className="text-[1.7rem] font-medium font-Poppins  mt-10">
        {title}
      </div>
      <div className="w-full h-10 flex">
        <div className="ml-auto flex gap-5">
          <div
            className="w-10 h-10 rounded-md  bg-gradient-to-r text-white from-purple-800  to-blue-900 text-4xl flex justify-center items-center cursor-pointer"
            onClick={handlePrev}
          >
            <GoChevronLeft />
          </div>
          <div
            className="w-10 h-10 rounded-md text-white bg-gradient-to-r  from-purple-800  to-blue-900  text-4xl flex justify-center items-center cursor-pointer"
            onClick={handleNext}
          >
            <GoChevronRight />
          </div>
        </div>
      </div>
      <Swiper
        navigation={false}
        direction="horizontal"
        modules={[ Navigation]}
        className="mySwiper"
        slidesPerView={1} // Number of slides visible at a time
        slidesPerGroup={1} // Number of slides in one group
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {shuffledProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <EachCard data={product} type={type}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductsSwiper;
