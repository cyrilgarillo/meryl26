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
              Verliebt – Verlobt – Bald verheiratet
            </p>
            <p className={styles.text}>
              Wir freuen uns riesig, diesen besonderen Tag mit euch unter Sonne,
              Meer und Palmen zu feiern. Hier findet ihr alle Informationen zu
              unserer Hochzeit auf Mallorca, zur Anreise und zur Anmeldung.
            </p>

            <div className={styles.buttons}>
              <a href="#rsvp" className={`btn btn-wedding ${styles.mainButton}`}>
                Jetzt anmelden
              </a>
              <a href="#story" className={styles.secondaryLink}>
                Unsere Geschichte entdecken ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
