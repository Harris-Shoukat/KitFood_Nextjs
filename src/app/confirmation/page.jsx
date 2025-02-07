"use client"
import Image from "next/image";
import Map from "../components/Map";
import ModalConfirmOrder from "../components/ModalConfirmOrder";

const Page = () => {
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
          {`Accueil > Mes Commandes`}{" "}
          <span className="text-black">{` > Confirmation`}</span>
        </h1>

        {/* Main Title */}
        <h1 className="absolute top-[40%] left-[15%] text-7xl text-white">
          Confirmation
        </h1>
      </div>
      <Map />
    </>
  );
};

export default Page;
