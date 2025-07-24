import FooterSection from "../sections/FooterSection";

const GestionCookiesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Gestion des Cookies</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
              lors de la visite d'un site web. Il permet au site de mémoriser des informations sur votre visite, 
              comme votre langue de préférence et d'autres paramètres.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment utilisons-nous les cookies ?</h2>
            <p>
              FitByM2A utilise des cookies pour améliorer votre expérience de navigation sur notre site web. 
              Ces cookies nous permettent de :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mémoriser vos préférences de navigation</li>
              <li>Analyser le trafic et l'utilisation de notre site</li>
              <li>Personnaliser le contenu affiché</li>
              <li>Améliorer les performances du site</li>
              <li>Assurer la sécurité de votre navigation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de cookies utilisés</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies techniques (obligatoires)</h3>
                <p>
                  Ces cookies sont nécessaires au fonctionnement du site. Ils permettent d'utiliser 
                  les principales fonctionnalités du site (navigation, accès aux espaces sécurisés, etc.).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies analytiques</h3>
                <p>
                  Ces cookies nous permettent de connaître l'utilisation et les performances de notre site, 
                  d'établir des statistiques, volumes de fréquentation et d'utilisation des différents éléments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies de personnalisation</h3>
                <p>
                  Ces cookies permettent d'améliorer l'interactivité du site et de vous proposer 
                  des contenus personnalisés en fonction de votre navigation.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
            <p>
              Les cookies que nous utilisons ont une durée de vie limitée :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookies de session : supprimés à la fermeture du navigateur</li>
              <li>Cookies persistants : conservés pour une durée maximale de 13 mois</li>
              <li>Cookies analytiques : conservés pour une durée maximale de 25 mois</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment gérer vos cookies ?</h2>
            <p>
              Vous pouvez à tout moment choisir de désactiver les cookies. Votre navigateur peut également 
              être paramétré pour vous signaler les cookies qui sont déposés dans votre terminal et vous 
              demander de les accepter ou non.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Configuration par navigateur :</h3>
              <ul className="space-y-2">
                <li><strong>Chrome :</strong> Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li><strong>Firefox :</strong> Menu &gt; Options &gt; Vie privée et sécurité</li>
                <li><strong>Safari :</strong> Préférences &gt; Confidentialité</li>
                <li><strong>Edge :</strong> Menu &gt; Paramètres &gt; Cookies et autorisations de site</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies tiers</h2>
            <p>
              Notre site peut contenir des cookies émis par des tiers (réseaux sociaux, vidéos, 
              outils d'analyse d'audience, etc.) pour lesquels nous n'avons aucun contrôle. 
              Nous vous invitons à consulter leurs politiques de confidentialité respectives.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p>
              Pour toute question relative à notre politique de cookies, vous pouvez nous contacter :
            </p>
            <p className="font-semibold">
              FitByM2A<br />
              Email : fitbym2a@gmail.com<br />
              Téléphone : 07 88 25 54 17 / 06 67 46 80 82
            </p>
          </div>

          <div className="text-sm text-gray-500 border-t pt-6 mt-8">
            <p>Dernière mise à jour : Janvier 2025</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default GestionCookiesPage;