import React from "react";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2Icon, ClipboardListIcon, ClockIcon, LeafIcon, RecycleIcon, ZapIcon, PackageIcon, SparklesIcon } from "lucide-react";

const woningFeatures = [
  "Volledige woning leegmaken",
  "Waardevolle spullen apart houden",
  "Bezemschoon opleveren",
  "Kelder en zolder ontruiming",
];

const kantoorFeatures = [
  "Inventaris en kantoormeubilair verwijderen",
  "IT-apparatuur en elektronica afvoeren",
  "Gevoelige documenten veilig vernietigen (AVG-proof)",
  "Flexibel plannen buiten werktijden",
];

const elektriciteitFeatures = [
  "Elektriciteitsinstallaties en verlichting",
  "Stopcontacten en schakelaars plaatsen",
  "Keuring en onderhoud elektrische installaties",
  "Alle elektrische werken voor woning en kantoor",
];

const packages = [
  {
    icon: PackageIcon,
    title: "Pakket 1: Basis Ontruiming",
    description: "Volledige ontruiming van uw woning of kantoor. Inclusief sortering, afvoer en bezemklare oplevering.",
    features: [
      "Complete ontruiming",
      "Waardevolle spullen apart houden",
      "Sortering en afvoer",
      "Bezemklare oplevering",
    ],
  },
  {
    icon: SparklesIcon,
    title: "Pakket 2: Ontruiming + Poetsen",
    description: "Ontruiming met professionele schoonmaak. Alles uit handen geven voor een instapklare ruimte.",
    features: [
      "Alles van Pakket 1",
      "Grondige schoonmaak",
      "Ramen wassen",
      "Instapklaar resultaat",
    ],
  },
  {
    icon: ZapIcon,
    title: "Pakket 3: All-in Service",
    description: "Complete ontzorging met ontruiming, poetsen én elektriciteitswerken. Volledig zorgeloos!",
    features: [
      "Alles van Pakket 2",
      "Elektriciteitswerken",
      "Kleine herstellingen",
      "Totale ontzorging",
    ],
  },
];

const benefits = [
  {
    icon: ClipboardListIcon,
    title: "Totaalontzorging",
    description: "Van A tot Z geregeld",
  },
  {
    icon: ClockIcon,
    title: "Efficiënt en Snel",
    description: "Snelle uitvoering",
  },
  {
    icon: RecycleIcon,
    title: "Discreet & Respectvol",
    description: "Met respect voor uw situatie",
  },
  {
    icon: LeafIcon,
    title: "Milieubewust",
    description: "Duurzaam werken",
  },
];

export const DienstenPage = () => {
  return (
    <Layout>
      <section className="w-full overflow-hidden bg-white">
        <div
          className="relative w-full py-16 md:py-24 lg:py-32 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 to-blue-100/60" />
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-[#0c3065] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Onze Diensten
              </h1>
              <h2 className="text-[#0c3065] text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
                Ontruiming, Afvalverwerking & Elektriciteit
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                Of het nu gaat om ontruiming, afvalverwerking of elektriciteitswerken – wij bieden
                een complete, professionele service die perfect aansluit bij uw situatie. Snel,
                discreet en met volledige ontzorging van begin tot eind.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
            <div className="order-2 lg:order-1">
              <img
                src="/huis.png"
                alt="Woningontruiming"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Woningontruiming
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Van kelder tot zolder – wij zorgen voor een complete en zorgvuldige ontruiming
                van uw woning, appartement of studio. Perfect voor verhuizingen, erfenissen of
                renovaties.
              </p>

              <div className="space-y-3 mb-6">
                {woningFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-[#2678d1] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-sm md:text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Vraag Offerte Aan
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
            <div>
              <h2 className="text-[#0c3065] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Kantoorontruiming
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Efficiënte ontruiming van kantoorruimtes, bedrijfspanden en commerciële gebouwen.
                Wij werken snel en discreet, zodat uw bedrijfsactiviteiten minimaal worden verstoord.
              </p>

              <div className="space-y-3 mb-6">
                {kantoorFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-[#2678d1] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-sm md:text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Vraag Offerte Aan
                </Button>
              </Link>
            </div>

            <div>
              <img
                src="/kantoor.png"
                alt="Kantoorontruiming"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
            <div className="order-2 lg:order-1">
              <img
                src="/download.jpeg"
                alt="Elektriciteitswerken"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Elektriciteitswerken
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Professionele elektriciteitswerken voor particulieren en bedrijven. Van kleine
                herstellingen tot complete nieuwe installaties – veilig en conform alle normen.
              </p>

              <div className="space-y-3 mb-6">
                {elektriciteitFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-[#2678d1] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-sm md:text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Vraag Offerte Aan
                </Button>
              </Link>
            </div>
          </div>

          <div className="mb-16 lg:mb-20">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
              Kies Uw Pakket
            </h2>
            <p className="text-gray-700 text-base md:text-lg text-center max-w-3xl mx-auto mb-12">
              Wij bieden drie pakketten aan, afgestemd op uw specifieke behoeften. Vraag een offerte aan voor het pakket dat bij u past.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
              {packages.map((pkg, index) => {
                const IconComponent = pkg.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-[#e8f2ff] p-6 md:p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-[#2678d1] transition-all duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#e8f2ff] rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-[#2678d1]" />
                    </div>
                    <h3 className="text-[#0c3065] text-xl md:text-2xl font-bold mb-3 text-center">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base mb-6 text-center">
                      {pkg.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2Icon className="w-5 h-5 text-[#2678d1] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="block">
                      <Button className="w-full px-6 py-3 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-sm md:text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                        Vraag Offerte Aan
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16 lg:mb-20">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
              Waarom kiezen voor EcoRuim
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#e8f2ff] p-6 md:p-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-[#2678d1]" />
                    </div>
                    <h3 className="text-[#0c3065] text-lg md:text-xl font-bold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#0c3065] rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Klaar om de ontruiming
            </h2>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
              zorgeloos uit handen te geven?
            </h3>
            <a href="tel:+32486973250">
              <Button className="px-8 py-4 rounded-lg shadow-md bg-white hover:bg-gray-100 active:scale-95 transition-all duration-200 text-[#0c3065] font-semibold text-base focus:ring-2 focus:ring-white focus:ring-offset-2">
                0486 97 32 50
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
