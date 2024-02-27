/**
 * The external imports
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * The internal imports
 */
import "./styles/colors.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import LegalNotion from "./components/pages/legalNotion/LegalNotion";
import GeneralConditionsSale from "./components/pages/GeneralConditionsSale/GeneralConditionsSale";
import GeneralConditionsUse from "./components/pages/GeneralConditionsUse/GeneralConditionsUse";
import ScrollToAnchor from "./helper/ScrollToAnchor";
import Erreur404 from "./components/pages/error404/Error404";
import KinesiologiePage from "./components/pages/KinesiologiePage/KinesiologiePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root element={<Home />} />,
    errorElement: <Erreur404 />,
  },
  {
    path: "mentions-legales",
    element: <Root element={<LegalNotion />} />,
  },
  {
    path: "la-kinesiologie",
    element: <Root element={<KinesiologiePage />} />,
  },
  {
    path: "condition-general-d-utilisation",
    element: <Root element={<GeneralConditionsUse />} />,
  },
  {
    path: "condition-general-de-vente",
    element: <Root element={<GeneralConditionsSale />} />,
  },
]);

function Root({ element }) {
  return (
    <>
      <Navbar />
      {element}
      <Footer />
      <ScrollToAnchor />
    </>
  );
}
Root.propTypes = {
  element: PropTypes.element.isRequired,
};

function App() {
  return <RouterProvider router={router} />;
}

export default App;
