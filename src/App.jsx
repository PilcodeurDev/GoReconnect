/**
 * The external imports
 */
import { Routes, Route } from "react-router-dom";

/**
 * The internal imports
 */
import "./App.css";
import Home from "./components/pages/Home";
import GeneralConditionsSale from "./components/pages/GeneralConditionsSale";
import LegalNotion from "./components/pages/LegalNotion";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route
        path="/condition-general-de-vente"
        element={<GeneralConditionsSale />}
      />
      <Route path="/mention-legal" element={<LegalNotion />} />
    </Routes>
  );
}

export default App;
