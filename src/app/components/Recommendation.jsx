"use client";
import React from "react";
import { pizzaRecommendation } from "../constant/page";
import { IoStarSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Recommendation = () => {
  return (
    <div className="w-[80%] mx-auto p-6">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {pizzaRecommendation.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 my-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-6">
                {/* Left Side - Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="rounded-xl"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="w-full">
                  <h1 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h1>
                  <h2 className="text-lg text-gray-400 mt-2">
                    {item.description}
                  </h2>
                  <div className="flex items-center mt-4">
                    <h1 className="text-lg text-gray-400 pr-4">Rating:</h1>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <IoStarSharp
                        key={star}
                        className={`text-xl ${
                          item.rating >= star
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommendation;
