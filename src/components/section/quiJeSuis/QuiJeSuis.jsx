/**
 * The external imports
*/
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * The internal imports
*/
import "./QuiJeSuis.css";
import { alixBox, alixEducation } from "../../../assets/index";

export const CartReverse = ({ imgOne, imgTwo }) => {
  return (
    <div className="cart-reverse">
      <div className="the-front">
        <img src={imgOne} alt="Séance de kinésiologie sur un cheval" />
      </div>
      <div className="the-back">
        <img src={imgTwo} alt="Séance de communication sur un cheval" />
      </div>
    </div>
  );
};

CartReverse.propTypes = {
  imgOne: PropTypes.string.isRequired,
  imgTwo: PropTypes.string.isRequired,
};

export default function QuiJeSuis() {
  return (
    <section id="quiJeSuis">
      <div className="container">
        <h2> Qui Suis-Je</h2>
        <div className="row">
          <CartReverse imgOne={alixBox} imgTwo={alixEducation} />
          <div className="cursus">
            <h4>
              PLUS DE 12 ANS D'EXPÉRIENCE À TRAVERS UNE GAMME DIVERSIFIÉE DE
              DOMAINES DE PSYCHOLOGIE
            </h4>
            <p>
              J'exerce le métier de kinésiologue animalière. Après avoir exercé
              plusieurs années en tant qu'infirmière hospitalière, je suis
              retournée à mes aspirations d'enfance : aider les animaux.
              Passionnée par les médecines alternatives, mes animaux et moi
              avons pu bénéficier de médecines douces, notamment de
              kinésiologie. Fascinée par cette méthode et les bienfaits que je
              constatais au quotidien, j'ai décidé de changer d'orientation
              professionnelle et de me former à la kinésiologie animalière en
              Touraine, à l'école Âme Animale en 2021-2022.
            </p>
            <div className="container-btn">
              <Link to="/qui-suis-je" className="secondary-btn">
                <span></span>
                <span>en savoir plus...</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
