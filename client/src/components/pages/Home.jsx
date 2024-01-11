/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import Footer from "../layout/footer/footer.jsx";
import Headers from "../layout/header/header.jsx";

export default function Home() {
  return (
    <>
      <Headers />
      <h1>Home</h1>
      <p>world, hello</p>
      <Footer />
    </>
  );
}
