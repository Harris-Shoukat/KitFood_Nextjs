"use client"
import Image from "next/image";
import MyOrderBtn from "../components/MyOrderBtn";
import HorizontalLine from "../components/HorizontalLine";
import CartItemCard from "../components/CartItemCard";
import Recommendation from "../components/Recommendation";
import { useRouter } from "next/navigation";

const Page = () => {

  const route = useRouter();


  return (
    <>
      <div className="relative">
        {/* Image */}
        <Image
          src="/MyorderImg.png"
          alt="img"
          layout="responsive"
          width={1200}
          height={400}
        />

        {/* Breadcrumb Navigation */}
        <h1 className="absolute top-20 left-[6%] text-4xl italic text-white">
          {`Accueil`} <span className="text-black">{` > Profil`}</span>
        </h1>

        {/* Main Title */}
        <h1 className="absolute top-[40%] left-[15%] text-7xl text-white">
          Profil
        </h1>
      </div>
      <div className="w-[80%] mx-auto h-auto mt-16 mb-5">
        <MyOrderBtn />
        <HorizontalLine />
      </div>
      <div className="w-[80%] h-[80vh] overflow-y-auto  mt-10 mx-auto">
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </div>
      <div className="w-[80%] mx-auto">
        <HorizontalLine />
      </div>
      <div className="w-[80%] mx-auto py-4">
        {/* Total Section */}
        <div className="flex justify-between items-center px-10">
          <h1 className="font-semibold text-2xl">TOTAL</h1>
          <p className="font-semibold text-2xl">20.000 FCFA</p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center items-center py-5 ">
          <button onClick={()=> route.push("/confirmation")} className="text-2xl px-10 py-2 bg-[#F7BC00] text-white rounded-xl">
            Confirmer la commande
          </button>
        </div>
      </div>
      <Recommendation/>
    </>
  );
};

export default Page;
