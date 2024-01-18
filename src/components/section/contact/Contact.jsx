/**
 * The external imports
 */
import { FaPhone } from "react-icons/fa6";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";

/**
 * The internal imports
 */
import "./Contact.css";
import { logo } from "../../../assets";
import GoogleMpaView from "../../googleMapView/GoogleMapView";

const legalData = [
  {
    value: "Kinésiologie Animalière 25",
    icon: <img src={logo} alt="logo ka25" />,
  },
  { value: "Alix Lucidarme", icon: <FaUser /> },
  {
    value: "32 Bis rue de l'Etang, 25560 Frasne",
    icon: <FaMapMarkerAlt />,
  },
  { value: "+33 668352377", icon: <FaPhone /> },
];
export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="informations">
            <h3>Mon Contact :</h3>
            {legalData.map(({ value, icon }, index) => (
              <div key={index}>
                <span className="icon">{icon}</span>
                <span className="text">{value}</span>
              </div>
            ))}
          </div>
          <GoogleMpaView />
        </div>
      </div>
    </section>
  );
}
