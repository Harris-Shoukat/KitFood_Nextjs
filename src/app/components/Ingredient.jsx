// components/IngredientsList.js
import React from "react";
import Link from "next/link";
import { ingredients } from "../constant/page";
import ImageComponent from "./ImageComponent"; // Import the new image component

const IngredientsList = () => {
  return (
    <div className="w-[80%] mx-auto p-6">
      <h2 className="text-3xl font-medium mb-8 uppercase italic text-left">Ingrédients</h2>

      <div className="flex justify-between items-start">
        {/* Left Column */}
        <div className="w-[45%]">
          <div className="grid grid-cols-1 gap-10">
            {ingredients.slice(0, 4).map((ingredient, index) => (
              <div key={index} className="flex items-center gap-4">
                <ImageComponent src={ingredient.src} alt={ingredient.alt} width={100} height={100} />
                <span className="text-2xl w-full uppercase text-center">{ingredient.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Line */}
        <div className="w-[1px] h-[200px] bg-gray-400 mx-6"></div>

        {/* Right Column */}
        <div className="w-[45%]">
          <div className="grid grid-cols-1 gap-6">
            {ingredients.slice(4).map((ingredient, index) => (
              <div key={index} className="flex items-center gap-4">
                <ImageComponent src={ingredient.src} alt={ingredient.alt} width={100} height={100} />
                <span className="text-2xl w-full uppercase text-center">{ingredient.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full text-center my-16">
        <Link href="/myorder">
          <button className="bg-[#F7BC00] w-[40%] text-white text-3xl py-4 px-4 rounded-lg hover:bg-[#f7bd00f2] transition">
            Ajouter au panier
          </button>
        </Link>
      </div>

      <div className="w-full h-[2px] bg-[#757272] my-6"></div>
    </div>
  );
};

export default IngredientsList;
