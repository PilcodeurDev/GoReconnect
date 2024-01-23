/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import "./Navbar.css";
import { logoGR } from "../../../assets";

export default function navbar() {
  return (
    <nav>
      <div>
        <Link to="/#moveUp">
          <img src={logoGR} alt= "logo entreprise" />
        </Link>
      </div>
      <div className="navButton">
        <Link to="/#laKinesiologie">La Kinésiologie</Link>
        <Link to="/#quiJeSuis">Qui Suis-Je</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/#reservation" className="mainButton">
          Rendez-Vous
        </Link>
      </div>
    </nav>
  );
}
