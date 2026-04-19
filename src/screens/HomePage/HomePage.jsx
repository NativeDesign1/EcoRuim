import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>EcoRuim – Professionele Ontruiming & Afvalverwerking in Vlaanderen</title>
        <meta name="description" content="EcoRuim is uw betrouwbare partner voor professionele ontruiming van woningen, kantoren en bedrijfsruimtes in heel Vlaanderen. Snel, duurzaam en betaalbaar. Vraag gratis offerte aan!" />
        <link rel="canonical" href="https://ecoruim.be/" />
        <meta property="og:title" content="EcoRuim – Professionele Ontruiming & Afvalverwerking in Vlaanderen" />
        <meta property="og:description" content="Uw betrouwbare partner voor professionele ontruiming van woningen, kantoren en bedrijfsruimtes. Snel, duurzaam en betaalbaar." />
        <meta property="og:url" content="https://ecoruim.be/" />
      </Helmet>
      <HeroSection />
      <ExpertiseSection />
      <BenefitsSection />
      <ContactSection />
    </Layout>
  );
};
