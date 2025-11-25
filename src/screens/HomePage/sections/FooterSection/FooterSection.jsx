import React from "react";
import { Link } from "react-router-dom";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import logo from "../../../../assets/logo.svg";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Diensten", path: "/diensten" },
  { label: "Werkwijze", path: "/werkwijze" },
  { label: "Over Ons", path: "/over-ons" },
  { label: "Contact", path: "/contact" },
];

export const FooterSection = () => {
  return (
    <footer className="w-full bg-[#f8f9fa] py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="space-y-3">
            <Link to="/">
              <img className="h-32 w-auto" alt="Logo" src={logo} />
            </Link>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              "EcoRuim is uw betrouwbare partner voor woningontruiming, bedrijfsontruiming en afvalverwerking in Vlaanderen – snel, discreet en duurzaam."
            </p>
          </div>

          <nav className="space-y-3">
            <h4 className="text-black text-sm sm:text-base md:text-lg font-bold mb-2 md:mb-3">
              Navigatie
            </h4>
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block text-gray-700 text-xs sm:text-sm md:text-base hover:text-[#2678d1] transition-all duration-200 hover:translate-x-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3">
            <h4 className="text-black text-sm sm:text-base md:text-lg font-bold mb-2 md:mb-3">
              Werkgebied
            </h4>
            <div className="flex items-start gap-2">
              <MapPinIcon className="w-5 h-5 text-[#2678d1] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                Heel Vlaanderen – o.a. Antwerpen, Gent, Brugge, Leuven en omliggende gemeenten.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-black text-sm sm:text-base md:text-lg font-bold mb-2 md:mb-3">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@ecoruim.be"
                className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm md:text-base hover:text-[#2678d1] transition-all duration-200 hover:translate-x-1"
              >
                <MailIcon className="w-5 h-5 text-[#2678d1] flex-shrink-0" />
                <span className="break-all">info@ecoruim.be</span>
              </a>
              <a
                href="tel:+32486973250"
                className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm md:text-base hover:text-[#2678d1] transition-all duration-200 hover:translate-x-1"
              >
                <PhoneIcon className="w-5 h-5 text-[#2678d1] flex-shrink-0" />
                <span>+32 486 9732 50</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-600 text-xs md:text-sm">
            © 2025 EcoRuim – Alle rechten voorbehouden | Privacybeleid | Algemene voorwaarden
          </p>
        </div>
      </div>
    </footer>
  );
};
