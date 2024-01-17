/**
 * The internal imports
 */
import "./GeneralConditionsUse.css";

export default function GeneralConditionsUse() {
  const legalData = [
    { site: "Kinésiologie Animalière 25" },
    { url: " https://www.kinesiologie-animaliere-25.fr" },
    { owner: " Alix Lucidarme" },
    { adressOwner: "32 Bis rue de l'Etang, 25560 Frasne" },
    { phoneOwner: "+33 668352377" },
    { host: "Wix Online Platform Limited" },
    { adressHost: "1 Grant’s Row, Dublin 2 D02HX96, Ireland" },
    { phoneHost: "(+1) 415 358 0857" },
    { emailOwner: "kinesiologieanimaliere25@gmail.com" },
  ];

  return (
    <section>
      <div className="container">
        <div className="gConditions">
          <h1>Conditions Générales d'Utilisation</h1>

          <p>
            En vigueur au 02/10/2023 Les présentes conditions générales
            d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique
            des modalités de mise à disposition du site et des services par{" "}
            {legalData[0].site} - {legalData[2].owner} et de définir les
            conditions d’accès et d’utilisation des services par « l'Utilisateur
            ».
          </p>
          <p>
            Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
          </p>
          <h3>Article 1 : Les mentions légales</h3>
          <p>
            L’édition et la direction de la publication du site
            {legalData[1].url} est assurée par {legalData[2].owner}, domiciliée{" "}
            {legalData[3].adressOwner}. Elle est joignable par ces deux biais :
            Numéro de téléphone {legalData[4].phoneOwner} ; Adresse e-mail{" "}
            {legalData[8].emailOwner}.
          </p>
          <p>
            L'hébergeur du site {legalData[1].url} est la société{" "}
            {legalData[5].host}, dont le siège social est situé au{" "}
            {legalData[6].adressHost}, avec le numéro de téléphone suivant :{" "}
            {legalData[7].phoneHost}.
          </p>
          <h3>ARTICLE 2 : Accès au site</h3>
          <p>
            Le site {legalData[1].url} permet à l'Utilisateur un accès gratuit
            aux services suivants : Consultations de {legalData[0].site} (en
            présentiel et en distanciel), consultations de communication animale
            (à distance), formation en ligne (Communication animale). Le site
            est accessible gratuitement en tout lieu à tout Utilisateur ayant un
            accès à Internet. Tous les frais supportés par l'Utilisateur pour
            accéder au service (matériel informatique, logiciels, connexion
            Internet, etc.) sont à sa charge.
          </p>
          <h3>ARTICLE 3 : Collecte des données</h3>
          <p>
            Le site assure à l'Utilisateur une collecte et un traitement
            d'informations personnelles dans le respect de la vie privée
            conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés.
          </p>
          <p>
            En vertu de la loi Informatique et Libertés, en date du 6 janvier
            1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de
            suppression et d'opposition de ses données personnelles.
          </p>
          <h3>ARTICLE 4 : Propriété intellectuelle</h3>
          <p>
            Les marques, logos, signes ainsi que tous les contenus du site
            (textes, images, son…) font l'objet d'une protection par le Code de
            la propriété intellectuelle et plus particulièrement par le droit
            d'auteur.
          </p>
          <p>
            L'Utilisateur doit solliciter l'autorisation préalable du site pour
            toute reproduction, publication, copie des différents contenus. Il
            s'engage à une utilisation des contenus du site dans un cadre
            strictement privé, toute utilisation à des fins commerciales et
            publicitaires est strictement interdite.{" "}
          </p>
          <p>
            Toute représentation totale ou partielle de ce site par quelque
            procédé que ce soit, sans l’autorisation expresse de l’exploitant du
            site Internet constituerait une contrefaçon sanctionnée par
            l’article L 335-2 et suivants du Code de la propriété
            intellectuelle.
          </p>
          <p>
            Il est rappelé conformément à l’article L122-5 du Code de propriété
            intellectuelle que l’Utilisateur qui reproduit, copie ou publie le
            contenu protégé doit citer l’auteur et sa source.
          </p>
          <h3>ARTICLE 5 : Responsabilité</h3>
          <p>
            Les sources des informations diffusées sur le site
            {legalData[1].url} sont réputées fiables mais le site ne garantit
            pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
          </p>
          <p>
            Les informations communiquées sont présentées à titre indicatif et
            général sans valeur contractuelle. Malgré des mises à jour
            régulières, le site {legalData[1].url} ne peut être tenu responsable
            de la modification des dispositions administratives et juridiques
            survenant après la publication.
          </p>
          <p>
            De même, le site ne peut être tenue responsable de l’utilisation et
            de l’interprétation de l’information contenue dans ce site.
          </p>
          <p>
            Le site {legalData[1].url} ne peut être tenu pour responsable
            d’éventuels virus qui pourraient infecter l’ordinateur ou tout
            matériel informatique de l’Internaute, suite à une utilisation, à
            l’accès, ou au téléchargement provenant de ce site.
          </p>
          <p>
            La responsabilité du site ne peut être engagée en cas de force
            majeure ou du fait imprévisible et insurmontable d'un tiers.
          </p>
          <h3>ARTICLE 6 : Liens hypertextes</h3>
          <p>
            Des liens hypertextes peuvent être présents sur le site.
            L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira
            du site {legalData[1].url}. Ce dernier n’a pas de contrôle sur les
            pages web sur lesquelles aboutissent ces liens et ne saurait, en
            aucun cas, être responsable de leur contenu.
          </p>
          <h3>ARTICLE 7 : Cookies</h3>
          <p>
            L’Utilisateur est informé que lors de ses visites sur le site, un
            cookie peut s’installer automatiquement sur son logiciel de
            navigation.
          </p>
          <p>
            Les cookies sont de petits fichiers stockés temporairement sur le
            disque dur de l’ordinateur de l’Utilisateur par votre navigateur et
            qui sont nécessaires à l’utilisation du site
            {legalData[1].url}.
          </p>
          <p>
            Les cookies ne contiennent pas d’information personnelle et ne
            peuvent pas être utilisés pour identifier quelqu’un. Un cookie
            contient un identifiant unique, généré aléatoirement et donc
            anonyme. Certains cookies expirent à la fin de la visite de
            l’Utilisateur, d’autres restent.
          </p>
          <p>
            L’information contenue dans les cookies est utilisée pour améliorer
            le site {legalData[1].url}.
          </p>
          <p>
            En naviguant sur le site, L’Utilisateur les accepte. L’Utilisateur
            pourra désactiver ces cookies par l’intermédiaire des paramètres
            figurant au sein de son logiciel de navigation.
          </p>
          <h3>ARTICLE 8 : Publication par l’Utilisateur</h3>
          <p>
            Le site permet aux membres de publier les contenus suivants :
            commentaires sur le blog.
          </p>
          <p>
            Dans ses publications, le membre s’engage à respecter les règles de
            la Netiquette (règles de bonne conduite de l’internet) et les règles
            de droit en vigueur.
          </p>
          <p>
            Le site peut exercer une modération sur les publications et se
            réserve le droit de refuser leur mise en ligne, sans avoir à s’en
            justifier auprès du membre.
          </p>
          <p>
            Le membre reste titulaire de l’intégralité de ses droits de
            propriété intellectuelle. Mais en publiant une publication sur le
            site, il cède à la société éditrice le droit non exclusif et gratuit
            de représenter, reproduire, adapter, modifier, diffuser et
            distribuer sa publication, directement ou par un tiers autorisé,
            dans le monde entier, sur tout support (numérique ou physique), pour
            la durée de la propriété intellectuelle.
          </p>
          <p>
            Le Membre cède notamment le droit d'utiliser sa publication sur
            internet et sur les réseaux de téléphonie mobile.
          </p>
          <p>
            La société éditrice s'engage à faire figurer le nom du membre à
            proximité de chaque utilisation de sa publication.
          </p>
          <p>
            Tout contenu mis en ligne par l'Utilisateur est de sa seule
            responsabilité. L'Utilisateur s'engage à ne pas mettre en ligne de
            contenus pouvant porter atteinte aux intérêts de tierces personnes.
          </p>
          <p>
            Tout recours en justice engagé par un tiers lésé contre le site sera
            pris en charge par l'Utilisateur.
          </p>
          <p>
            Le contenu de l'Utilisateur peut être à tout moment et pour
            n'importe quelle raison supprimé ou modifié par le site, sans
            préavis.
          </p>
          <h3>ARTICLE 9 : Droit applicable et juridiction compétente</h3>
          <p>
            La législation française s'applique au présent contrat. En cas
            d'absence de résolution amiable d'un litige né entre les parties,
            les tribunaux français seront seuls compétents pour en connaître.
          </p>
          <p>
            Pour toute question relative à l’application des présentes CGU, vous
            pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1.
          </p>
        </div>
      </div>
    </section>
  );
}
