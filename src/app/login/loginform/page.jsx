"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoPersonFill } from "react-icons/go";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Link from "next/link";

const loginform = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%] h-[80vh] mx-auto p-6 space-y-8 md:space-y-0 md:space-x-10">
        {/* Left Side (Image and Title) */}
        <div className="md:w-[60%] w-full text-center md:text-left pl-2">
          <h1 className="pl-[80px] text-4xl text-[#1D1E1E] whitespace-pre-line">
            {`Saisissez vos identifiants pour
             vous connecter.`}
          </h1>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/tinyFamily.svg"
              alt="img"
              width={880}
              height={700}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="md:w-[40%] w-full h-auto p-10 rounded-lg space-y-4">
          {/* Email input with icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Email ou Nom d'utilisateur"
              className="w-full p-3 pl-10 border rounded-2xl bg-[#D7D6D6] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <GoPersonFill className="absolute right-8 top-1/2 text-xl transform -translate-y-1/2 text-gray-600" />
          </div>

          {/* Password input with icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              className="w-full p-3 pl-10 border rounded-2xl bg-[#D7D6D6] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaEyeSlash
              onClick={togglePasswordVisibility}
              className="absolute right-8 top-1/2 text-xl transform -translate-y-1/2 text-gray-600 cursor-pointer"
            />
          </div>

          <div className="w-full flex justify-between px-3">
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-2 border-green-500 rounded-lg checked:bg-green-500"
              />
              <label htmlFor="checkbox" className="pl-5 text-lg">
                Se souvenir de moi
              </label>
            </div>
            <p className="text-[#F7BC00] text-lg hover:underline cursor-pointer">
              Mot de passe oublier
            </p>
          </div>
          <div>
            <button className="w-full mt-20 py-5 bg-[#F7BC00] text-white text-xl italic font-normal rounded-3xl hover:border-2 border-stone-500">
              Se connecter
            </button>
            <div className="py-5 flex justify-between px-4">
              <p>Vous n’avez pas de compte ?</p>
              <Link href="/login/createaccount" className="underline text-[#F7BC00]">Créer un compte</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loginform;
