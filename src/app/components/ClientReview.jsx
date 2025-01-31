"use client";
import React from "react";
import { review } from "../constant/page";
import { IoStarSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
const ClientReview = () => {
  return (
    <>
      <div className="w-[80%] mx-auto mt-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold pb-6">Que disent-ils de nous ?</h1>
        </div>
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {review.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" pl-20  bg-white p-6 mb-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mt-6 space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt=""
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h1>
                      <h2 className="text-lg text-gray-400">
                        {item.designation}
                      </h2>
                    </div>
                  </div>
                  <div className="w-[80%] ml-24">
                    <p className="text-lg text-gray-600">{item.message}</p>
                  </div>
                  <div className="flex items-center ml-24">
                    <h1 className="text-lg text-gray-400 pr-4">
                      rating: {item.rating}
                    </h1>
                    <IoStarSharp className="text-yellow-400 text-xl" />
                    <IoStarSharp className="text-yellow-400 text-xl" />
                    <IoStarSharp className="text-yellow-400 text-xl" />
                    <IoStarSharp className="text-yellow-400 text-xl" />
                    <IoStarSharp className="text-yellow-400 text-xl" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-[100%] rounded-md h-auto bg-[#FFCC17] mt-20 flex items-center justify-between px-10 py-10">
          {/* Left Side (Image) */}
          <div className="w-[40%] pt-10 flex justify-center items-center">
            <Image
              src="/Rectangle.png" // Replace with your actual image path
              alt="Your image"
              width={500} // Adjust size as needed
              height={500} // Adjust size as needed
              objectFit="cover"
            />
          </div>

          {/* Right Side (Title, Description, Email Input & Button) */}
          <div className="w-[60%] pl-10">
            <h1 className="text-6xl font-bold text-white mb-6">
            Obtenez plus de rabais si vous commandez chez nous
            </h1>{" "}
            {/* Increased title size */}
            <p className="text-xl text-white mb-6">
            Rejoignez-nous alors vous devez avoir obtenu une réduction et obtenir une promotion de notre part, profitez-en et heureux de commander.
            </p>
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-lg border border-gray-300 w-full text-lg" // Increased input size
              />
              <button className="bg-black text-white px-8 py-4 rounded-lg text-lg">
                Get
              </button>{" "}
              {/* Increased button size */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReview;
