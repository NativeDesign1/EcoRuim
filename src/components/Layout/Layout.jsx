import React, { useEffect } from "react";
import { TopbarSection } from "../../screens/HomePage/sections/TopbarSection";
import { NavbarSection } from "../../screens/HomePage/sections/NavbarSection";
import { FooterSection } from "../../screens/HomePage/sections/FooterSection";

export const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <TopbarSection />
      <NavbarSection />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
};
