import FooterSection from "../sections/FooterSection";

const PolitiqueConfidentialitePage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des informations</h2>
            <p>
              FitByM2A collecte des informations lorsque vous vous inscrivez sur notre site, passez une commande, 
              vous abonnez à notre newsletter, répondez à une enquête ou remplissez un formulaire.
            </p>
            <p>
              Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, 
              et/ou autres informations nécessaires pour vous fournir nos services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Utilisation des informations</h2>
            <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
              <li>Fournir un contenu publicitaire personnalisé</li>
              <li>Améliorer notre site web</li>
              <li>Améliorer le service client et vos besoins de prise en charge</li>
              <li>Vous contacter par e-mail</li>
              <li>Administrer un concours, une promotion, ou une enquête</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Confidentialité du commerce en ligne</h2>
            <p>
              Nous sommes les seuls propriétaires des informations recueillies sur ce site. 
              Vos informations personnelles ne seront pas vendues, échangées, transférées, 
              ou données à une autre société pour n'importe quelle raison, sans votre consentement, 
              en dehors de ce qui est nécessaire pour répondre à une demande et/ou transaction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Divulgation à des tiers</h2>
            <p>
              Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles 
              identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui 
              nous aident à exploiter notre site web ou à mener nos affaires, tant que ces parties 
              conviennent de garder ces informations confidentielles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Protection des informations</h2>
            <p>
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité 
              de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie 
              pour protéger les informations sensibles transmises en ligne.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Se désabonner</h2>
            <p>
              Nous utilisons l'adresse e-mail que vous fournissez pour vous envoyer des informations 
              et mises à jour relatives à votre commande, des nouvelles de l'entreprise de façon occasionnelle, 
              des informations sur des produits liés, etc. Si à n'importe quel moment vous souhaitez vous 
              désinscrire et ne plus recevoir d'e-mails, des instructions de désabonnement détaillées 
              sont incluses en bas de chaque e-mail.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Consentement</h2>
            <p>
              En utilisant notre site, vous consentez à notre politique de confidentialité.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de confidentialité, 
              vous pouvez nous contacter à :
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

export default PolitiqueConfidentialitePage;