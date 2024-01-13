/**
 * The external imports
 */
import { Outlet } from "react-router-dom";

/**
 * The internal imports
 */
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
