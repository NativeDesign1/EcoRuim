import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { HeroSection } from "./sections/HeroSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ExpertiseSection />
      <BenefitsSection />
      <ContactSection />
    </Layout>
  );
};
