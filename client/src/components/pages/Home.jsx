/**
 * The external imports
 */
import { Link } from "react-router-dom";
import Banner from "../banner/Banner.jsx";

/**
 * The internal imports
 */

export default function Home() {
  return (
    <>
      <div className="container">
        <Banner />
        <p>world, hello</p>
      </div>
    </>
  );
}
