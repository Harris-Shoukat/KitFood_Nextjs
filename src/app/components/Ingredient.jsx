import React from "react";
import Image from "next/image";

const IngredientsList = () => {
  return (
    <div className="w-[80%] mx-auto p-6">
      {/* Title */}
      <h2 className="text-3xl font-medium mb-8 uppercase italic text-left">Ingrédients</h2>

      {/* Two-column layout with a line in the center */}
      <div className="flex justify-between items-start">
        {/* Left Column */}
        <div className="w-[45%]">
          <div className="grid grid-cols-1 gap-10">
            {/* Left Column Ingredients */}
            <div className="flex items-center gap-4">
              <Image
                src="/pexels-alleksana-4113900.jpg" // Replace with actual image path
                width={100}
                height={100}
                alt="Flour"
                className="object-cover rounded-xl"
              />
              <span className="text-2xl w-full uppercase text-center">Pate à lasagne</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/pexels-alleksana-4113900.jpg" // Replace with actual image path
                width={100}
                height={100}
                alt="Sugar"
                className="object-cover rounded-xl"
              />
              <span className="text-2xl w-full uppercase text-center">Sauce bolognaise</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/pexels-alleksana-4113900.jpg" // Replace with actual image path
                width={100}
                height={100}
                alt="Eggs"
                className="object-cover rounded-xl"
              />
              <span className="text-2xl w-full uppercase text-center">Gruyère râpée</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/pexels-alleksana-4113900.jpg" // Replace with actual image path
                width={100}
                height={100}
                alt="Butter"
                className="object-cover rounded-xl"
              />
              <span className="text-2xl w-full uppercase text-center">Gruyère râpée</span>
            </div>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="w-[1px] h-[200px] bg-gray-600 mx-6"></div>

        {/* Right Column */}
        <div className="w-[45%]">
          <div className="grid grid-cols-1 gap-6">
            {/* Right Column Ingredients */}
            <div className="flex items-center gap-4">
              <Image
                src="/pexels-alleksana-4113900.jpg" // Replace with actual image path
                width={100}
                height={100}
                alt="Salt"
                className="object-cover rounded-xl"
              />
              <span className="text-2xl w-full uppercase text-center">Pate à lasagne</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/pexels-alleksana-4113900.jpg" // Replace with actual image path
                width={100}
                height={100}
                alt="Milk"
                className="object-cover rounded-xl"
              />
              <span className="text-2xl w-full uppercase text-center">Gruyère râpée</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/pexels-alleksana-4113900.jpg" // Replace with actual image path
                width={100}
                height={100}
                alt="Vanilla Extract"
                className="object-cover rounded-xl"
              />
              <span className="text-2xl w-full uppercase text-center">Sauce bolognaise</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/pexels-alleksana-4113900.jpg" // Replace with actual image path
                width={100}
                height={100}
                alt="Baking Powder"
                className="object-cover rounded-xl"
              />
              <span className="text-2xl w-full uppercase text-center">Gruyère</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center my-16">
        <button className="bg-[#F7BC00] w-[40%] text-white text-3xl py-4 px-4 rounded-lg hover:bg-[#f7bd00f2] transition">Ajouter au panier</button>
      </div>

      <div className="w-full h-[2px] bg-[#757272] my-6"></div>
    </div>
  );
};

export default IngredientsList;
