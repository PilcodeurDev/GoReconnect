/**
 * The internal imports
 */
import "./Footer.css";
import { Link } from "react-router-dom";
import { fbk, insta, logo, whatsApp } from "../../../assets";

export default function Footer() {

    const PilcodeurDev = (
      <a
        href="https://my-visual-impact-prod-a80de0f47f5b.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
        className="lien"
      >
        PilcodeurDev
      </a>
    );

  return (
    <footer>
        <div>
          <img
            src={logo}
            alt="logo kinésiologie animalière 25"
            className="logoKa25"
          />
        </div>
        <div>
          <div>
            <span>
              © 2024 Kinésiologie Animalière 25 Tous droits réservés .
            </span>
            <span>
              <Link to="#" className="lien">Conditions Générales de Vente & Utilisation</Link>
            </span>
          </div>
          <p>
            <span>
              <Link to="#" className="lien">Mentions légales</Link>
            </span>
            . Design & Développement par {PilcodeurDev}
          </p>
        </div>
        <div className="logos">
          <a href="https://www.facebook.com/kinesiologieanimaliere25">
            <img src={fbk} alt="logo facebook" />
          </a>
          <a href="https://www.instagram.com/kinesiologie_animaliere_25/">
            <img src={insta} alt="logo instagram" />
          </a>
          <a href="https://www.instagram.com/kinesiologie_animaliere_25/">
            <img src={whatsApp} alt="logo instagram" />
          </a>
        </div>
    </footer>
  );
}
