import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import QuiSommesNousPage from "./pages/QuiSommesNousPage";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage";
import GestionCookiesPage from "./pages/GestionCookiesPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import DonneesPersonnellesPage from "./pages/DonneesPersonnellesPage";
import ConditionsGeneralesVentePage from "./pages/ConditionsGeneralesVentePage";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useGSAP(() => {
    if (isHomePage) {
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
      });
    }
  }, [isHomePage]);

  useEffect(() => {
    // Manage scroll behavior based on page
    if (isHomePage) {
      document.body.classList.add('scroll-smooth');
    } else {
      document.body.classList.remove('scroll-smooth');
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      if (!isHomePage) {
        document.body.classList.remove('scroll-smooth');
      }
    };
  }, [isHomePage]);

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNousPage />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="/gestion-cookies" element={<GestionCookiesPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/donnees-personnelles" element={<DonneesPersonnellesPage />} />
        <Route path="/conditions-generales-vente" element={<ConditionsGeneralesVentePage />} />
      </Routes>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
