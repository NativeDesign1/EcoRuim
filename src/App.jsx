import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { DienstenPage } from "./screens/DienstenPage";
import { WerkwijzePage } from "./screens/WerkwijzePage";
import { OverOnsPage } from "./screens/OverOnsPage";
import { ContactPage } from "./screens/ContactPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diensten" element={<DienstenPage />} />
        <Route path="/werkwijze" element={<WerkwijzePage />} />
        <Route path="/over-ons" element={<OverOnsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};
