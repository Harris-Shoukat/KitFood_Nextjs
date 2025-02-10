import React from "react";
import { recetteConstant } from "../constant/page";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const RecettesCards = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[50px] py-6">
        {recetteConstant.map((item, index) => (
          <Link key={index} href={`/recettes/${item.id}`}>
            <div className="flex flex-col bg-white shadow-md hover:scale-105 transition rounded-[30px] overflow-hidden w-full sm:w-full md:w-full lg:w-full">
              <div className="flex flex-col justify-center items-center h-72 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full px-5 flex justify-between">
                <h2 className="text-xl uppercase italic px-3 pb-4 sm:text-2xl">
                  {item.name}
                </h2>
                <div className="flex items-center justify-center pb-3 gap-3">
                  <FaStar className="text-[#F7BC00] text-xl" />
                  <FaStar className="text-[#F7BC00] text-xl" />
                  <FaStar className="text-[#F7BC00] text-xl" />
                  <FaStar className="text-[#67655d6a] text-xl" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecettesCards;
