import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import React from "react";
import RecettesCards from "../components/RecettesCards";

const page = () => {
  return (
    <>
      <div>
        {/* image */}
        <div className="relative">
          <Image
            src="/Rectangle 75.svg"
            alt="img"
            layout="responsive"
            width={1400}
            height={400}
          />
          <h1 className="absolute top-20 left-[7%] text-3xl italic text-white">
            {`Accueil  >  Nos services`}{" "}
            <span className="text-black">{`>  Recettes`}</span>{" "}
          </h1>
          <h1 className="absolute top-[40%] left-[15%] text-7xl text-white ">
            Nos spéciales séléctions
          </h1>
        </div>
        <div className="w-[95%] mx-auto h-auto gap-8 flex justify-between py-6">
          {/* left */}
          <div className="w-[30%]">
            <div className="w-full">
              <input
                type="search"
                placeholder="search"
                className="w-full px-5 h-20 bg-[#D7D6D6] text-2xl rounded-3xl"
              />
            </div>
            <div className="w-full rounded-2xl mt-6 shadow-lg">
              <div className="bg-[#F7BC00] rounded-t-2xl px-6 py-6">
                <h1 className="text-3xl pl-4">Catégories</h1>
              </div>
              <div className="px-5 py-5   hover:bg-slate-100 border-b-2 relative">
                <h1 className="text-2xl pl-4">Entrées</h1>
                <IoIosArrowDown className="absolute right-6 top-1/2 text-2xl"/>
              </div>
              <div className=" px-5 py-5  hover:bg-slate-100  border-b-2 relative">
                <h1 className="text-2xl pl-4">Résistances</h1>
                <IoIosArrowDown className="absolute right-6 top-1/2 text-2xl"/>
              </div>
              <div className="px-5 py-5   hover:bg-slate-100 border-b-2 relative">
                <h1 className="text-2xl pl-4">Patisseries</h1>
                <IoIosArrowDown className="absolute right-6 top-1/2 text-2xl"/>
              </div>{" "}
              <div className="px-5 py-5   hover:bg-slate-100 relative">
                <h1 className="text-2xl pl-4">Garnitures</h1>
                <IoIosArrowDown className="absolute right-6 top-1/2 text-2xl"/>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[70%] h-[60vh] bg-[#C4C4C4] rounded-2xl"></div>
        </div>
        <div className="w-[80%] mx-auto h-auto my-6">
          <RecettesCards />
        </div>
      </div>
    </>
  );
};

export default page;
