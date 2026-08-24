import React from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "../../components/Layout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const aanpak = [
  {
    title: "U bepaalt het tempo",
    description:
      "Een nalatenschap ontruimen is zelden dringend op de dag zelf. We plannen op een moment dat past bij de familie en bij de afspraken met de notaris.",
  },
  {
    title: "Aanwezigheid is niet verplicht",
    description:
      "Vindt u het te zwaar om erbij te zijn? Dan volstaat een sleutel en een korte lijst van wat bewaard moet blijven. U krijgt achteraf foto's van de opgeleverde woning.",
  },
  {
    title: "Persoonlijke stukken apart",
    description:
      "Documenten, foto's, brieven, sieraden en papieren van waarde worden apart gehouden en aan u overhandigd. Nooit weggegooid zonder overleg.",
  },
  {
    title: "Verrekening van de inboedel",
    description:
      "Meubels, elektro en gebruiksvoorwerpen in goede staat verkopen wij door. Die waarde brengen wij in mindering op de eindprijs, wat de kost aanzienlijk kan drukken.",
  },
];

const situaties = [
  {
    title: "Ontruiming na overlijden",
    description:
      "De woning van een overleden familielid volledig leegmaken en bezemschoon opleveren, klaar voor verkoop of teruggave aan de eigenaar.",
  },
  {
    title: "Verhuis naar een zorginstelling",
    description:
      "Wanneer iemand naar een woonzorgcentrum of assistentiewoning verhuist en de woning moet worden vrijgemaakt.",
  },
  {
    title: "Verdeling onder erfgenamen",
    description:
      "We ontruimen pas nadat de erfgenamen hebben aangeduid wat bewaard blijft. Wat blijft, zetten wij apart of leveren wij op een adres af.",
  },
  {
    title: "Opdracht via de notaris",
    description:
      "Wij werken geregeld in opdracht van notariskantoren. Eén aanspreekpunt, duidelijke offerte en tijdige oplevering voor de akte.",
  },
];

export const ErfenisontruimingPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Erfenisontruiming | EcoRuim – Respectvol Ontruimen na Overlijden</title>
        <meta
          name="description"
          content="Erfenisontruiming in heel Vlaanderen: discreet en respectvol een woning leegmaken na overlijden. Persoonlijke stukken apart, inboedel verrekend, bezemschoon opgeleverd."
        />
        <link rel="canonical" href="https://ecoruim.be/erfenisontruiming" />
        <meta property="og:title" content="Erfenisontruiming | EcoRuim – Respectvol Ontruimen na Overlijden" />
        <meta
          property="og:description"
          content="Discreet en respectvol een nalatenschap ontruimen. Wij ontzorgen nabestaanden en werken samen met notarissen in heel Vlaanderen."
        />
        <meta property="og:url" content="https://ecoruim.be/erfenisontruiming" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Erfenisontruiming",
            serviceType: "Erfenisontruiming",
            description:
              "Respectvolle en discrete ontruiming van een woning na overlijden of verhuis naar een zorginstelling, in heel Vlaanderen.",
            provider: {
              "@type": "LocalBusiness",
              name: "EcoRuim",
              url: "https://ecoruim.be",
              telephone: "+32486973250",
              email: "info@ecoruim.be",
            },
            areaServed: {
              "@type": "Place",
              name: "Vlaanderen, België",
            },
            url: "https://ecoruim.be/erfenisontruiming",
          })}
        </script>
      </Helmet>

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-[#0c3065] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Erfenisontruiming
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Een woning leegmaken na een overlijden is geen gewone klus. Wij nemen het
              werk uit handen van de familie, met de zorgvuldigheid die de situatie vraagt.
            </p>
          </div>

          <Card className="border-0 shadow-lg bg-white mb-12 md:mb-16">
            <CardContent className="p-8 md:p-12">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Na een overlijden komt er veel tegelijk op nabestaanden af. De administratie,
                de notaris, de verdeling van de nalatenschap — en dan nog een volledige woning
                die leeggemaakt moet worden, vaak binnen een termijn die door de verkoop of
                het huurcontract wordt opgelegd.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                EcoRuim verzorgt de volledige ontruiming van de woning: meubilair, inboedel,
                kelder, zolder, garage en tuinberging. Wat bewaard moet blijven, zetten we
                apart. De rest wordt gesorteerd en verantwoord verwerkt, waarbij tot 95%
                wordt hergebruikt of gerecycleerd in plaats van gestort.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                De woning wordt bezemschoon opgeleverd, klaar voor de sleuteloverdracht,
                de verkoop of de teruggave aan de eigenaar. Wij werken in heel Vlaanderen,
                met een zwaartepunt in Limburg, Antwerpen en Vlaams-Brabant.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12 md:mb-16">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-8 text-center">
              Onze Aanpak
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aanpak.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-[#2678d1] text-lg md:text-xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-[#e8f2ff] border-0 rounded-2xl mb-12 md:mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-8 text-center">
                Wanneer Schakelt u Ons In?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {situaties.map((situatie, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-[#2678d1] text-lg md:text-xl font-bold mb-3">
                      {situatie.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {situatie.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white mb-12 md:mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-6">
                Voor Notarissen en Uitvaartondernemers
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Krijgt u regelmatig de vraag van nabestaanden wie een woning kan leegmaken?
                EcoRuim werkt als vaste partner voor notariskantoren, uitvaartondernemers en
                vastgoedmakelaars in Vlaanderen.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                U hebt één aanspreekpunt, de familie krijgt een duidelijke offerte, en de
                woning is tijdig klaar voor de akte of de verkoop. Neem gerust contact op om
                de samenwerking te bespreken.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-4">
              Vrijblijvend Bespreken?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Bel of mail ons gerust. We luisteren eerst naar uw situatie en kijken daarna
              wat er praktisch nodig is. Een plaatsbezoek en offerte zijn altijd kosteloos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+32486973250">
                <Button className="px-8 py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Bel 0486 97 32 50
                </Button>
              </a>
              <Link to="/contact">
                <Button className="px-8 py-4 rounded-lg shadow-md bg-white hover:bg-gray-50 hover:shadow-lg active:scale-95 transition-all duration-200 text-[#2678d1] border border-[#2678d1] font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Stuur een Bericht
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
