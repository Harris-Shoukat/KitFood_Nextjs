"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination ,Navigation} from 'swiper/modules';
const ItemSlider = () => {
  return (
    <>
        <div className='w-full flex flex-col items-center justify-center mt-2'>
            <div className='text-3xl italic text-[#F7BC00] pb-6'>
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
        rotate: 10, // Reduced rotation
        stretch: 1000,
        depth: 500, // Less depth for smaller effect
        modifier: 1,
        // slideShadows: true,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[EffectCoverflow,Navigation, Pagination]}
      className=" w-[90%] h-[500px]" // Set max height and full width
    >
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-4.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-5.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-6.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-7.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-8.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-9.jpg"
          className="w-auto h-auto max-h-[400px] mt-8 mx-auto object-cover"
        />
      </SwiperSlide>
    </Swiper>
  
       
    </>
  )
}

export default ItemSlider