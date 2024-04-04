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
            <div>
              <h3 className="more-info">
                Contactez-moi gratuitement pour parler des troubles de votre
                animal, avant de réserver une première séance :
              </h3>
              <div className="btn-container">
                <a
                  className="main-button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://calendly.com/kinesiologie_animaliere_25/30min"
                >
                  Appel Téléphonique
                </a>
              </div>
            </div>
            <div>
              <h3 className="more-info">
                Prendre rendez-vous pour une séance de kinésiologie animale :
              </h3>
              <div className="btn-container">
                <a
                  className="main-button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://calendly.com/kinesiologie_animaliere_25/seance-de-kinesiologie-a-distance?back=1&month=2024-02"
                >
                  Séance kinésiologie
                </a>
              </div>
            </div>
            <div>
              <h3 className="more-info">
                Besoin de me contacter, c'est par ici :
              </h3>
              <div className="btn-container btn-contact">
                <a
                  className="main-button whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/33668352377"
                >
                  WhatsApp
                </a>
                <a
                  className="main-button instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/kinesiologie_animaliere_25"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <CartReverse imgOne={shiba} imgTwo={shibaCalin} />
        </div>
      </div>
    </section>
  );
}
