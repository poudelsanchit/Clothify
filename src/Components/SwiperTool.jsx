import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperTool() {
  const HeroSwiper = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
  ];

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="h-[42rem] w-[29rem] object-cover"
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // Enable loop
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Set delay to 2000 milliseconds (2 seconds)
        pagination={{ clickable: true }}
      >
        {HeroSwiper.map((slide, index) => (
          <SwiperSlide key={index}>
            <img className="h-[42rem] object-cover" src={slide.image} alt={`hero-image-${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperTool;
