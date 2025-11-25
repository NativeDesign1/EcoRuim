import React from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
            <h1 className="text-[#0c3065f2] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Uw Partner in Professionele Ontruiming en Afvalverwerking
            </h1>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Heeft u een woning, kantoor of bedrijfspand dat snel en netjes ontruimd moet worden? Wij zorgen voor een complete ontruiming én verantwoord afvalbeheer, discreet en zonder gedoe. Zo kunt u zich richten op wat écht belangrijk is.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link to="/contact">
                <Button className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-5 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-sm sm:text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Vraag Nu Je Offerte Aan
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto transition-transform duration-300 hover:scale-105"
              alt="Home repair services"
              src="/vecteezy_home-repair-services-professional-workers-guys-move-sofa_ 1.svg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
