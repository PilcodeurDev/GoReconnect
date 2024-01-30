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
import GoogleMapView from "../../googleMapView/GoogleMapView";
import { DataContext } from "../../../context/DataProvider";



export default function Contact() {
  const { owner } = useContext(DataContext);

  const contactData = [
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
        <h2>Mon Contact :</h2>
        <div className="informations">
          {contactData.map(({ value, icon }, index) => (
            <div key={index}>
              <span className="icon">{icon}</span>
              <span className="text">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-map">
        <GoogleMapView />
      </div>
    </section>
  );
}
