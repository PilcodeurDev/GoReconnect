/**
 * The internal imports
 */
import "./Banner.css";
import AlixAndShiba from "../../../public/images/alixAndShiba.jpg";

export default function Banner() {
  return (
    <section>
      <div className="container">
        <div className="banner">
          <img src={AlixAndShiba} alt="alix and shiba" />
          <h1>Kinésiologie Animanière 25</h1>
        </div>
      </div>
    </section>
  );
}
