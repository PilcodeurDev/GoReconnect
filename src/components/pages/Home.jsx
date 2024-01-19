/**
 * The external imports
 */
import Banner from "../section/banner/Banner";
import Kinesiologie from "../section/kinesiologie/Kinesiologie";
import QuiJeSuis from "../section/quiJeSuis/QuiJeSuis";
import Reservation from "../section/reservation/Reservation";
import Contact from "../section/contact/Contact";

/**
 * The internal imports
 */

export default function Home() {
  return (
    <>
      <header id="moveUp">
        <Banner />
      </header>
      <Kinesiologie />
      <QuiJeSuis />
      <Contact />
      <Reservation />
    </>
  );
}
