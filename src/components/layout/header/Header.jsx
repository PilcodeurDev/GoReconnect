/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import "./header.css";
import { logotexte } from "../../../assets";

export default function header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img
            src={logotexte}
            alt="logo Kinésiologie Animalière 25"
            className=""
          />
        </Link>
      </div>
      <div className="navbar">
        <Link to="/#laKinesiologie">La Kinésiologie</Link>
        <Link to="/#anchor_id_no_setup2">Qui Suis-Je</Link>
        <Link to="/#anchor_id_no_setup3">Rendez-Vous</Link>
      </div>
    </header>
  );
}
