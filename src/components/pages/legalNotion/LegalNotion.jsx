/**
 * The internal imports
 */
import "./LegalNotion.css";

export default function LegalNotion() {
  const data = [
    { site: "Kinesiologie Animaliere 25" },
    { url: "https://www.kinesiologie-animaliere-25.fr" },
    { owner: "Alix Lucidarme" },
    { adressOwner: "32 Bis rue de l'Etang, 25560 Frasne" },
    { phoneOwner: "+33668352377" },
    { host: "Wix Online Platform Limited" },
    { adressHost: "1 Grant’s Row, Dublin 2 D02HX96, Ireland" },
    { phoneHost: "(+1) 415 358 0857" },
  ];
  return (
    <section>
      <div className="container notionsLegales">
        <h1>
          <strong>Mentions légales</strong>
        </h1>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site {data[0].site} l'identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <h3>Edition du site</h3>
        <p>
          Le présent site, accessible à l’URL {data[1].url}
          (le « Site »), est édité par : {data[2].owner}, résidant au{" "}
          {data[3].adressOwner}, de nationalité Française (France), né(e) le
          25/09/1992,
        </p>
        <h3>Hébergement</h3>
        <p>
          Le Site est hébergé par la société {data[5].host}, situé{" "}
          {data[6].adressHost}, (contact téléphonique ou email : {data[7].phoneHost}).
        </p>
        <h3>Directeur de publication</h3>
        Le Directeur de la publication du Site est {data[2].owner}.
        <h3>Nous contacter</h3>
        <p>Par téléphone : {data[4].phoneOwner}</p>
        <p>Par courrier : {data[3].adressOwner}</p>
        <i>Génération des mentions légales par Legalstart.</i>
      </div>
    </section>
  );
}
