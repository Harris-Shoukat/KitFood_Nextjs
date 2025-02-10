"use client";
// import Swiper JS
// Import Swiper React components
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const route = useRouter();
  return (
    <>
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div>
                <p className="text-white text-7xl mb-6">
                  vous avez la flemme d'aller faire les courses
                </p>
                <button
                  onClick={() => route.push("/recettes")}
                  className="px-6 py-2 bg-[#F7BC00] text-white text-2xl rounded-full hover:bg-yellow-500 transition"
                >
                  Commençez
                </button>
              </div>
            </div>
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
      <div></div>
    </>
  );
};

export default Slider;
