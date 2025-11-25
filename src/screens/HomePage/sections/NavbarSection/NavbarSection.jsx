import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../../../../assets/logo.svg";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Diensten", path: "/diensten" },
  { label: "Werkwijze", path: "/werkwijze" },
  { label: "Over Ons", path: "/over-ons" },
  { label: "Contact", path: "/contact" },
];

export const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/">
            <img
              src={logo}
              alt="EcoRuim Logo"
              className="h-32 md:h-48 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-[#000000bd] text-sm font-medium hover:text-[#0c3065] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2678d1] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button className="hidden lg:flex px-6 py-2.5 rounded-lg shadow-sm bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-md active:scale-95 transition-all duration-200 text-white font-semibold text-sm focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
            0486 97 32 50
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-[#0c3065]" /> : <Menu className="w-6 h-6 text-[#0c3065]" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-[#000000bd] text-base font-medium hover:text-[#0c3065] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full mt-2 px-6 py-3 rounded-lg shadow-sm bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-md active:scale-95 transition-all duration-200 text-white font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
              0486 97 32 50
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
