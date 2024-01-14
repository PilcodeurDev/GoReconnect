/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import "./Navbar.css";
import { logotexte } from "../../../assets";

export default function navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img
            src={logotexte}
            alt="logo Kinésiologie Animalière 25"
            className=""
          />
        </Link>
      </div>
      <div className="navButton">
        <Link to="/#laKinesiologie">La Kinésiologie</Link>
        <Link to="/#quiJeSuis">Qui Suis-Je</Link>
        <Link to="/#anchor_id_no_setup3">Rendez-Vous</Link>
      </div>
    </nav>
  );
}
