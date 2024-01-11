/**
 * The external imports
 */
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/**
 * The internal imports
 */
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
