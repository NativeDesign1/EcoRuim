import React from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "../../components/Layout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const richtprijzen = [
  {
    type: "Studio / klein appartement",
    prijs: "€400 – €800",
    omschrijving: "Eén woonruimte, keuken en badkamer. Meestal op één dag klaar.",
  },
  {
    type: "Appartement 2 – 3 slaapkamers",
    prijs: "€800 – €1.800",
    omschrijving: "Volledige inboedel inclusief berging. Eén tot twee dagen werk.",
  },
  {
    type: "Eengezinswoning",
    prijs: "€1.500 – €3.500",
    omschrijving: "Inclusief kelder, zolder en garage. Doorgaans twee dagen.",
  },
  {
    type: "Grote woning / bedrijfspand",
    prijs: "Op maat",
    omschrijving: "Vrijstaande woningen, kantoren en bedrijfsruimtes. Prijs na plaatsbezoek.",
  },
];

const factoren = [
  {
    title: "Hoeveelheid inboedel",
    description:
      "Een volgestouwde zolder of kelder vraagt meer tijd dan een half leeggemaakte woning.",
  },
  {
    title: "Toegankelijkheid",
    description:
      "Een tweede verdieping zonder lift kost aanzienlijk meer werkuren dan een gelijkvloers met oprit.",
  },
  {
    title: "Aard van het materiaal",
    description:
      "Gewone inboedel is eenvoudig. Bouwafval, gevaarlijk afval of grote elektro vragen aparte verwerking.",
  },
  {
    title: "Restwaarde van de inboedel",
    description:
      "Meubels en elektro in goede staat verlagen de prijs, omdat wij die waarde verrekenen.",
  },
];

export const TarievenPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Tarieven Ontruiming | EcoRuim – Wat Kost een Ontruiming?</title>
        <meta
          name="description"
          content="Wat kost een ontruiming in Vlaanderen? Bekijk onze richtprijzen per woningtype, ontdek welke factoren de prijs bepalen en vraag een vaste prijs aan na kosteloos plaatsbezoek."
        />
        <link rel="canonical" href="https://ecoruim.be/tarieven" />
        <meta property="og:title" content="Tarieven Ontruiming | EcoRuim – Wat Kost een Ontruiming?" />
        <meta
          property="og:description"
          content="Richtprijzen per woningtype en uitleg over wat de prijs van een ontruiming bepaalt. Transparant en zonder verborgen kosten."
        />
        <meta property="og:url" content="https://ecoruim.be/tarieven" />
      </Helmet>

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-[#0c3065] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Wat Kost een Ontruiming?
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Elke woning is anders, dus een exacte prijs geven wij pas na een plaatsbezoek.
              Deze richtprijzen geven u alvast een realistisch beeld.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 md:mb-16">
            {richtprijzen.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="bg-[#2678d1] px-6 py-4">
                    <p className="text-white text-2xl md:text-3xl font-bold">
                      {item.prijs}
                    </p>
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 className="text-[#0c3065] text-lg md:text-xl font-bold mb-3">
                      {item.type}
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.omschrijving}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#e8f2ff] border-0 rounded-2xl mb-12 md:mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-8 text-center">
                Wat Bepaalt de Prijs?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {factoren.map((factor, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-[#2678d1] text-lg md:text-xl font-bold mb-3">
                      {factor.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white mb-12 md:mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-6">
                Inboedel Wordt Verrekend
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Veel ontruimingsbedrijven rekenen een vast bedrag en verkopen achteraf wat
                waarde heeft. Wij maken dat transparant: meubilair, elektro, gereedschap en
                verzamelobjecten in goede staat hebben restwaarde, en die brengen wij in
                mindering op uw offerte.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Bij een goed gevulde woning kan dat de kost aanzienlijk drukken. Tijdens het
                plaatsbezoek noteren wij samen met u wat in aanmerking komt. Wij verkopen
                nooit iets zonder uw akkoord.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-4">
              Een Vaste Prijs voor uw Situatie
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Het plaatsbezoek en de offerte zijn kosteloos en vrijblijvend. U krijgt een
              vaste prijs, geen schatting die achteraf tegenvalt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+32486973250">
                <Button className="px-8 py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Bel 0486 97 32 50
                </Button>
              </a>
              <Link to="/contact">
                <Button className="px-8 py-4 rounded-lg shadow-md bg-white hover:bg-gray-50 hover:shadow-lg active:scale-95 transition-all duration-200 text-[#2678d1] border border-[#2678d1] font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Vraag een Offerte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
