import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FooterSection from "../sections/FooterSection";

const QuiSommesNousPage = () => {
  useGSAP(() => {
    gsap.fromTo(".about-header", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(".about-section", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 0.3, ease: "power2.out" }
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="about-header text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Qui <span className="text-blue-600">Sommes-Nous</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FitByM2A, votre partenaire expert dans le secteur aquatique, alliant passion, expertise et excellence pour tous vos projets.
          </p>
        </div>

        {/* Mission */}
        <div className="about-section mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Depuis notre création, FitByM2A s'est donné pour mission d'accompagner les professionnels et les structures du secteur aquatique dans leur développement et leur réussite.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nous mettons notre expertise au service de vos projets, qu'il s'agisse de recrutement spécialisé, de formation professionnelle, de conseil en gestion ou de développement d'activités aquatiques.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre approche personnalisée et notre connaissance approfondie du secteur nous permettent de vous proposer des solutions sur mesure, adaptées à vos besoins spécifiques.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence Aquatique</h3>
                <p className="text-gray-600">Votre réussite, notre engagement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="about-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fort d'une expérience significative dans le secteur aquatique, nous maîtrisons tous les aspects de ce domaine d'activité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recrutement</h3>
              <p className="text-gray-600 text-sm">Spécialistes qualifiés</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Formation</h3>
              <p className="text-gray-600 text-sm">Certifications officielles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conseil</h3>
              <p className="text-gray-600 text-sm">Solutions personnalisées</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestion</h3>
              <p className="text-gray-600 text-sm">Optimisation d'établissements</p>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="about-section mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Des principes fondamentaux qui guident notre action au quotidien et fondent la confiance de nos partenaires.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Expertise</h3>
                <p className="text-blue-100">
                  Une connaissance approfondie du secteur aquatique et de ses spécificités techniques et réglementaires.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Qualité</h3>
                <p className="text-blue-100">
                  Des prestations irréprochables et un accompagnement personnalisé pour garantir votre satisfaction.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Partenariat</h3>
                <p className="text-blue-100">
                  Des relations durables basées sur la confiance mutuelle et l'engagement à long terme.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="about-section text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à collaborer avec nous ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment FitByM2A peut vous accompagner dans vos projets aquatiques. 
              Contactez-nous pour une première discussion sans engagement.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 text-lg">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default QuiSommesNousPage;