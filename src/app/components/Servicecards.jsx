"use client"; // Ensure this is a client-side component

import React from "react";
import Link from "next/link"; // Using the next Link component for navigation
import { serviceconstant } from "@/app/constant/page"; // Import your serviceconstant data

const Servicecards = () => {
  return (
    <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
      {/* First Card */}
      <Link href={`/recettes`}>
        <div className="flex flex-col bg-white rounded-xl overflow-hidden p-6">
          <div className="flex flex-col justify-center items-center h-72 mb-4">
            <img
              src={serviceconstant[0].image} // Using image from serviceconstant
              alt={serviceconstant[0].title} // Using title from serviceconstant
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center w-full px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {serviceconstant[0].title}
            </h2>
            <p className="text-sm text-gray-500">{serviceconstant[0].description}</p>
          </div>
        </div>
      </Link>

      {/* Second Card */}
      <Link href={`/serviceroutes/cookingRoute`}>
        <div className="flex flex-col bg-white rounded-xl overflow-hidden p-6">
          <div className="flex flex-col justify-center items-center h-72 mb-4">
            <img
              src={serviceconstant[1].image} // Using image from serviceconstant
              alt={serviceconstant[1].title} // Using title from serviceconstant
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center w-full px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {serviceconstant[1].title}
            </h2>
            <p className="text-sm text-gray-500">{serviceconstant[1].description}</p>
          </div>
        </div>
      </Link>

      {/* Third Card */}
      <Link href={`/serviceroutes/cateringRoute`}>
        <div className="flex flex-col bg-white rounded-xl overflow-hidden p-6">
          <div className="flex flex-col justify-center items-center h-72 mb-4">
            <img
              src={serviceconstant[2].image} // Using image from serviceconstant
              alt={serviceconstant[2].title} // Using title from serviceconstant
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center w-full px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {serviceconstant[2].title}
            </h2>
            <p className="text-sm text-gray-500">{serviceconstant[2].description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Servicecards;
