/**
 * The internal imports
*/
import Banner from "../section/banner/Banner";
import Kinesiologie from "../section/kinesiologie/Kinesiologie";
import QuiJeSuis from "../section/quiJeSuis/QuiJeSuis";
import Reservation from "../section/reservation/Reservation";
import Contact from "../section/contact/Contact";

export default function Home() {
  return (
    <>
      <Banner />
        <Kinesiologie />
        <QuiJeSuis />
        <Reservation />
        <Contact />
    </>
  );
}
