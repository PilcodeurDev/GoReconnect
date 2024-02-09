/**
 * The external imports
 */
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
/**
 * The internal imports
 */
import "./Reservation.css";
import { shiba, shibaCalin } from "../../../assets";
import { CartReverse } from "../quiJeSuis/QuiJeSuis"

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
            <div className="redirection-btn">
              <a
                href="https://wa.me/33668352377"
                rel="noreferrer"
                target="_blank"
              >
                <div className="main-button reservation-button">
                  <span>WhatsApp :</span>
                  <FaWhatsappSquare className="logoWhatsApp" />
                </div>
              </a>
              <a href="mailto:kinesiologieanimaliere25@gmail.com?subject=Prise de Contact&body=Bonjour Alix, je souhaite prendre rendez-vous pour mon [espèce-de-l'animal] qui s'appel(le) [Prénom-de-l'animal] . Je souhaiterais un rendez-vous téléphonique pour échanger dès que possible avec vous. Cordialement, [Prénom] [Nom]. ">
                <div className="main-button reservation-button">
                  <span>Mail :</span>
                  <FaEnvelope className="logoEnveloppe" />
                </div>
              </a>
            </div>
          </div>
          <CartReverse imgOne={shiba} imgTwo={shibaCalin} />
        </div>
      </div>
    </section>
  );
}
