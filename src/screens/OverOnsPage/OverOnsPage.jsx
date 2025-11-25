import React from "react";
import { Layout } from "../../components/Layout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2Icon, UsersIcon, TrophyIcon, RecycleIcon, HeartHandshakeIcon, ShieldCheckIcon, UserCheckIcon, LeafIcon } from "lucide-react";

const stats = [
  { number: "500+", label: "Tevreden Klanten", icon: UsersIcon },
  { number: "10+", label: "Jaar Ervaring", icon: TrophyIcon },
  { number: "1000+", label: "Ontruimingen", icon: CheckCircle2Icon },
  { number: "95%", label: "Recycled", icon: RecycleIcon },
];

const values = [
  {
    title: "Professioneel",
    description: "Ons team bestaat uit ervaren professionals die hun vak verstaan en passie hebben voor hun werk.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Betrouwbaar",
    description: "We staan voor onze afspraken en leveren altijd de kwaliteit die we beloven.",
    icon: HeartHandshakeIcon,
  },
  {
    title: "Persoonlijk",
    description: "Elk project is uniek. We luisteren naar uw specifieke situatie en bieden maatwerk oplossingen.",
    icon: UserCheckIcon,
  },
  {
    title: "Duurzaam",
    description: "Milieubewust ondernemen zit in ons DNA. We recyclen waar mogelijk en werken volgens de laatste normen.",
    icon: LeafIcon,
  },
];

const reasons = [
  "Jarenlange ervaring in de branche",
  "Volledig verzekerd en gecertificeerd",
  "Vaste contactpersoon tijdens het hele traject",
  "Transparante prijzen zonder verrassingen",
  "Flexibele planning, ook in het weekend",
  "Complete ontzorging van A tot Z",
  "Discreet en respectvol werken",
  "Milieubewuste afvalverwerking",
];

export const OverOnsPage = () => {
  return (
    <Layout>
      <div
        className="relative w-full py-16 md:py-24 lg:py-32 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 to-blue-100/60" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-[#0c3065] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Over EcoRuim
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              EcoRuim is uw betrouwbare partner voor professionele ontruimingen en afvalverwerking
              in heel Vlaanderen. Met passie en toewijding helpen we particulieren en bedrijven
              om hun ruimtes opnieuw te definiëren.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="border-0 bg-gradient-to-br from-[#2678d1] to-[#1e5fa3] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-white mx-auto mb-3" />
                    <div className="text-white text-3xl md:text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white text-sm md:text-base font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
            <div>
              <h2 className="text-[#0c3065] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Wie Zijn Wij?
              </h2>
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  EcoRuim is ontstaan uit de persoonlijke ervaring met ontruimingen. We zagen hoe
                  stressvol en overweldigend het kan zijn om een woning of bedrijfspand te moeten
                  ontruimen. Daarom besloten we een bedrijf op te richten dat deze last volledig
                  van uw schouders neemt.
                </p>
                <p>
                  Sinds onze start hebben we honderden particulieren en bedrijven geholpen met
                  hun ontruimingen. Van kleine appartementen tot grote bedrijfspanden, van
                  gevoelige boedelontruimingen tot snelle verhuisontruimingen – we hebben de
                  ervaring en expertise om elke klus professioneel aan te pakken.
                </p>
                <p>
                  Ons team bestaat uit gedreven professionals die hun vak verstaan. We werken
                  niet alleen snel en efficiënt, maar ook met respect voor uw spullen, uw
                  situatie en het milieu. Duurzaamheid staat bij ons hoog in het vaandel: we
                  recyclen waar mogelijk en werken volgens de nieuwste milieunormen.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/Afbeelding_van_WhatsApp_op_2025-08-10_om_13.26.13_e5026413-removebg-preview.png"
                alt="EcoRuim bestelwagen"
                className="w-full max-w-[500px] h-auto transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <Card className="bg-[#e8f2ff] border-0 rounded-2xl mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-8 text-center">
                Onze Waarden
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="bg-[#e8f2ff] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-[#2678d1]" />
                      </div>
                      <h3 className="text-[#2678d1] text-lg md:text-xl font-bold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-8 text-center">
              Waarom Kiezen voor EcoRuim?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group transition-transform duration-200 hover:translate-x-2"
                >
                  <CheckCircle2Icon className="w-6 h-6 text-[#2678d1] flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:text-[#0c3065]" />
                  <span className="text-gray-700 text-sm md:text-base">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-4">
              Klaar om Kennis te Maken?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              We vertellen graag meer over hoe we u kunnen helpen. Neem vrijblijvend contact
              op voor een persoonlijk gesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="px-8 py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Neem Contact Op
                </Button>
              </Link>
              <Link to="/diensten">
                <Button
                  variant="outline"
                  className="px-8 py-4 border-2 border-[#2678d1] rounded-lg shadow-md hover:bg-gray-50 hover:shadow-lg active:scale-95 transition-all duration-200 text-[#0c3065] font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2"
                >
                  Bekijk Onze Diensten
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
