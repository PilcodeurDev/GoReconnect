/**
 * The external imports
*/
import { Link } from "react-router-dom";

/**
 * The internal imports
*/
import "./QuiJeSuis.css";
import { alixBox, alixEducation } from "../../../assets/index";

export default function QuiJeSuis() {
  return (
    <section id="quiJeSuis">
      <h2> Qui Je Suis</h2>
      <div className="row">
        <div className="cart-reverse">
          <div className="the-front">
            <img src={alixBox} alt="Séance de kinésiologie sur un cheval" />
          </div>
          <div className="the-back">
            <img
              src={alixEducation}
              alt="Séance de communication sur un cheval"
            />
          </div>
        </div>
        <div className="cursus">
          <h3>SUR MOI</h3>
          <h4>
            PLUS DE 12 ANS D'EXPÉRIENCE À TRAVERS UNE GAMME DIVERSIFIÉE DE
            DOMAINES DE PSYCHOLOGIE
          </h4>
          <p>
            J'exerce le métier de kinésiologue animalière. Après avoir exercé
            plusieurs années en tant qu'infirmière hospitalière, je suis
            retournée à mes aspirations d'enfant: aider les animaux. Passionnée
            par les médecines alternatives, mes animaux et moi même avons pu
            bénéficier de médecines douces, notamment de kinésiologie. Fascinée
            par cette méthode et les bénéfices que je voyais au quotidien, j'ai
            décidée de changer d'orientation professionnelle et me former à la
            kinésiologie animalière en Touraine, à l'école Âme Animale en
            2021-2022.
          </p>
          <div className="container-btn">
            <Link to="/#" className="secondary-btn">
              <span>La Kinésiologie</span>
              <span>en savoir plus...</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
