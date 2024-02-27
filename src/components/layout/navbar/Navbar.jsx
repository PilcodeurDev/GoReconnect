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
import { logo } from "../../../assets";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div className="web-site-logo">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo Go Reconnect" />
          </Link>
        </div>
        <div className="title">
          <h1>Go Reconnect</h1>
        </div>
      </div>
      <div className={` navButton ${showMenu ? "showNavbar" : "hiddenNavbar"}`}>
        <Link to="/la-kinesiologie">La Kinésiologie</Link>
        <Link to="/qui-suis-je">Qui Suis-Je</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/#reservation" className="main-button">
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
