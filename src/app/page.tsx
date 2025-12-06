// src/app/page.tsx
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Countdown from "./sections/Countdown";
import Story from "./sections/Story";
import Destination from "./sections/Destination";
import Accommodation from "./sections/Accommodation";
import Schedule from "./sections/Schedule";
import WeddingABC from "./sections/WeddingABC";
import RSVP from "./sections/RSVP";
import Gifts from "./sections/Gifts";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={`${styles.main} page-offset`}>
        <About />
        <Countdown />
        <Story />
        <Destination />
        <Accommodation />
        <Schedule />
        <WeddingABC />
        <RSVP />
        <Gifts />
      </main>
    </>
  );
}
