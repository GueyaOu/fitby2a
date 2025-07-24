import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <div className="2xl:h-[110dvh] relative md:pt-[10vh] pt-[5vh]">
        
        {/* FitByM2A Logo Section */}
        <div className="flex-center mb-16">
          <div className="text-center">
            <img
              src="/logo-new.png"
              alt="FitByM2A Logo"
              className="h-24 md:h-32 mx-auto mb-4"
            />
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">FitByM2A</h1>
            <p className="text-lg text-gray-300">Excellence Aquatique</p>
          </div>
        </div>

        {/* Services & Contact Grid */}
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-20">
            
            {/* Nos Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                Nos Services
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Recrutement Aquatique
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Cours de Natation
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Formation Professionnelle
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Gestion d'Établissements
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Consultation Technique
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                Contact
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="hover:text-blue-400 transition-colors cursor-pointer">
                    contact@fitbym2a.com
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Téléphone</p>
                  <p className="hover:text-blue-400 transition-colors cursor-pointer">
                    +33 (0)1 XX XX XX XX
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Adresse</p>
                  <p>Paris, France</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                Newsletter
              </h3>
              <p className="text-gray-300 mb-6">
                Restez informé de nos dernières actualités et opportunités dans le secteur aquatique.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex-center gap-6 mb-12">
          <div className="social-btn hover:bg-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </div>
          <div className="social-btn hover:bg-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </div>
          <div className="social-btn hover:bg-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-box border-t border-gray-700 pt-8">
          <p>Copyright © 2025 FitByM2A - Tous droits réservés</p>
          <div className="flex items-center gap-7">
            <p className="hover:text-blue-400 transition-colors cursor-pointer">Politique de Confidentialité</p>
            <p className="hover:text-blue-400 transition-colors cursor-pointer">Conditions d'Utilisation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
