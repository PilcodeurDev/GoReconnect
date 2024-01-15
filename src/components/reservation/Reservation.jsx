/**
 * The external imports
 */
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
/**
 * The internal imports
 */
import "./Reservation.css";

export default function Reservation() {
  return (
    <section id="reservation">
      <div className="container">
        <h2>Prendre Rendez-vous</h2>
        <p className="info">Pour votre première séance, merci de réserver un appel téléphonique:</p>
        <div className="choice">
          <a href="https://wa.me/33668352377" rel="noreferrer" target="_blank">
            <span className="recommandation">Recommandé:</span>
            <div className="bulle" id="bulleWhatsApp">
              <span>Par What's App :</span>
              <FaWhatsappSquare className="logoWhatsApp" />
            </div>
          </a>
          <a href="mailto:kinesiologieanimaliere25@gmail.com?subject=Prise de Contact&body=Bonjour Alix, je souhaite prendre rendez-vous pour mon [espèce-de-l'animal] qui s'appel(le) [Prénom-de-l'animal] . Je souhaiterais un rendez-vous téléphonique pour échanger dès que possible avec vous. Cordialement, [Prénom] [Nom]. ">
            <div className="bulle">
              <span>Par Mail :</span>
              <FaEnvelope className="logoEnveloppe" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
