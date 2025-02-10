import IngredientsList from "@/app/components/Ingredient";
import Recommendation from "@/app/components/Recommendation";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="w-[80%] mx-auto p-6 bg-white ">
        <div className="flex py-5 mt-10 gap-5">
          {/* Left side: Image */}
          <div className="w-[30%] pr-6">
            <Image
              src="/Rectangle 847.png"
              alt="img"
              layout="responsive"
              width={400}
              height={300}
            />
          </div>

          {/* Right side: Title, Description, Stars, and Button */}
          <div className="w-[70%] flex flex-col justify-between">
            <h2 className="text-5xl italic font-medium mb-4">LASAGNES</h2>
            <p className="text-3xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.
            </p>

            {/* Star rating and Button aligned horizontally */}
            <div className="w-full md:w-2/4 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaStar className="text-[#F7BC00] text-3xl" />
                <FaStar className="text-[#F7BC00] text-3xl" />
                <FaStar className="text-[#F7BC00] text-3xl" />
                <FaStar className="text-[#67655d6a] text-3xl" />
                <FaStar className="text-[#67655d6a] text-3xl" />
              </div>

              {/* Button */}
              <button className="bg-[#F7BC00] text-white text-2xl py-2 px-4 rounded-lg hover:bg-[#f7bd00f2] transition">
              Nombre de personnes
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#757272] my-6"></div>
      </div>
      <IngredientsList/>
      <Recommendation/>
    </>
  );
};

export default page;
