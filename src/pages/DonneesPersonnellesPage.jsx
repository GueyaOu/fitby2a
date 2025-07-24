import FooterSection from "../sections/FooterSection";

const DonneesPersonnellesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Protection des Données Personnelles</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du traitement</h2>
            <p>
              FitByM2A, en tant que responsable du traitement, s'engage à protéger vos données personnelles 
              conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi 
              « Informatique et Libertés ».
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <p><strong>Responsable du traitement :</strong> FitByM2A</p>
              <p><strong>Contact :</strong> fitbym2a@gmail.com</p>
              <p><strong>Téléphone :</strong> 07 88 25 54 17 / 06 67 46 80 82</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
            <p>
              Dans le cadre de nos activités, nous sommes amenés à collecter les données personnelles suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone</li>
              <li>Données de connexion : adresse IP, logs de connexion</li>
              <li>Données professionnelles : entreprise, fonction, secteur d'activité</li>
              <li>Données de correspondance : historique des échanges, demandes de contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
            <p>
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestion des demandes de contact et de renseignements</li>
              <li>Fourniture de nos services de recrutement et de formation</li>
              <li>Envoi d'informations commerciales (avec votre consentement)</li>
              <li>Amélioration de nos services et de notre site web</li>
              <li>Respect de nos obligations légales et réglementaires</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base légale</h2>
            <p>
              Le traitement de vos données personnelles repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentement :</strong> pour l'envoi de communications commerciales</li>
              <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services</li>
              <li><strong>Exécution contractuelle :</strong> pour la fourniture de nos prestations</li>
              <li><strong>Obligation légale :</strong> pour le respect de nos obligations réglementaires</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Destinataires des données</h2>
            <p>
              Vos données personnelles peuvent être transmises aux destinataires suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personnel habilité de FitByM2A</li>
              <li>Prestataires techniques (hébergement, maintenance)</li>
              <li>Partenaires commerciaux (uniquement avec votre consentement)</li>
              <li>Autorités compétentes (en cas d'obligation légale)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant les durées suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données de prospects :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données clients :</strong> 5 ans à compter de la fin de la relation commerciale</li>
              <li><strong>Données de candidatures :</strong> 2 ans à compter de la candidature</li>
              <li><strong>Données de connexion :</strong> 12 mois maximum</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Droit d'accès</h3>
                <p>Vous pouvez demander l'accès aux données personnelles que nous détenons sur vous.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Droit de rectification</h3>
                <p>Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Droit à l'effacement</h3>
                <p>Vous pouvez demander la suppression de vos données dans certaines conditions.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Droit à la portabilité</h3>
                <p>Vous pouvez récupérer vos données dans un format structuré et lisible.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Droit d'opposition</h3>
                <p>Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Exercice de vos droits</h2>
            <p>
              Pour exercer vos droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Par e-mail : fitbym2a@gmail.com</li>
              <li>Par téléphone : 07 88 25 54 17 / 06 67 46 80 82</li>
            </ul>
            <p className="mt-4">
              Nous vous répondrons dans un délai d'un mois à compter de la réception de votre demande. 
              Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Réclamation</h2>
            <p>
              Si vous estimez que le traitement de vos données personnelles constitue une violation 
              du RGPD, vous avez le droit d'introduire une réclamation auprès de la Commission 
              Nationale de l'Informatique et des Libertés (CNIL).
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <p><strong>CNIL</strong></p>
              <p>3 Place de Fontenoy - TSA 80715</p>
              <p>75334 PARIS CEDEX 07</p>
              <p>Téléphone : 01 53 73 22 22</p>
              <p>Site web : www.cnil.fr</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Sécurité</h2>
            <p>
              FitByM2A met en œuvre toutes les mesures techniques et organisationnelles appropriées 
              pour protéger vos données personnelles contre la destruction, la perte, l'altération, 
              la divulgation ou l'accès non autorisés.
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

export default DonneesPersonnellesPage;