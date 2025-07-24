import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import FooterSection from "../sections/FooterSection";

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useGSAP(() => {
    gsap.fromTo(".faq-header", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(".faq-item", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.3, ease: "power2.out" }
    );
  });

  const faqs = [
    {
      question: "Quels sont les services proposés par FitByM2A ?",
      answer: "FitByM2A propose plusieurs services spécialisés dans le secteur aquatique : recrutement de professionnels qualifiés, cours de natation, formations certifiantes, conseil en gestion d'établissements aquatiques et consultation technique pour vos projets."
    },
    {
      question: "Comment se déroule le processus de recrutement ?",
      answer: "Notre processus de recrutement comprend : l'analyse de vos besoins, la présélection de candidats qualifiés dans notre réseau, l'évaluation technique et comportementale, puis la présentation des profils les plus adaptés à votre structure."
    },
    {
      question: "Quelles certifications sont proposées en formation ?",
      answer: "Nous proposons des formations certifiantes comme le BPJEPS Activités Aquatiques et de la Natation, des formations continues pour les professionnels en activité, ainsi que des perfectionnements techniques spécialisés."
    },
    {
      question: "Quel est le délai moyen pour un recrutement ?",
      answer: "Le délai varie selon le profil recherché et la spécificité du poste. En moyenne, nous présentons les premiers candidats sous 15 jours et finalisons le recrutement sous 4 à 6 semaines."
    },
    {
      question: "Proposez-vous des cours de natation pour tous les âges ?",
      answer: "Oui, nos cours s'adressent à tous : bébés nageurs, enfants, adultes débutants ou confirmés, perfectionnement technique, préparation aux examens aquatiques, et accompagnement personnalisé."
    },
    {
      question: "Comment évaluez-vous la qualité des candidats ?",
      answer: "Nous vérifions systématiquement les diplômes et certifications, évaluons les compétences techniques en situation, analysons l'expérience professionnelle et testons les qualités relationnelles et pédagogiques."
    },
    {
      question: "Intervenez-vous partout en France ?",
      answer: "Oui, FitByM2A intervient sur l'ensemble du territoire français. Nous nous déplaçons selon les besoins et pouvons également organiser des formations dans vos locaux."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont établis sur devis personnalisé selon vos besoins spécifiques. Nous vous invitons à nous contacter pour obtenir une proposition adaptée à votre projet."
    },
    {
      question: "Proposez-vous un suivi après recrutement ?",
      answer: "Absolument. Nous assurons un suivi pendant la période d'intégration pour garantir la réussite du recrutement et nous restons disponibles pour tout accompagnement complémentaire."
    },
    {
      question: "Comment puis-je candidater pour rejoindre votre réseau ?",
      answer: "Vous pouvez nous envoyer votre candidature à fitbym2a@gmail.com avec votre CV, vos certifications et une lettre de motivation. Nous évaluons tous les profils qualifiés du secteur aquatique."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <div className="faq-header text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Questions <span className="text-blue-600">Fréquentes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez ici les réponses aux questions les plus fréquemment posées sur nos services et notre expertise dans le secteur aquatique.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-3">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </h2>
          <p className="text-gray-600 mb-6">
            N'hésitez pas à nous contacter directement. Notre équipe se fera un plaisir de vous renseigner.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
            Nous contacter
          </button>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default FAQPage;