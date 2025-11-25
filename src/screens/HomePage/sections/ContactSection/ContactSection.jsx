import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <Card className="bg-[#e8f2ff] border-0 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-[320px] h-[280px] rounded-3xl bg-[#2678d1]" />
                <img
                  className="absolute -top-8 left-6 w-[280px] h-[260px] object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Construction worker"
                  src="/vecteezy_3d-construction-worker-character-thinking-while-working-on-a_46681476 1.svg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-black text-xl sm:text-2xl md:text-3xl font-bold">
                Contacteer Ons!
              </h3>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Bij EcoRuim zijn we er trots op dat we mensen en bedrijven kunnen helpen hun ruimtes opnieuw te definiëren, zonder de stress van het opruimen. Neem contact met ons op en ervaar zelf onze persoonlijke aanpak.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#2678d1] shadow-md rounded-lg hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-sm sm:text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                    Vraag Offerte
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-[#2678d1] shadow-md rounded-lg hover:bg-gray-50 hover:shadow-lg active:scale-95 transition-all duration-200 text-black font-semibold text-sm sm:text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2"
                  >
                    Contacteer Ons
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
