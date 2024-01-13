/**
 * The external imports
 */
import { Routes, Route } from "react-router-dom";

/**
 * The internal imports
 */
import "./App.css";
import Home from "./components/pages/Home.jsx";
import GeneralConditionsSale from "./components/pages/GeneralConditionsSale.jsx";
import LegalNotion from "./components/pages/legalNotion.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route
        path="/Condition-general-de-vente"
        element={<GeneralConditionsSale />}
      />
      <Route path="/mention-legal" element={<LegalNotion />} />
    </Routes>
  );
}

export default App;
