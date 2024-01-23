/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import "./Navbar.css";
import { testun } from "../../../assets";

export default function navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/#moveUp">
          <img src={testun} alt= "logo entreprise" />
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
