import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Scrollbar, A11y,Autoplay } from 'swiper/modules';
import {SwiperImage1,SwiperImage2,SwiperImage3,SwiperImage4} from '../../assets/index'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperTool() {
  const SwiperImages=[SwiperImage1,SwiperImage2,SwiperImage3,SwiperImage4];

  return (
    <>
    <div className='w-11/12 sm:w-[30rem]  '>
    <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        pagination={{ clickable: true }}
        loop={true}
      >
        {SwiperImages.map((images) => {
          return (
            <SwiperSlide>
              <img
                className="h-[40rem] w-full sm:w-[40rem] object-cover"
                src={images}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
      
    </>
  );
}

export default SwiperTool;
