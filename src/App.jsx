import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useState, useEffect } from "react";
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
  const [isReady, setIsReady] = useState(false);

  // Complete cleanup and reset on route change
  useLayoutEffect(() => {
    setIsReady(false);
    
    // Comprehensive cleanup
    ScrollTrigger.killAll();
    ScrollTrigger.clearMatchMedia();
    
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.kill(true);
    }
    
    // Force reset all GSAP tweens and timelines
    gsap.killTweensOf("*");
    gsap.set("*", { clearProps: "all" });
    
    // Reset DOM state
    document.body.style.cssText = '';
    document.documentElement.style.cssText = '';
    document.body.classList.remove('scroll-smooth');
    
    // Reset scroll
    window.scrollTo(0, 0);
    
    // Force refresh ScrollTrigger
    ScrollTrigger.refresh();
    
    // Small delay to ensure cleanup is complete
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Create ScrollSmoother only for home page after cleanup
  useGSAP(() => {
    if (isHomePage && isReady) {
      // Add body class for ScrollSmoother
      document.body.classList.add('scroll-smooth');
      
      const smoother = ScrollSmoother.create({
        smooth: 3,
        effects: true,
        normalizeScroll: true
      });
      
      return () => {
        smoother?.kill();
        document.body.classList.remove('scroll-smooth');
      };
    }
  }, [isHomePage, isReady]);

  // Don't render content until cleanup is complete
  if (!isReady) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#f8f9fa',
        zIndex: 9999 
      }}>
        <NavBar />
      </div>
    );
  }

  return (
    <>
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
    </>
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
