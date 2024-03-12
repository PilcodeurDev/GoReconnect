/**
 * The external imports
 */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";

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
import BubbleAnimation from "../../animation/BubbleAnimation";

gsap.registerPlugin(ScrollTrigger);

const fecthInfoBulle = async () => {
  const response = await fetch("http://localhost:1337/api/info-bulle-kinesios");
  const data = await response.json();
  return data;
};

const InfoBullesList = ({ infoBulles }) => {
  const data = infoBulles?.data || [];

  return (
    <>
      {data.map((infobulle, index) => (
        <div key={index} className="contener-text">
          <div className="background-circle-one"></div>
          <h4 className="sub-title">{infobulle.attributes.subTitle}</h4>
          <p className="text-kinesio">{infobulle.attributes.text}</p>
          <div className="background-circle-tow"></div>
        </div>
      ))}
    </>
  );
};

export default function Kinesiologie() {
  const {
    data: infoBulles = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["infoBulle"],
    queryFn: fecthInfoBulle,
  });

  return (
    <section id="laKinesiologie">
      <div className="container">
        <h2>La Kinésiologie</h2>
        <div className="row">
          <div className="diagramme">
            <div className="array">
              <div className="array-benefits">
                <BubbleAnimation
                  selector=".first-row-benefit .bubble"
                  duration={5}
                  start="top 80%"
                  end="top 40%"
                />
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
                <Link to="/la-kinesiologie" className="secondary-btn">
                  <span>La Kinésiologie</span>
                  <span>en savoir plus...</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="content-text-kinesio">
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error: {error.message}</div>}
            <InfoBullesList infoBulles={infoBulles} />
          </div>
        </div>
      </div>
    </section>
  );
}

InfoBullesList.propTypes = {
  infoBulles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};
