/**
 * The internal imports
 */
import "./Reservation.css";
import { shiba, shibaCalin } from "../../../assets";
import { CartReverse } from "../quiJeSuis/QuiJeSuis";

export default function Reservation() {
  return (
    <section id="reservation">
      <div className="container">
        <h2>Prendre Rendez-vous</h2>
        <div className="row">
          <div className="before-reservation">
            <h3 className="more-info">
              Contactez-moi gratuitement pour parler des troubles de votre
              animal, avant de réserver une première séance :
            </h3>
            <div>
              <a
                className="main-button"
                target="_blank"
                rel="noreferrer"
                href="https://calendly.com/kinesiologie_animaliere_25/20min"
              >
                Mon agenda
              </a>
            </div>
          </div>
          <CartReverse imgOne={shiba} imgTwo={shibaCalin} />
        </div>
      </div>
    </section>
  );
}
