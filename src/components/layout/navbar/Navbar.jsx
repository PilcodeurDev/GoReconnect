/**
 * The external imports
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCloseO } from "react-icons/cg";

/**
 * The internal imports
 */
import "./Navbar.css";
import { grLogo } from "../../../assets";

export default function navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div className="logoWebSite">
        <div className="logo">
          <Link to="/#moveUp">
            <img src={grLogo} alt="logo Go Reconnect" />
          </Link>
        </div>
        <div className="title">
          <h1>Go Reconnect</h1>
        </div>
      </div>
      <div className={` navButton ${showMenu ? "showNavbar" : "hiddenNavbar"}`}>
        <Link to="/#laKinesiologie">La Kinésiologie</Link>
        <Link to="/#quiJeSuis">Qui Suis-Je</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/#reservation" className="mainButton">
          Rendez-Vous
        </Link>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="menuBurger">
        {showMenu ? (
          <CgCloseO className="menuBurger" />
        ) : (
          <RxHamburgerMenu className="menuBurger " />
        )}
      </button>
    </nav>
  );
}
