/**
 * The external imports
 */

/**
 * The internal imports
 */
import { alixFtd } from "../../../assets";
import "./QuiSuisJePage.css";

export default function QuiSuisJePage() {
  const ameAnimal = (
    <a
      className="ameanimal-link"
      target="_blank"
      rel="noreferrer"
      href="https://www.kinesiologie-ameanimale.fr/"
    >
      Âme Animale
    </a>
  );

  return (
    <div id="container-quisuisje">
      <img className="featured-img" src={alixFtd} alt="kinesiologie" />
      <h1 className="title">Alix Lucidarme</h1>
      <p className="subtitle">
        Je m'appelle Alix et j'exerce le métier de kinésiologue animalière.
      </p>
      <h2>Mon histoire</h2>
      <p>
        Après avoir exercé plusieurs années en tant qu'infirmière hospitalière,
        je suis retournée à mes aspirations d'enfant : aider les animaux.
        Passionnée par les médecines alternatives, mes animaux et moi même avons
        pu bénéficier de médecines douces, notamment de kinésiologie. Fascinée
        par cette méthode et les bienfaits que je voyais au quotidien, j'ai
        décidée de changer d'orientation professionnel et me former à la
        kinésiologie animalière en Touraine, à l'école {ameAnimal} en 2021-2022.
      </p>
      <h4>Reconversion :</h4>
      <p>
        En août 2021, j'ai fait un burn-out alors que je travaillais encore
        comme infirmière hospitalière. Je savais déjà que le métier ne me
        plaisait plus, je me levais sans entrain pour aller au travail, en
        attendant de mettre de côté de l'argent pour me former en parallèle dans
        les médecines douces (je ne savais pas encore laquelle). Là, j'ai
        réalisé à quel point il était vital de prendre enfin soin de moi, de
        faire des choses au quotidien qui me plaisait, y compris au niveau
        professionnel. Après plusieurs semaines de réflexions, de discussions
        avec des proches, je me suis dit "c'est ça que je veux faire!" en lisant
        plus d'informations sur la kinésiologie.
      </p>
      <p>
        Je me suis ainsi lancée à l'aventure pendant 7 mois de formation à
        l'école Âme Animale, où j'ai pu trouver de très bons professeurs, un
        groupe d'étudiants formidable, de l'entraide, de l'humanité... bref tout
        ce dont j'avais besoin à ce moment là et ce dont je rêvais! Je me suis
        sentie revivre grâce à cela, de donner du sens à mon quotidien, de
        m'épanouir à nouveau dans une pratique qui était 100% alignée avec mon
        être intérieur. Même si le changement ne fut pas facile, je ne regrette
        en rien ma décision de l'époque d'abandonner ma carrière infirmière pour
        un métier peu connu à l'avenir incertain, car mes connaissances me
        seront toujours utiles.
      </p>
      <h4>Création d'entreprise :</h4>
      <p>
        Début juillet 2022, certificat en poche, je décide de m'installer dans
        le Doubs (25), à la frontière suisse, lieu où je vis actuellement. Ma
        clientèle s'est développé progressivement en local, par le
        bouche-à-oreille. J'ai eu l'opportunité de réalisé des séances de
        kinésiologie à distance pour des contacts sur les réseaux sociaux. Je me
        suis ainsi rendu compte qu'un grand nombre de personnes étaient en
        difficulté avec leurs animaux au quotidien et qu'elles cherchaient à
        comprendre ce qu'il se passaient chez eux, notamment d'un point de vue
        émotionnel.
      </p>
      <p>
        J'ai donc ouvert mes prestations au distanciel afin de répondre à la
        demande des clients. Même si cela peut encore paraître étrange à
        certains, que ce soit la kinésiologie en général ou tout simplement
        l'idée de réaliser des séances à distance, sans toucher l'animal....
        Cela fonctionne parfaitement. On obtient la même qualité d'informations,
        les mêmes évolutions qu'en présentiel. Il y a juste le contact avec ma
        clientèle qui diffère, car je passe plus de temps par téléphone/messages
        à échanger avec vous, que ce soit avant ou après les séances.
      </p>
      <h4>Projets professionnels :</h4>
      <p>
        J'ai toujours des idées plein la tête, des projets émergeant les uns
        après les autres.... Je ne sais pas si j'aurais assez d'une vie pour
        tous les réaliser ! Ayant à coeur de proposer des prestations de
        qualités mais aussi diversifiées, je me forme régulièrement pour ne pas
        rester sur mes acquis car toute pratique/métier est évolutif. Vous
        verrez certainement apparaître sur mes réseaux sociaux, de nouveaux
        projets qui se concrétisent au fur et à mesure !
      </p>
      <h4>Formations réalisées :</h4>
      <ul>
        <li>
          Novembre 2021 - Juin 2022 : Formation initiale de kinésiologue
          animalière - l'école {ameAnimal}
        </li>
        <li>
          Décembre 2021 : Formation en Communication Animale (vivants et
          défunts)
        </li>
        <li>
          Novembre 2022 : Formation de spécialisation en kinésiologie pour les
          Animaux Sauvages - l'école {ameAnimal}
        </li>
        <li>
          Mai 2023 : Initiation à la méthode TTEAM (Tellington Touch Equine
          Awareness Method) avec Danielle Dibbens
        </li>
        <li>
          Juin 2023 : Initiation à la méthode Equin Body Talk (méthode
          Masterson) avec Monica Goold
        </li>
        <li>
          Septembre 2023 : Module post certifié en Kinésiologie Animale à
          l'école {ameAnimal} avec Mélanie Conet
        </li>
      </ul>
      <h4>Formations en cours :</h4>
      <ul>
        <li>
          Depuis Octobre 2022 : Formation en Slowprenariat avec Ma Slow Boîte et
          Laure Daudier
        </li>
        <li>
          Depuis août 2022 : Formation en Herboristerie Animalière avec L'école
          les Âmes Fleurs et Marie-Christine Vallières (Québec)
        </li>
      </ul>
      <h4>Formations à venir pour 2024 :</h4>
      <ul>
        <li>
          Module de spécialisation en kinésiologie : Aura des animaux avec
          Mélanie Conet - l'école {ameAnimal}
        </li>
        <li>
          Principes fondamentaux en médecine chinoise avec Jean-Luc Klein -
          AnimoTao
        </li>
        <li>Phytothérapie chinoise avec Jean-Luc Klein - AnimoTao </li>
        <li>
          Bilan énergétique en médecine chinoise avec Jean-Luc Klein - AnimoTao
        </li>
        <li>
          Formation en nutrition cru Canin et Félin : Raw Fed and Nerdy (USA)
          avec Savannah Welna
        </li>
      </ul>
    </div>
  );
}
