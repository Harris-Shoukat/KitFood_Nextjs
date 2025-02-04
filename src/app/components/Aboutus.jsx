import React from "react";

const Aboutus = () => {
  return (
    <>
      <div id="about" className="w-[80%] mx-auto my-4">
        <div className="text-center">
          <h1 className="text-2xl font-medium italic">- A propos de nous -</h1>
        </div>
        <div className="mt-20 w-full  p-2 flex">
          <div className="w-[35%] flex justify-end items-center">
            <div className="w-[420px] h-[430px] bg-[#FFCC17] rounded-3xl mr-8"></div>
          </div>
          <div className="w-[65%]">
            <h1 className="text-5xl leading-[60px] italic mb-8">LA TOUCHE FOOD <br />LAND</h1>
            <p className="text-3xl">
              Bonjour et Bienvenue dans l'univers de Mr LATOUCHE .Jeune cuisiner
              en soif de connaissance et de nouvelles sensations , j'ai parcouru
              la capitale à la recherche de nouvelles saveurs , j'en ai donc
              profité pour rassembler de jeunes pivot de la restauration pour
              vous offrir un service de taille , à la hauteur de vos
              aspirations...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
