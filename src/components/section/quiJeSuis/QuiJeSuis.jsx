/**
 * The internal imports
*/
import "./QuiJeSuis.css";
import { alix } from "../../../assets/index";
import QuiJeSuisButton from "../../button/QuiJeSuisButton";

export default function QuiJeSuis() {
  const pathBtn = "/#";

  return (
    <section id="quiJeSuis">
      <h2> Qui-suis-je ?</h2>
      <div className="row">
        <div className="imgAlixEcurie">
          <img src={alix} alt="alix qui travil sur un cheval" />
        </div>
        <div className="cursus">
          <div className="sub-title">
            <h3>SUR MOI</h3>
            <p>
              PLUS DE 12 ANS D'EXPÉRIENCE À TRAVERS UNE GAMME DIVERSIFIÉE DE
              DOMAINES DE PSYCHOLOGIE
            </p>
          </div>
          <div className="description">
            <p>
              J'exerce le métier de kinésiologue animalière. Après avoir
              exercé plusieurs années en tant qu'infirmière hospitalière, je
              suis retournée à mes aspirations d'enfant: aider les animaux.
              Passionnée par les médecines alternatives, mes animaux et moi
              même avons pu bénéficier de médecines douces, notamment de
              kinésiologie. Fascinée par cette méthode et les bénéfices que je
              voyais au quotidien, j'ai décidée de changer d'orientation
              professionnelle et me former à la kinésiologie animalière en
              Touraine, à l'école Âme Animale en 2021-2022.
            </p>
            {(pathBtn !== "/#") && <QuiJeSuisButton path={pathBtn} />
            }
          </div>
        </div>
      </div>
    </section>
  );
}
