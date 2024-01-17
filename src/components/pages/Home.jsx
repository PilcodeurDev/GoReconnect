/**
 * The external imports
 */
import Banner from "../banner/Banner";
import Kinesiologie from "../kinesiologie/Kinesiologie";
import QuiJeSuis from "../quiJeSuis/QuiJeSuis";
import Reservation from "../reservation/reservation";

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
      <Reservation />
    </>
  );
}
