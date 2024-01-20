/**
 * The external imports
 */
import AOS from "aos";


/**
 * The internal imports
 */
import "./Banner.css";
import { alixAndShiba } from "../../../assets";


AOS.init();

export default function Banner() {
  return (
    <section>
      <div className="container">
        <div className="banner">
          <img src={alixAndShiba} alt="Alix et Shiba" />
          <h1>Kinésiologie Animanière 25</h1>
        </div>
      </div>
    </section>
  );
}
