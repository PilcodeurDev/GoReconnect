/**
 * The external imports
 */
import { useContext } from "react";

/**
 * The internal imports
 */
import "./LegalNotion.css";
import { DataContext } from "../../../context/DataProvider";

export default function LegalNotion() {
  const { owner, host } = useContext(DataContext);

  return (
    <section className="legal-container">
      <div className="container notionsLegales">
        <h1>
          <strong>Mentions légales</strong>
        </h1>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site {owner.site} l'identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <h3>Edition du site</h3>
        <p>
          Le présent site, accessible à l’URL {owner.url} (le « Site »), est
          édité par : {owner.name}, résidant au {owner.address}, de nationalité
          Française (France), né(e) le 25/09/1992,
        </p>
        <h3>Hébergement</h3>
        <p>
          Le Site est hébergé par la société {host.name}, situé {host.address},
          (contact téléphonique ou email : {host.phone}).
        </p>
        <h3>Directeur de publication</h3>
        <p>Le Directeur de la publication du Site est {owner.name}.</p>
        <h3>Nous contacter</h3>
        <p>Par téléphone : {owner.phone}</p>
        <p>Par courrier : {owner.address}</p>
        <i>Génération des mentions légales par Legalstart.</i>
      </div>
    </section>
  );
}
