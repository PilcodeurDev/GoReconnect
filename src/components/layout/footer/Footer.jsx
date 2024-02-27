/**
 * The internal imports
 */
import "./Footer.css";
import { Link } from "react-router-dom";
import { fbk, insta, whatsApp, logo } from "../../../assets";

export default function Footer() {
  const PilcodeurDev = (
    <a
      href="https://despres-simon.com/"
      target="_blank"
      rel="noreferrer"
      className="link"
    >
      PilcodeurDev
    </a>
  );

  return (
    <footer>
      <div className="links">
        <div className="offset">
          <Link to="/#moveUp">
            <img
              src={logo}
              alt="logo goreconnect"
              className="logo-goreconnect"
            />
          </Link>
        </div>
        <div className="interne-link-buttons">
          <Link to="/#moveUp" className="link">
            Accueil
          </Link>
          <Link to="/la-kinesiologie" className="link">
            Mes prestations
          </Link>
          <Link to="/qui-suis-je" className="link">
            Qui suis-je ?
          </Link>
          <Link to="/#contact" className="link">
            Contact
          </Link>
          <Link to="/#reservation" className="link">
            Rendez-vous
          </Link>
        </div>
        <div className="social-logos">
          <a href="https://www.facebook.com/kinesiologieanimaliere25">
            <img src={fbk} alt="logo facebook" />
          </a>
          <a href="https://www.instagram.com/kinesiologie_animaliere_25/">
            <img src={insta} alt="logo instagram" />
          </a>
          <a href="https://wa.me/33668352377">
            <img src={whatsApp} alt="logo instagram" />
          </a>
        </div>
      </div>
      <div className="central-links">
        <div>
          <span>© 2024 Kinésiologie Animalière 25 Tous droits réservés.</span>
          <span>
            <Link to="/mentions-legales" className="link">
              Mentions légales
            </Link>
          </span>
          <span>
            <Link to="/condition-general-de-vente" className="link">
              CGV
            </Link>
          </span>
          <span>
            <Link to="/condition-general-d-utilisation" className="link">
              CGU
            </Link>
          </span>
        </div>
        <div>Design & Développement par {PilcodeurDev}</div>
      </div>
    </footer>
  );
}
