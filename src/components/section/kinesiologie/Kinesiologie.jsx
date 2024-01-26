/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import "./Kinesiologie.css";
import {
  animals,
  dontGU,
  freedom,
  questionPersonnel,
  physical,
  workSpace,
} from "../../../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BubbleAnimation from "../../animation/BubbleAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Kinesiologie() {
  return (
    <section id="laKinesiologie">
      <BubbleAnimation
        selector=".first-row-benefit .bubble"
        duration={5}
        start="top 80%"
        end="top 40%"
      />
      <div className="array">
        <div className="array-benefits">
          <div className="first-row-benefit">
            <div className="benefit-one bubble">
              <span>Physique, Emotionnel, Mental, Spirituel</span>
              <div className="benefit-image">
                <img
                  src={physical}
                  alt="Physique, Emotionnel, Mental, Spirituel"
                />
              </div>
            </div>
            <div className="benefit-two bubble">
              <span>Prévention ou Accompagnement</span>
              <img src={dontGU} alt="message positif" />
            </div>
          </div>
          <BubbleAnimation
            selector=".second-row-benefit .bubble"
            duration={5}
            start="top 50%"
            end="top 20%"
          />
          <div className="second-row-benefit">
            <div className="benefit-three bubble">
              <span>Origine du Problème</span>
              <div className="benefit-image">
                <img src={questionPersonnel} alt="" />
              </div>
            </div>
            <div className="benefit-four bubble">
              <span>Pour tous les Animaux</span>
              <div className="benefit-image">
                <img src={animals} alt="wild deer" />
              </div>
            </div>
          </div>
          <BubbleAnimation
            selector=".third-row-benefit .bubble"
            duration={5}
            start="top 25%"
            end="top 0%"
          />
          <div className="third-row-benefit">
            <div className="benefit-five bubble">
              <span>Libération Emotionnelle</span>
              <div className="benefit-image">
                <img src={freedom} alt="broken chain" />
              </div>
            </div>
            <div className="benefit-six bubble">
              <span>Présentiel ou Distantiel</span>
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
