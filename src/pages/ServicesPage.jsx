import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FooterSection from "../sections/FooterSection";

const ServicesPage = () => {
  useGSAP(() => {
    gsap.fromTo(".services-header", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(".service-card", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 0.3, ease: "power2.out" }
    );
  });

  const services = [
    {
      title: "Recrutement Aquatique",
      description: "Recrutement spécialisé de professionnels qualifiés pour les installations aquatiques : maîtres-nageurs, moniteurs, responsables techniques.",
      features: ["Profils certifiés", "Évaluation technique", "Matching personnalisé"]
    },
    {
      title: "Cours de Natation",
      description: "Cours de natation adaptés à tous les niveaux, du débutant au perfectionnement, dispensés par des professionnels expérimentés.",
      features: ["Tous niveaux", "Méthodes modernes", "Suivi personnalisé"]
    },
    {
      title: "Formation Professionnelle",
      description: "Formations certifiantes pour les métiers de l'aquatique : BPJEPS, formations continues, perfectionnement technique.",
      features: ["Certifications officielles", "Formateurs experts", "Accompagnement personnalisé"]
    },
    {
      title: "Gestion d'Établissements",
      description: "Conseil et accompagnement dans la gestion opérationnelle d'établissements aquatiques : optimisation, management, développement.",
      features: ["Audit complet", "Optimisation opérationnelle", "Stratégie de développement"]
    },
    {
      title: "Consultation Technique",
      description: "Expertise technique pour vos projets aquatiques : conception, rénovation, mise aux normes, optimisation des installations.",
      features: ["Expertise reconnue", "Solutions innovantes", "Accompagnement projet"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="services-header text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nos <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FitByM2A vous accompagne dans tous vos projets liés au secteur aquatique avec une expertise reconnue et des solutions sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Un projet aquatique en tête ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner dans la réussite de votre projet.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 text-lg">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ServicesPage;