/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import "./Kinesiologie.css";
import { animals, dontGU, freedom, questionPersonnel, physical, workSpace} from "../../../assets";import SplitTextAnimation from "../../animation/SplitTextAnimation";

export default function Kinesiologie() {
  return (
    <section id="laKinesiologie">
      <div className="array">
        <div className="array-benefits">
          <div className="first-row-benefit">
            <div className="benefit-one">
              <span>Physique, Emotionnel, Mental, Spirituel</span>
              <div className="benefit-image">
                <img
                  src={physical}
                  alt="Physique, Emotionnel, Mental, Spirituel"
                />
              </div>
            </div>
            <div className="benefit-two">
              <span>Prévention ou Accompagnement</span>
                <img src={dontGU} alt="message positif" />
            </div>
          </div>
          <div className="second-row-benefit">
            <div className="benefit-three">
              <span>Origine du problème</span>
              <div className="benefit-image">
                <img src={questionPersonnel} alt="" />
              </div>
            </div>
            <div className="benefit-four">
              <span>Pour tous les Animaux</span>
              <div className="benefit-image">
                <img src={animals} alt="wild deer" />
              </div>
            </div>
          </div>
          <div className="third-row-benefit">
            <div className="benefit-five">
              <span>Libération Emotionnelle</span>
              <div className="benefit-image">
                <img src={freedom} alt="broken chain" />
              </div>
            </div>
            <div className="benefit-six">
              <span>présentiel ou distantiel</span>
              <div className="benefit-image">
                <img src={workSpace} alt="office" />
              </div>
            </div>
          </div>
          <Link to="/#" className="main-content">
            <span>La Kinésiologie</span>
            <span>en savoir plus...</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
