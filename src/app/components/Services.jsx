import React from "react";
import Servicecards from "./Servicecards";
import ItemSlider from "./ItemSlider";

const Services = () => {
  return (
    <>
      <div id="service" className="flex flex-col items-center justify-center mt-10">
        <div>
          <h2 className="text-2xl italic ">- Nos services -</h2>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F7BC00] py-4 mb-10 text-center">
            Nos meilleurs services pour vous
          </h1>
        </div>
        <div>
          <Servicecards />
          <ItemSlider />
        </div>
      </div>
    </>
  );
};

export default Services;
