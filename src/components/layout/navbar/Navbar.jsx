/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import "./Navbar.css";
import { grLogo } from "../../../assets";

export default function navbar() {
  return (
    <nav>
      <div className="logoWebSite">
        <div className="logo">
          <Link to="/#moveUp">
            <img src={grLogo} alt="logo Go Reconnect" />
          </Link>
        </div>
        <div className="text">
          <span>Go Reconnect</span>
        </div>
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
