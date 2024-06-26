/**
 * The internal imports
 */
import "./GeneralConditionsSale.css";
import { DataContext } from "../../../context/DataProvider";
import { useContext } from "react";

export default function GeneralConditionsSale() {
  const { owner } = useContext(DataContext);

  return (
    <section>
      <div className="container">
        <div className="gSale">
          <h1>Conditions Générales de vente</h1>
          <h3>En vigeur au 17/01/2024</h3>
          <h3>ARTICLE 1 - Champ d'application</h3>
          <p>
            Les présentes Conditions Générales de Vente (dites « CGV »)
            s'appliquent, sans restriction ni réserve à tout achat des services
            de suivants : séances de kinésiologie animalière à distance,
            formation en ligne (communication animale), tels que proposés par le
            Prestataire aux clients non professionnels (« Les Clients ou le
            Client ») sur le site {owner.url}.
          </p>
          <p>
            Les caractéristiques principales des Services sont présentées sur le
            site internet {owner.url}.
          </p>
          <p>
            Le Client est tenu d'en prendre connaissance avant toute passation
            de commande. Le choix et l'achat d'un Service est de la seule
            responsabilité du Client.
          </p>
          <p>
            Ces CGV sont accessibles à tout moment sur le site
            {owner.url} et prévaudront sur toute autre document.
          </p>
          <p>
            Le Client déclare avoir pris connaissance des présentes CGV et les
            avoir acceptées en cochant la case prévue à cet effet avant la mise
            en œuvre de la procédure de commande en ligne du site
            {owner.url}.
          </p>
          <p>
            Sauf preuve contraire, les données enregistrées dans le système
            informatique du Prestataire constituent la preuve de l'ensemble des
            transactions conclues avec le Client.
          </p>
          <p>Les coordonnées du Prestataire sont les suivantes :</p>
          <ul className="CGS-info">
            <li>{owner.name}</li>
            <li>{owner.address}</li>
            <li>Siret : {owner.siretNumber}</li>
            <li>e-mail : {owner.email}</li>
            <li>{owner.phone}</li>
          </ul>
          <h3>ARTICLE 2 - Prix</h3>
          <p>
            Les Services sont fournis aux tarifs en vigueur figurant sur le site{" "}
            {owner.url}, lors de l'enregistrement de la commande par le
            Prestataire.
          </p>
          <p>
            Les prix sont exprimés en Euros, HT et TTC. Le prestataire n'est pas
            assujetti à la TVA. Les tarifs tiennent compte d'éventuelles
            réductions qui seraient consenties par le Prestataire sur le site
            {owner.url}.
          </p>
          <p>
            Ces tarifs sont fermes et non révisables pendant leur période de
            validité mais le Prestataire se réserve le droit, hors période de
            validité, d’en modifier les prix à tout moment.
          </p>
          <p>
            Le paiement demandé au Client correspond au montant total de
            l'achat, y compris les frais associés. Une facture est établie par
            le Prestataire et remise au Client lors de la fourniture des
            Services commandés.
          </p>
          <h3>ARTICLE 3 – Commandes</h3>
          <p>
            Il appartient au Client de sélectionner sur le site {owner.url} les
            Services qu'il désire commander, selon les modalités suivantes :
            Pour les séances de kinésiologie à distance : le client regarde
            l'agenda en ligne de Calendly, choisi un créneau disponible. Il
            rentre les coordonnées et informations demandées, il règle la séance
            lors de cette réservation.
          </p>
          <p>
            Pour la formation en ligne : le client a accès à la page de vente,
            il accède ensuite à la page de paiement où est récapitulé l'offre.
            Il rempli les informations demandées, effectue le paiement en ligne.
            Il recevra par la suite accès à la plateforme d'hébergement de la
            formation.
          </p>
          <p>
            La vente ne sera considérée comme valide qu’après paiement intégral
            du prix. Il appartient au Client de vérifier l'exactitude de la
            commande et de signaler immédiatement toute erreur.
          </p>
          <p>
            Toute commande passée sur le site
            {owner.url} constitue la formation d'un contrat conclu à distance
            entre le Client et le Prestataire.
          </p>
          <p>
            Le Prestataire se réserve le droit d'annuler ou de refuser toute
            commande d'un Client avec lequel il existerait un litige relatif au
            paiement d'une commande antérieure.
          </p>
          <p>Le Client pourra suivre l'évolution de sa commande sur le site.</p>
          <h3>ARTICLE 4 - Conditions de paiement</h3>
          <p>
            Le prix est payé par voie de paiement sécurisé, selon les modalités
            suivantes : paiement par carte bancaire.
          </p>
          <p>
            Le prix est payable comptant par le Client, en totalité au jour de
            la pasation de la commande.
          </p>
          <p>
            Les données de paiement sont sont échangées en mode crypté grâce au
            protocole défini par le prestataire de paiement agréé intervenant
            pour les transactions bancaires réalisées sur le site {owner.url}.
          </p>
          <p>
            Les paiements effectués par le Client ne seront considérés comme
            définitifs qu'après encaissement effectif des sommes dues, par le
            Prestataire.
          </p>
          <p>
            Le Prestataire ne sera pas tenu de procéder à la fourniture des
            Services commandés par le Client si celui-ci ne lui en paye pas le
            prix en totalité dans les conditions ci-dessus indiquées.
          </p>
          <h3>ARTICLE 5 - Fourniture des Prestations</h3>
          <p>
            Les Services commandés par le Client seront fournis selon les
            modalités suivantes : séances de kinésiologie à distance, formation
            en ligne en communication animale (vidéos pré-enregistrées).
          </p>
          <p>
            Lesdits Services seront fournis à la date programmée lors de la
            réservation pour les séances de kinésiologie. Concernant la
            Formation en ligne, les services sont fournis dès le paiement (sauf
            indication contraire notifiée sur la page de vente) à compter de la
            validation définitive de la commande du Client, dans les conditions
            prévues aux présentes CGV à l'adresse indiquée par le Client lors de
            sa commande sur le site
            {owner.url} .
          </p>
          <p>
            Le Prestataire s'engage à faire ses meilleurs efforts pour fournir
            les Services commandés par le Client, dans le cadre d'une obligation
            de moyen et dans les délais ci-dessus précisés.
          </p>
          <p>
            Si les Services commandés n'ont pas été fournis dans un délai de
            immédiatement après la date indicative de fourniture, pour toute
            autre cause que la force majeure ou le fait du Client, la vente des
            Services pourra être résolue à la demande écrite du Client dans les
            conditions prévues aux articles L 216-2, L 216-3 et L241-4 du Code
            de la consommation. Les sommes versées par le Client lui seront
            alors restituées au plus tard dans les quatorze jours qui suivent la
            date de dénonciation du contrat, à l'exclusion de toute
            indemnisation ou retenue.
          </p>
          <p>
            En cas de demande particulière du Client concernant les conditions
            de fourniture des Services, dûment acceptées par écrit par le
            Prestataire, les coûts y étant liés feront l'objet d'une facturation
            spécifique complémentaire ultérieure.
          </p>
          <p>
            A défaut de réserves ou réclamations expressément émises par le
            Client lors de la réception des Services, ceux-ci seront réputés
            conformes à la commande, en quantité et qualité.
          </p>
          <p>
            Concernant la prestation de kinésiologie animale, le Client
            disposera d'un délai de cinq jours à compter de la fourniture des
            Services pour émettre des réclamations par lettre recommandée avec
            accusée de réception, avec tous les justificatifs y afférents,
            auprès du Prestataire. Aucune réclamation ne pourra être valablement
            acceptée en cas de non respect de ces formalités et délais par le
            Client.
          </p>
          <p>
            Le Prestataire remboursera ou rectifiera dans les plus brefs délais
            et à ses frais les Services dont le défaut de conformité aura été
            dûment prouvé par le Client.
          </p>
          <h3>ARTICLE 6 - Droit de rétractation</h3>
          <p>
            Concernant les prestation de kinésiologie, le délais de rétractation
            est de 14 jours à compter du paiement de la prestation, tant que
            ladite prestation n'ait pas été réalisée.
          </p>
          <p>
            Compte tenu de la nature du Service de formation en ligne, les
            commandes passées par le Client ne bénéficient pas du droit de
            rétractation. En effet, celui-ci ne s’applique pas aux contenus
            numériques (article L221-28 du Code de la consommation).
          </p>
          <p>
            Le contrat est donc conclu de façon définitive dès la passation de
            la commande par le Client selon les modalités précisées aux
            présentes CGV.
          </p>
          <h3>ARTICLE 7 - Responsabilité du Prestataire - Garanties</h3>
          <p>
            Le Prestataire garantit, conformément aux dispositions légales et
            sans paiement complémentaire, le Client, contre tout défaut de
            conformité ou vice caché, provenant d'un défaut de conception ou de
            réalisation des Services commandés dans les conditions et selon les
            modalités suivantes : Dispositions relatives aux garanties légales.
          </p>
          <p>Article L217-5 du Code de la consommation</p>
          <p>
            <i>
              « Le bien est conforme au contrat : 1° S'il est propre à l'usage
              habituellement attendu d'un bien semblable et, le cas échéant : -
              s'il correspond à la description donnée par le vendeur et possède
              les qualités que celui-ci a présentées à l'acheteur sous forme
              d'échantillon ou de modèle ; - s'il présente les qualités qu'un
              acheteur peut légitimement attendre eu égard aux déclarations
              publiques faites par le vendeur, par le producteur ou par son
              représentant, notamment dans la publicité ou l'étiquetage ; 2° Ou
              s'il présente les caractéristiques définies d'un commun accord par
              les parties ou est propre à tout usage spécial recherché par
              l'acheteur, porté à la connaissance du vendeur et que ce dernier a
              accepté. »
            </i>
          </p>
          <p>
            <i>
              Article L217-12 du Code de la consommation L'accès à la formation
              en ligne est garantie deux ans. « L'action résultant du défaut de
              conformité se prescrit par deux ans à compter de la délivrance du
              bien. »
            </i>
          </p>
          <p>
            Afin de faire valoir ses droits, le Client devra informer le
            Prestataire, par écrit (mail ou courrier), de l'existence des vices
            ou défauts de conformité.
          </p>
          <p>
            Le Prestataire remboursera ou rectifiera ou fera rectifier (dans la
            mesure du possible) les services jugés défectueux dans les meilleurs
            délais et au plus tard dans les 0 jours suivant la constatation par
            le Prestataire du défaut ou du vice. Ce remboursement pourra être
            fait par virement.
          </p>
          <p>
            La garantie du Prestataire est limitée au remboursement des Services
            effectivement payés par le Client.
          </p>
          <p>
            Le Prestataire ne pourra être considéré comme responsable ni
            défaillant pour tout retard ou inexécution consécutif à la
            survenance d'un cas de force majeure habituellement reconnu par la
            jurisprudence française.
          </p>
          <p>
            Les Services fournis par l'intermédiaire du site {owner.url}
            du Prestataire sont conformes à la réglementation en vigueur en
            France. La responsabilité du Prestataire ne saurait être engagée en
            cas de non respect de la législation du pays dans lequel les
            Services sont fournis, qu'il appartient au Client, qui est seul
            responsable du choix des Services demandés, de vérifier.
          </p>
          <h3>ARTICLE 8 - Données personnelles</h3>
          <p>
            Le Client est informé que la collecte de ses données à caractère
            personnel est nécessaire à la vente des Services et leur réalisation
            et délivrance, confiées au Prestataire. Ces données à caractère
            personnel sont récoltées uniquement pour l’exécution du contrat de
            prestations de services.
          </p>
          <span className="underline">
            8.1 Collecte des données à caractère personnel
          </span>
          <p>
            Les données à caractère personnel qui sont collectées sur le site{" "}
            {owner.url} sont les suivantes :
          </p>
          <span className="bold">- Ouverture de compte</span>
          <p>
            Lors de la création du compte Client / utilisateur et de la
            réservation de prestations : Nom, prénom, adresse e-mail, numéro de
            téléphone, pays.
          </p>
          <span className="bold">-Paiement</span>
          <p>
            Dans le cadre du paiement des Prestations proposés sur le site
            {owner.url}, celui-ci enregistre des données financières relatives
            au compte bancaire ou à la carte de crédit du Client / utilisateur.
          </p>
          <span className="underline">
            8.2 Destinataires des données à caractère personnel
          </span>
          <p>
            Les données à caractère personnel sont réservées à l’usage unique du
            Prestataire et de ses salariés. Le responsable de traitement des
            données est le Prestataire, au sens de la loi Informatique et
            libertés et à compter du 25 mai 2018 du Règlement 2016/679 sur la
            protection des données à caractère personnel.
          </p>
          <span className="underline">8.4 limitation du traitement</span>
          <p>
            Sauf si le Client exprime son accord exprès, ses données à caractère
            personnelles ne sont pas utilisées à des fins publicitaires ou
            marketing.
          </p>
          <span className="underline">
            8.5 Durée de conservation des données
          </span>
          <p>
            Le Prestataire conservera les données ainsi recueillies pendant un
            délai de 5 ans, couvrant le temps de la prescription de la
            responsabilité civile contractuelle applicable.
          </p>
          <span className="underline">8.6 Sécurité et confidentialité</span>
          <p>
            Le Prestataire met en œuvre des mesures organisationnelles,
            techniques, logicielles et physiques en matière de sécurité du
            numérique pour protéger les données personnelles contre les
            altérations, destructions et accès non autorisés. Toutefois il est à
            signaler qu’Internet n’est pas un environnement complètement
            sécurisé et le Prestataire ne peut garantir la sécurité de la
            transmission ou du stockage des informations sur Internet.
          </p>
          <span className="underline">
            8.7 Mise en œuvre des droits des Clients et utilisateurs
          </span>
          <p>
            En application de la règlementation applicable aux données à
            caractère personnel, les Clients et utilisateurs du site
            {owner.url} disposent des droits suivants :
          </p>
          <p>
            -Ils peuvent mettre à jour ou supprimer les données qui les
            concernent de la manière suivante : en envoyant un e-mail à
            kinesiologieanimaliere25@gmail.com ou en modifiant leurs données
            dans leur compte client.
          </p>
          <p>
            -Ils peuvent supprimer leur compte en écrivant à l’adresse
            électronique indiqué à l’article 1, les coordonnées du Prestataire.
          </p>
          <p>
            -Ils peuvent exercer leur droit d’accès pour connaître les données
            personnelles les concernant en écrivant à l’adresse indiqué à
            l’article 1, les coordonnées du Prestataire.
          </p>
          <p>
            -Si les données à caractère personnel détenues par le Prestataire
            sont inexactes, ils peuvent demander la mise à jour des informations
            des informations en écrivant à l’adresse indiqué à l’article 1, les
            coordonnées du Prestataire.
          </p>
          <p>
            -Ils peuvent demander la suppression de leurs données à caractère
            personnel, conformément aux lois applicables en matière de
            protection des données en écrivant à l’adresse indiqué à l’article
            1, les coordonnées du Prestataire.
          </p>
          <p>
            -Ils peuvent également solliciter la portabilité des données
            détenues par le Prestataire vers un autre prestataire
          </p>
          <p>
            -Enfin, ils peuvent s’opposer au traitement de leurs données par le
            Prestataire.
          </p>
          <p>
            Ces droits, dès lors qu’ils ne s’opposent pas à la finalité du
            traitement, peuvent être exercé en adressant une demande par
            courrier ou par E-mail au Responsable de traitement dont les
            coordonnées sont indiquées ci-dessus.
          </p>
          <p>
            Le responsable de traitement doit apporter une réponse dans un délai
            maximum d’un mois.
          </p>
          <p>
            En cas de refus de faire droit à la demande du Client, celui-ci doit
            être motivé. Le Client est informé qu’en cas de refus, il peut
            introduire une réclamation auprès de la CNIL (3 place de Fontenoy,
            75007 PARIS) ou saisir une autorité judiciaire.
          </p>
          <p>
            Le Client peut être invité à cocher une case au titre de laquelle il
            accepte de recevoir des mails à caractère informatifs et
            publicitaires de la part du Prestataire. Il aura toujours la
            possibilité de retirer son accord à tout moment en contactant le
            Prestataire (coordonnées ci-dessus) ou en suivant le lien de
            désabonnement.
          </p>
          <h3>ARTICLE 9 - Propriété intellectuelle</h3>
          <p>
            Le contenu du site {owner.url} est la propriété du Vendeur et de ses
            partenaires et est protégé par les lois françaises et
            internationales relatives à la propriété intellectuelle.
          </p>
          <p>
            Le prestataire conserve son droit d'auteur et demande à ce que les
            clients et utilisateurs conserve leur contenu à titre personnel et
            de ne pas le diffuser à des Tiers. Toute reproduction totale ou
            partielle de ce contenu est strictement interdite et est susceptible
            de constituer un délit de contrefaçon.
          </p>
          <h3>ARTICLE 10 - Droit applicable - Langue</h3>
          <p>
            Les présentes CGV et les opérations qui en découlent sont régies et
            soumises au droit français. Les présentes CGV sont rédigées en
            langue française. Dans le cas où elles seraient traduites en une ou
            plusieurs langues étrangères, seul le texte français ferait foi en
            cas de litige.
          </p>
          <h3>ARTICLE 11 - Litiges</h3>
          <p>
            Pour toute réclamation merci de contacter le service clientèle à
            l’adresse postale ou mail du Prestataire indiquée à l’ARTICLE 1 des
            présentes CGV.
          </p>
          <p>
            Le Client est informé qu'il peut en tout état de cause recourir à
            une médiation conventionnelle, auprès des instances de médiation
            sectorielles existantes ou à tout mode alternatif de règlement des
            différends (conciliation, par exemple) en cas de contestation.
          </p>
          <p>
            En l’espèce, le médiateur désigné est la société Médiation de la
            Consommation & Patrimoine -12 square Desnouettes -75015 Paris. Il y
            a deux manières de réaliser la réclamation auprès du médiateur, soit
            directement en ligne : https://mcpmediation.org/ , soit par voie
            postale en joignant toutes les informations nécessaires au dossier.
          </p>
          <p>
            Le Client est également informé qu’il peut, également recourir à la
            plateforme de Règlement en Ligne des Litige (RLL) :
            https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show
          </p>
          <p>
            Tous les litiges auxquels les opérations d'achat et de vente
            conclues en application des présentes CGV et qui n’auraient pas fait
            l’objet d’un règlement amiable entre le vendeur ou par médiation,
            seront soumis aux tribunaux compétents dans les conditions de droit
            commun.
          </p>
        </div>
      </div>
    </section>
  );
}
