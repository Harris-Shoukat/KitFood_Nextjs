import Image from "next/image";
import React from "react";

const CartItemCard = () => {
  return (
    <div className="w-full my-3 bg-[#E8E8E8] px-10 py-5 rounded-xl flex flex-col md:flex-row items-center gap-5">
      <div className="flex-shrink-0 w-[20%] flex justify-center items-center">
        <Image src="/Rectangle 847.png" alt="img" width={200} height={200} />
      </div>
      <div className="flex flex-col w-[30%] h-[18vh] justify-between">
        <h1 className="text-3xl font-semibold">LASAGNES</h1>
        <h3 className="text-2xl">5.000 fcfa</h3>
      </div>
      <div className="w-[1px] bg-gray-900 h-[80%]" />
      <div className="flex flex-col justify-between w-[20%]">
        <p className="text-xl text-gray-600">
          {`Pate à lasagne - sauce bolognaise
          - guyère rapée - Pate à lasagne
          - sauce bolognaise - guyère rapée`}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
