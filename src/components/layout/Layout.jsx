/**
 * The external imports
 */
import { Outlet } from "react-router-dom";

/**
 * The internal imports
 */
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
