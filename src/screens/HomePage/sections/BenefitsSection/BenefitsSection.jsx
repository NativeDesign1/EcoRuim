import { CheckCircle2Icon, StarHalfIcon, StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const benefits = [
  "Totaalontzorging",
  "Efficiënt & Snel",
  "Discreet & Respectvol",
  "Transparante Prijzen",
  "Milieubewust",
];

const testimonials = [
  {
    rating: 4.5,
    text: '"De service van EcoRuim was fantastisch. Snel, efficiënt en alles werd keurig netjes achtergelaten. Ik hoefde me nergens zorgen over te maken!"',
    name: "Time4change",
    type: "Bedrijf",
  },
  {
    rating: 4.5,
    text: '"De service van EcoRuim was fantastisch. Snel, efficiënt en alles werd keurig netjes achtergelaten. Ik hoefde me nergens zorgen over te maken!"',
    name: "Time4change",
    type: "Bedrijf",
  },
  {
    rating: 4.5,
    text: '"De service van EcoRuim was fantastisch. Snel, efficiënt en alles werd keurig netjes achtergelaten. Ik hoefde me nergens zorgen over te maken!"',
    name: "Time4change",
    type: "Bedrijf",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-center text-[#0c3065] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10">
          De Voordelen van Samenwerken met Ons
        </h2>

        <div className="bg-[#e8f2ff] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mb-8 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 group transition-transform duration-200 hover:translate-x-2">
                  <CheckCircle2Icon className="w-10 h-10 md:w-12 md:h-12 text-[#0c3065] flex-shrink-0 transition-colors duration-200 group-hover:text-[#2678d1]" />
                  <span className="text-[#0c3065] text-sm sm:text-base md:text-lg font-semibold">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <img
                className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[450px] h-auto transition-transform duration-300 hover:scale-105"
                loading="lazy"
                alt="Technician service"
                src="/small-vecteezy_an-asian-young-technician-service-man-wearing-blue-uniform_16641317_small 2.svg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="mb-6 md:mb-10">
            <h2 className="text-[#0c3065] text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-[#0c3065] text-sm sm:text-base md:text-lg">
              "Wij doen ons best om jou de beste ervaring te bieden."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#f8f9fa] border-0 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(4)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 fill-current text-yellow-400"
                      />
                    ))}
                    <StarHalfIcon className="w-5 h-5 fill-current text-yellow-400" />
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full"
                    loading="lazy"
                      alt={testimonial.name}
                      src="/person-crop-circle-fill-svgrepo-com--1--1.svg"
                    />
                    <div>
                      <div className="text-black text-sm md:text-base font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-xs md:text-sm">
                        {testimonial.type}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
