import React from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "../../components/Layout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    vraag: "Wat kost een ontruiming?",
    antwoord:
      "De prijs hangt af van de omvang van de woning, de hoeveelheid inboedel en de toegankelijkheid. Een studio of klein appartement begint doorgaans rond €400 tot €800. Voor een appartement met twee of drie slaapkamers ligt dat tussen €800 en €1.800. Een volledige eengezinswoning met kelder en zolder komt meestal uit tussen €1.500 en €3.500. Wat wij kunnen doorverkopen, brengen wij in mindering op de eindprijs. U krijgt altijd een vaste prijs na een kosteloos plaatsbezoek.",
  },
  {
    vraag: "Hoe lang duurt een ontruiming?",
    antwoord:
      "Een appartement of studio is meestal op één dag klaar. Een eengezinswoning met kelder, zolder en garage vraagt doorgaans één tot twee dagen. Bij grotere panden of moeilijke toegankelijkheid, bijvoorbeeld een hoge verdieping zonder lift, kan het langer duren. Bij het plaatsbezoek geven wij u een concrete inschatting.",
  },
  {
    vraag: "Wat gebeurt er met de spullen die worden opgehaald?",
    antwoord:
      "Alles wordt gesorteerd. Meubels, elektro en gebruiksvoorwerpen in goede staat krijgen een tweede leven via hergebruik of doorverkoop. De rest wordt gescheiden afgevoerd naar erkende verwerkers volgens de Vlaamse milieureglementering. Tot 95% van het materiaal wordt op die manier hergebruikt of gerecycleerd in plaats van gestort.",
  },
  {
    vraag: "Moet ik aanwezig zijn tijdens de ontruiming?",
    antwoord:
      "Nee. Veel klanten geven ons een sleutel en een korte lijst van wat bewaard moet blijven. Dat komt vaak voor bij erfenisontruimingen, waar aanwezig zijn emotioneel zwaar kan wegen. U krijgt achteraf foto's van de opgeleverde woning.",
  },
  {
    vraag: "Wat is het verschil tussen een ontruiming en een uithuiszetting?",
    antwoord:
      "Een uithuiszetting is een juridische procedure waarbij een bewoner gedwongen de woning moet verlaten. Die wordt uitgevoerd door een gerechtsdeurwaarder na een vonnis. Een ontruiming zoals wij die uitvoeren is een dienstverlening: het leegmaken en opruimen van een pand in opdracht van de eigenaar, huurder, erfgenaam of makelaar. Wij voeren geen gedwongen uithuiszettingen uit.",
  },
  {
    vraag: "Leveren jullie de woning bezemschoon op?",
    antwoord:
      "Ja. Standaard wordt de woning leeg en bezemschoon opgeleverd, klaar voor sleuteloverdracht, verkoop of nieuwe bewoning. Wenst u een grondiger eindreiniging, dan kan dat in overleg worden toegevoegd aan de offerte.",
  },
  {
    vraag: "Kunnen jullie waardevolle spullen verrekenen in de prijs?",
    antwoord:
      "Dat doen wij standaard. Meubilair, elektro, gereedschap en verzamelobjecten in goede staat hebben restwaarde. Wij noteren die tijdens het plaatsbezoek en brengen de geschatte waarde in mindering op de offerte. Bij een goed gevulde woning kan dat de kost aanzienlijk drukken. Wij verkopen niets zonder uw akkoord.",
  },
  {
    vraag: "In welke regio's werken jullie?",
    antwoord:
      "Wij werken in heel Vlaanderen, met een zwaartepunt in Limburg, Antwerpen en Vlaams-Brabant. Ook opdrachten in Oost- en West-Vlaanderen zijn bespreekbaar. Neem gerust contact op om na te gaan of uw locatie binnen ons werkgebied valt.",
  },
  {
    vraag: "Hoe snel kunnen jullie ter plaatse zijn?",
    antwoord:
      "Voor een vrijblijvend plaatsbezoek kunnen wij meestal binnen enkele werkdagen langskomen. De ontruiming zelf plannen wij in overleg, op een datum die u past. Is er een deadline door een verkoop of einde huurcontract, laat dat dan weten bij het eerste contact.",
  },
  {
    vraag: "Verwerken jullie ook asbest of gevaarlijk afval?",
    antwoord:
      "Asbest laten wij verwijderen door een erkende asbestverwijderaar. Wij kunnen u daarnaar doorverwijzen en de rest van de ontruiming voor onze rekening nemen. Gevaarlijk afval zoals verf, oliën en batterijen voeren wij gescheiden af naar de daarvoor bestemde verwerkers.",
  },
];

export const FaqPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Veelgestelde Vragen | EcoRuim – Ontruiming in Vlaanderen</title>
        <meta
          name="description"
          content="Antwoorden op veelgestelde vragen over ontruiming: wat kost het, hoe lang duurt het, wat gebeurt er met de inboedel en wat is het verschil met een uithuiszetting."
        />
        <link rel="canonical" href="https://ecoruim.be/veelgestelde-vragen" />
        <meta property="og:title" content="Veelgestelde Vragen over Ontruiming | EcoRuim" />
        <meta
          property="og:description"
          content="Prijzen, duur, afvalverwerking en werkwijze: de meest gestelde vragen over ontruiming, helder beantwoord."
        />
        <meta property="og:url" content="https://ecoruim.be/veelgestelde-vragen" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.vraag,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.antwoord,
              },
            })),
          })}
        </script>
      </Helmet>

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-[#0c3065] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Veelgestelde Vragen
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              De vragen die wij het vaakst krijgen over ontruiming, prijzen en
              afvalverwerking — helder en zonder kleine lettertjes beantwoord.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 mb-12 md:mb-16">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-[#0c3065] text-lg md:text-xl font-bold mb-3">
                    {faq.vraag}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {faq.antwoord}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-4">
              Staat uw Vraag Er Niet Bij?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Bel of mail ons gerust. We denken graag mee over uw situatie, ook als u
              nog niet zeker weet wat er precies nodig is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+32486973250">
                <Button className="px-8 py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Bel 0486 97 32 50
                </Button>
              </a>
              <Link to="/contact">
                <Button className="px-8 py-4 rounded-lg shadow-md bg-white hover:bg-gray-50 hover:shadow-lg active:scale-95 transition-all duration-200 text-[#2678d1] border border-[#2678d1] font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Stel uw Vraag
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
