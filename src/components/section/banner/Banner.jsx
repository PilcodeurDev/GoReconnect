/**
 * The external imports
 */

/**
 * The internal imports
 */
import "./Banner.css";
import { banner } from "../../../assets";
import SplitTextAnimation from "../../animation/SplitTextAnimation";

export default function Banner() {
  const textAnimation = "Basée sur la médecine chinoise, la Kinésiologie est spécialisée dans la libération émotionnelle."
  return (
    <header id="moveUp">
      <div className="banner">
        <img src={banner} alt="Alix et Shiba" />
        <p>Reconnecter les êtres vivants à leurs âmes</p>
      </div>
      <div className="banner-text">
        <SplitTextAnimation text={textAnimation} />
      </div>
    </header>
  );
}
