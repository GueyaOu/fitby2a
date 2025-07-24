import FooterSection from "../sections/FooterSection";

const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informations légales</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p><strong>Raison sociale :</strong> FitByM2A</p>
              <p><strong>Forme juridique :</strong> [À compléter]</p>
              <p><strong>Adresse :</strong> Paris, France</p>
              <p><strong>Email :</strong> fitbym2a@gmail.com</p>
              <p><strong>Téléphone :</strong> 07 88 25 54 17 / 06 67 46 80 82</p>
              <p><strong>Numéro SIRET :</strong> [À compléter]</p>
              <p><strong>Code APE :</strong> [À compléter]</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site www.fitbym2a.com est [Nom du dirigeant].
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hébergement</h2>
            <p>
              Le site www.fitbym2a.com est hébergé par :
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
              <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
              <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <p>
              Le site www.fitbym2a.com et l'ensemble de son contenu (textes, images, vidéos, logos, etc.) 
              sont protégés par le droit d'auteur et constituent la propriété exclusive de FitByM2A, 
              sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
              des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
              sauf autorisation écrite préalable de FitByM2A.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Données personnelles</h2>
            <p>
              Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé 
              pour la gestion de nos relations commerciales et/ou pour répondre à vos demandes d'information.
            </p>
            <p>
              Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au 
              Règlement Général sur la Protection des Données (RGPD), vous bénéficiez d'un droit d'accès, 
              de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement.
            </p>
            <p>
              Vous pouvez exercer ces droits en nous contactant à l'adresse : fitbym2a@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilité</h2>
            <p>
              FitByM2A s'efforce de fournir sur le site www.fitbym2a.com des informations aussi précises 
              que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes 
              et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers 
              partenaires qui lui fournissent ces informations.
            </p>
            <p>
              Tous les informations indiquées sur le site www.fitbym2a.com sont données à titre indicatif, 
              et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site 
              www.fitbym2a.com ne sont pas exhaustifs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liens hypertextes</h2>
            <p>
              Le site www.fitbym2a.com contient des liens vers d'autres sites Internet. 
              FitByM2A n'est pas responsable du contenu de ces sites tiers.
            </p>
            <p>
              Tout site public ou privé est autorisé à établir, sans autorisation préalable, 
              un lien vers les informations diffusées sur www.fitbym2a.com à condition que ce lien 
              ne soit pas établi dans un cadre commercial ou publicitaire.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Droit applicable</h2>
            <p>
              Tant le présent site que les modalités et conditions de son utilisation sont régis 
              par le droit français, quel que soit le lieu d'utilisation. En cas de contestation 
              éventuelle, et après l'échec de toute tentative de recherche d'une solution amiable, 
              les tribunaux français seront seuls compétents pour connaître de ce litige.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
            <p>
              Pour toute question ou réclamation concernant le site, vous pouvez nous contacter :
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

export default MentionsLegalesPage;