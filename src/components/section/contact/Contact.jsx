/**
 * The external imports
 */
import { FaPhone } from "react-icons/fa6";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa"
import { useContext } from "react";

/**
 * The internal imports
 */
import "./Contact.css";
import { logo } from "../../../assets";
import GoogleMpaView from "../../googleMapView/GoogleMapView";
import { DataContext } from "../../../context/DataProvider";



export default function Contact() {
  const { owner } = useContext(DataContext);
  const legalData = [
    {
      value: owner.site,
      icon: <img src={logo} alt="logo entreprise" />,
    },
    { value: owner.name, icon: <FaUser /> },
    {
      value: owner.address,
      icon: <FaMapMarkerAlt />,
    },
    { value: owner.phone, icon: <FaPhone /> },
  ];

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
