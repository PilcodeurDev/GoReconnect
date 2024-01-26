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
    <header id="moveUp">
      <div className="banner">
        <img src={banner} alt="Alix et Shiba" />
        {/* <p>Reconnectons nous ensemble a nos âmes.</p> */}
      </div>
    </header>
  );
}
