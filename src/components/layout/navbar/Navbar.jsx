/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import "./Navbar.css";

export default function navbar() {
  return (
    <nav>
      <div>
        <Link to="/#moveUp">
          <div className="logo">
            <span>Go</span>
            <span>Reconnect</span>
          </div>
        </Link>
      </div>
      <div className="navButton">
        <Link to="/#laKinesiologie">La Kinésiologie</Link>
        <Link to="/#quiJeSuis">Qui Suis-Je</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/#reservation" className="mainButton">Rendez-Vous</Link>
      </div>
    </nav>
  );
}
