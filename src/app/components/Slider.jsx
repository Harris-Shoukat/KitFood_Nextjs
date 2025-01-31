"use client";
// import Swiper JS
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={10} // Adjust space between slides
      slidesPerView={1} // Default slides per view for small screens
      className="w-full h-[80vh] mx-auto"
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <div className="w-full h-full relative">
          <Image
            src="/Rectangle 9.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority // Image loading priority
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-full relative">
          <Image
            src="/front-view-red-bell-peppers-spicy-vegetables-dark-background.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority // Image loading priority
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-full relative">
          <Image
            src="/pexels-alleksana-4113900.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority // Image loading priority
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
