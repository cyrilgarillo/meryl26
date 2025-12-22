import styles from "./About.module.css";
import { WEDDING_CONFIG } from "@/config/wedding";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.contentWrapper}>
        <div className="container">
          <div className={styles.contentInner}>
            <p className={styles.smallTop}>
              {WEDDING_CONFIG.location.destination} · {WEDDING_CONFIG.weddingDateISO}
            </p>
            <h1 className={styles.heading}>{WEDDING_CONFIG.coupleNames.display}</h1>
            <p className={styles.subheading}>
              In love – Engaged – Soon married
            </p>
            <p className={styles.text}>
              We're thrilled to celebrate this special day with you under the sun,
              sea and palm trees. Here you'll find all the information about our
              wedding in Mallorca, the trip and how to register.
            </p>

            <div className={styles.buttons}>
              <a href="#rsvp" className={`btn btn-wedding ${styles.mainButton}`}>
                Register now
              </a>
              <a href="#story" className={styles.secondaryLink}>
                Discover our story ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
