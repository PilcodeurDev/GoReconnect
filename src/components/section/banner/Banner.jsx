/**
 * The external imports
 */

/**
 * The internal imports
 */
import "./Banner.css";
import { banner } from "../../../assets";

export default function Banner() {
  return (
    <section id="banner">
      <div className="banner">
        <img src={banner} alt="Alix et Shiba" />
        <h1>Go Reconnect</h1>
      </div>
    </section>
  );
}
