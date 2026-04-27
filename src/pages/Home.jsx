import Hero from "../sections/Hero";
import Couple from "../sections/Couple";
import Event from "../sections/Event";
import Countdown from "../sections/Countdown";
import RSVP from "../sections/RSVP";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Couple />
      <Event />
      <Countdown />
      <RSVP />
      <Footer />
    </>
  );
}
