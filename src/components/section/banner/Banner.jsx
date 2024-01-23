/**
 * The external imports
 */

/**
 * The internal imports
 */
import "./Banner.css";
import { alixAndShiba } from "../../../assets";

export default function Banner() {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner">
          <img src={alixAndShiba} alt="Alix et Shiba" />
          <h1>Go Reconnect</h1>
        </div>
      </div>
    </section>
  );
}
