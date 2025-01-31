"use client";
import React from "react";
import { serviceconstant } from "../constant/page";

const Servicecards = () => {
  return (
    <>
      <div className="mx-auto flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-32">
        {serviceconstant.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-xl overflow-hidden p-6 w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <div className="flex flex-col justify-center items-center h-72 mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="text-center w-full px-4">
              <h2 className="text-2xl sm:text-3xl">{service.title}</h2>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Servicecards;
