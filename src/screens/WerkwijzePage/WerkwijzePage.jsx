import React from "react";
import { Layout } from "../../components/Layout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Contact & Intake",
    description: "U neemt contact met ons op via telefoon, e-mail of ons contactformulier. We bespreken uw situatie en maken een afspraak voor een vrijblijvende bezichtiging.",
    details: [
      "Telefonisch of online contact",
      "Eerste inventarisatie van uw wensen",
      "Planning afspraak binnen 48 uur",
    ],
  },
  {
    number: "02",
    title: "Bezichtiging & Offerte",
    description: "Een van onze specialisten komt bij u langs voor een grondige inspectie. We beoordelen de omvang van de klus en eventuele bijzonderheden.",
    details: [
      "Professionele inspectie ter plaatse",
      "Inventarisatie van alle ruimtes",
      "Transparante offerte binnen 24 uur",
    ],
  },
  {
    number: "03",
    title: "Planning & Voorbereiding",
    description: "Na akkoord op de offerte plannen we de ontruiming op een moment dat u uitkomt. We zorgen voor alle benodigde middelen en mankracht.",
    details: [
      "Flexibele planning naar uw wensen",
      "Voorbereiding materiaal en team",
      "Duidelijke communicatie over het proces",
    ],
  },
  {
    number: "04",
    title: "Ontruiming",
    description: "Ons ervaren team voert de ontruiming professioneel en efficiënt uit. We werken snel maar zorgvuldig, met respect voor uw eigendommen en omgeving.",
    details: [
      "Volledig verzorgd door ons team",
      "Zorgvuldige behandeling van spullen",
      "Gescheiden afvalinzameling",
    ],
  },
  {
    number: "05",
    title: "Afvalverwerking",
    description: "Al het materiaal wordt verantwoord verwerkt. We scheiden afval en zorgen voor maximale recycling volgens de geldende milieunormen.",
    details: [
      "Duurzame afvalverwerking",
      "Maximaal recyclen",
      "Certificaten van verwerking",
    ],
  },
  {
    number: "06",
    title: "Oplevering",
    description: "De ruimte wordt bezemschoon opgeleverd. We controleren samen met u of alles naar wens is uitgevoerd en zorgen voor een nette administratieve afronding.",
    details: [
      "Bezemschone oplevering",
      "Gezamenlijke eindcontrole",
      "Factuur en eventuele certificaten",
    ],
  },
];

const principles = [
  {
    title: "Transparantie",
    description: "Geen verborgen kosten. U weet vooraf exact waar u aan toe bent.",
  },
  {
    title: "Betrouwbaarheid",
    description: "We houden ons aan afspraken en leveren kwaliteit die we beloven.",
  },
  {
    title: "Respect",
    description: "Discreet en respectvol, met oog voor uw persoonlijke situatie.",
  },
  {
    title: "Duurzaamheid",
    description: "Milieubewust werken staat bij ons altijd voorop.",
  },
];

export const WerkwijzePage = () => {
  return (
    <Layout>
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-[#0c3065] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Onze Werkwijze
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Een ontruiming is meer dan alleen spullen weghalen. Bij EcoRuim werken we volgens een
              gestructureerd proces dat zorgt voor een vlotte en zorgeloze ervaring.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 mb-16">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-2 bg-[#2678d1] p-6 md:p-8 flex items-center justify-center">
                      <span className="text-white text-4xl md:text-5xl font-bold">
                        {step.number}
                      </span>
                    </div>

                    <div className="lg:col-span-10 p-6 md:p-8">
                      <h3 className="text-[#0c3065] text-xl md:text-2xl font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="bg-[#f0f7ff] px-4 py-2 rounded-lg text-sm md:text-base text-gray-700"
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#e8f2ff] border-0 rounded-2xl mb-12">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-8 text-center">
                Onze Kernwaarden
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-[#2678d1] text-lg md:text-xl font-bold mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-4">
              Klaar voor een Zorgeloze Ontruiming?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Laat ons u ontzorgen. Neem contact op voor een vrijblijvend gesprek
              over uw situatie en ontdek hoe wij u kunnen helpen.
            </p>
            <Link to="/contact">
              <Button className="px-8 py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                Start Nu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
