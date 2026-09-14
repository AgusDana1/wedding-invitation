import Hero from "../sections/Hero";
import Story from "../sections/Story";
import Timeline from "../sections/Timeline";
import Event from "../sections/Event";
import Venue from "../sections/Venue";
import DressCode from "../sections/DressCode";
import BottomCards from "../sections/BottomCards";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Timeline />
      <Event />
      <Venue />
      <DressCode />
      <BottomCards />
      <Footer />
    </>
  );
}
