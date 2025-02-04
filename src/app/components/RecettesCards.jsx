import React from "react";
import { recetteConstant } from "../constant/page";
import { FaStar } from "react-icons/fa";


const RecettesCards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center py-6 gap-x-[150px] gap-y-[50px]">
        {recetteConstant.map((item, id) => (
          <div
            key={id}
            className="flex flex-col bg-white shadow-md hover:scale-105 transition rounded-[30px] overflow-hidden w-full sm:w-1/3 md:w-1/4 lg:w-1/4"
          >
            <div className="flex flex-col justify-center items-center h-72 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full px-5 flex justify-between">
              {" "}
              {/* Add padding here only */}
              <h2 className="text-xl uppercase italic px-3 pb-4 sm:text-2xl">{item.name}</h2>
            <div className="flex items-center justify-center pb-3 gap-3">
            <FaStar  className="text-[#F7BC00] text-xl"/>
              <FaStar  className="text-[#F7BC00] text-xl"/>
              <FaStar  className="text-[#F7BC00] text-xl"/>
              <FaStar className="text-[#67655d82] text-xl"/>
            </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecettesCards;
