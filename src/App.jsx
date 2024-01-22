/**
 * The external imports
 */
import { Routes, Route } from "react-router-dom";

/**
 * The internal imports
 */
import './styles/colors.css';
import Home from "./components/pages/Home";
import GeneralConditionsSale from "./components/pages/GeneralConditionsSale/GeneralConditionsSale";
import GeneralConditionsUse from "./components/pages/GeneralConditionsUse/GeneralConditionsUse";
import LegalNotion from "./components/pages/legalNotion/LegalNotion";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/condition-general-de-vente"
          element={<GeneralConditionsSale />}
        />
        <Route
          path="/condition-general-dutilisation"
          element={<GeneralConditionsUse />}
        />
        <Route path="/mention-legal" element={<LegalNotion />} />
      </Route>
    </Routes>
  );
}

export default App;
