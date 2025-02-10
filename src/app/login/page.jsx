"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const login = () => {
  const router = useRouter();
  return (
    <>
      <div className="md:w-[90%] mx-auto md:h-[80vh] flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-10">
  {/* Left Side */}
  <div className="flex flex-col justify-start items-start md:w-[40%] text-center md:text-left">
    <p className="mb-2 text-3xl">Bienvenue sur</p>
    <h1 className="text-5xl text-[#F7BC00] uppercase mb-8 md:mb-20">
      Latouche Food Land
    </h1>
    <p className="text-2xl mb-10 md:mb-16">
      Nous vous proposons un panier bien garni de produits frais et bio
      livré avec la fiche de recette bien détaillée avec des conseils et
      astuces pour vous permettre de vivre une expérience culinaire sans
      précédent.
    </p>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
      <button onClick={()=> router.push('/login/createaccount')} className="text-2xl w-full md:w-72 rounded-xl px-4 py-2 bg-[#1D1E1E] text-white">
        Créer un compte
      </button>
      <button onClick={()=> router.push('/login/loginform')} className="text-2xl w-full md:w-72 rounded-xl px-4 py-2 bg-[#F7BC00] text-white">
        Se connecter
      </button>
    </div>
  </div>

  {/* Right Side (Image) */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0">
    <Image src="/tinyFamily.svg" alt="Image" width={900} height={700} />
  </div>
</div>

    </>
  );
};

export default login;
