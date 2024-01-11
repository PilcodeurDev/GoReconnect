/**
 * The external imports
 */
import { Routes, Route } from "react-router-dom";

/**
 * The internal imports
 */
import "./App.css";
import Home from "./components/pages/home.jsx";
import GeneralConditionsSale from "./components/pages/GeneralConditionsSale.jsx";
import LegalNotion from "./components/pages/legalNotion.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Condition-general-de-vente"
        element={<GeneralConditionsSale />}
      />
      <Route path="/mention-legal" element={<LegalNotion />} />
    </Routes>
  );
}

export default App;
