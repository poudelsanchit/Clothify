import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Scrollbar, A11y,Autoplay } from 'swiper/modules';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperTool() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        className="h-[40rem] w-[29rem] object-cover"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img className="h-[40rem] object-cover" src={image4} alt="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40rem] object-cover" src={image2} alt="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40rem] object-cover" src={image3} alt="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40rem] object-cover" src={image1} alt="hero-image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperTool;
