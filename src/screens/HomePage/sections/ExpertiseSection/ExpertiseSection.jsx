import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Home, Building2, SprayCanIcon, Recycle, ZapIcon } from "lucide-react";
import { Link } from "react-router-dom";

const expertiseCards = [
  {
    id: 1,
    icon: Home,
    title: "Complete Woningontruiming",
    description:
      "Van appartement tot villa, wij zorgen voor een zorgeloze en bezemklare oplevering van uw woning na verhuizing, overlijden of verkoop.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Bedrijfs- en Kantoorontruiming",
    description:
      "Efficiënte en discrete ontruiming van kantoren, winkels, magazijnen en andere bedrijfspanden. Wij minimaliseren verstoringen.",
  },
  {
    id: 3,
    icon: SprayCanIcon,
    title: "Grondige Schoonmaak",
    description:
      "Indien gewenst zorgen wij voor een grondige schoonmaak van de woning, door onze grondige hygiene inspectie.",
  },
  {
    id: 4,
    icon: Recycle,
    title: "Professioneel Afvalbeheer",
    description:
      "Wij regelen de complete sortering, het transport en de milieuvriendelijke verwerking van alle vrijgekomen materialen.",
  },
  {
    id: 5,
    icon: ZapIcon,
    title: "Elektriciteitswerken",
    description:
      "Professionele elektriciteitsinstallaties en -herstellingen voor particulieren en bedrijven. Veilig en conform alle normen.",
  },
];

export const ExpertiseSection = () => {
  return (
    <section className="w-full bg-[#f0f7ff] py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[#0c3065] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Onze Expertise: Ontruiming, Afvalbeheer & Elektriciteit
          </h2>
          <p className="text-[#0c3065d9] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            "Bij EcoRuim zijn we gespecialiseerd in het volledig ontzorgen van onze klanten. Wij bieden een breed scala aan diensten, zowel voor particulieren als bedrijven, waaronder:"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mb-8 md:mb-12">
          {expertiseCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.id}
                className="bg-white rounded-3xl shadow-lg border-0 hover:shadow-xl transition-shadow"
              >
                <CardContent className="flex flex-col items-center text-center p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center bg-[#e8f2ff] rounded-2xl transition-transform duration-300 hover:scale-110">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#2678d1]" />
                  </div>

                  <h3 className="text-black text-lg md:text-xl font-bold mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link to="/diensten">
            <Button className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-5 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-sm sm:text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
              Lees Meer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
