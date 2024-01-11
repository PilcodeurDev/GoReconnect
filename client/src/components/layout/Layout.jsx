/**
 * The external imports
 */
import { Outlet } from "react-router-dom";

/**
 * The internal imports
 */
import Header from "./header/header.jsx";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
