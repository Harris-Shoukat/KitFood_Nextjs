"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <header className="w-full h-auto bg-white ">
        <div className="w-[90%] mx-auto flex justify-between items-center py-6">
          <div>
            <Link href="/">
              <Image
                src="/kitfoodLogo.svg"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex pr-10">
            <p className=" text-2xl flex justify-center items-center mr-2 italic text-[#F7BC00]">
              Suivez - nous
            </p>
            <Image
              src="/Twitter Circled.png"
              width={30}
              height={30}
              alt="logo"
              className="ml-1"
            />
            <Image
              src="/Facebook.png"
              width={30}
              height={30}
              alt="logo"
              className="ml-1"
            />
            <Image
              src="/Instagram.png"
              width={30}
              height={30}
              alt="logo"
              className="ml-1"
            />
          </div>
        </div>
        <div className="w-full h-[73px] bg-[#F7BC00] flex items-center">
          <nav className="w-[85%] ml-28">
            <ul className="flex justify-end items-center h-full mr-36">
              <Link
                href="/"
                className="mx-4 text-white text-2xl hover:border-b-2 border-b-white"
              >
                Accueil
              </Link>
              <Link
                href="#service"
                className=" mx-4 text-white text-2xl hover:border-b-2 border-b-white"
              >
                Nos services
              </Link>
              <Link
                href="#about"
                className="mx-4 text-white text-2xl hover:border-b-2 border-b-white"
              >
                A propos
              </Link>
              <Link
                href="../myorder"
                className="mx-4 text-white text-2xl hover:border-b-2 border-b-white"
              >
                Mes commandes
              </Link>
              <Link
                href="#"
                className="mx-4 text-white text-2xl hover:border-b-2 border-b-white"
              >
                Contact
              </Link>
            </ul>
          </nav>
          <div className="w-[17%] flex justify-start items-center">
            <PiShoppingCartSimpleFill className="text-white text-3xl mr-6" />
            <Link href="/login">
              <button className="bg-white px-4 py-1 rounded-xl text-xl">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
