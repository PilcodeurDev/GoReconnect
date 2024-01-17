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
      <Link to="/#moveUp">
        <img
          src={logo}
          alt="logo kinésiologie animalière 25"
          className="logoKa25"
        />
      </Link>
      <div className="textCenter">
        <div className="lienNavigation">
          <div>
            <Link to="/#moveUp" className="lien">
              Accueil
            </Link>
          </div>
          <div>
            <Link to="/#laKinesiologie" className="lien">
              Mes prestations
            </Link>
          </div>
          <div>
            <Link to="/#quiJeSuis" className="lien">
              Qui suis-je ?
            </Link>
          </div>
          <div>
            <Link to="/#reservation" className="lien">
              Rendez-vous
            </Link>
          </div>
        </div>
        <div className="lienCenter">
          <div>
            <span>© 2024 Kinésiologie Animalière 25 Tous droits réservés.</span>
            <span>
              <Link to="#" className="lien">
                Mentions légales
              </Link>
            </span>
            <span>
              <Link to="/condition-general-de-vente" className="lien">
                CGV
              </Link>
            </span>
            <span>
              <Link to="/condition-general-dutilisation" className="lien">
                CGU
              </Link>
            </span>
          </div>
          <div>Design & Développement par {PilcodeurDev}</div>
        </div>
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
