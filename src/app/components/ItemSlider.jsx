"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const images = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

const ItemSlider = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-2">
        <div className="text-3xl italic text-[#F7BC00] pb-6">
          <h1>- Les recettes populaires -</h1>
        </div>
      </div>

      <Swiper
        effect="coverflow"
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 10,
          stretch: 1000,
          depth: 500,
          modifier: 1,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="w-[90%] h-[500px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Nature ${index + 1}`}
              className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ItemSlider;
