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
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src={logotexte}
            alt="logo Kinésiologie Animalière 25"
            className=""
          />
        </Link>
      </div>
      <div className="navbar">
        <Link to="/home#anchor_id_no_setup1">La Kinésiologie</Link>
        <Link to="/home#anchor_id_no_setup2">Qui Suis-Je</Link>
        <Link to="/home#anchor_id_no_setup3">Rendez-Vous</Link>
      </div>
    </header>
  );
}
