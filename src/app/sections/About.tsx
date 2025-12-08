import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.contentWrapper}>
        <div className="container">
          <div className={styles.contentInner}>
            <p className={styles.smallTop}>Mallorca · 06.06.2026</p>
            <h1 className={styles.heading}>Melanie &amp; Cyril</h1>
            <p className={styles.subheading}>
              Verliebt – Verlobt – Bald verheiratet
            </p>
            <p className={styles.text}>
              Wir freuen uns riesig, diesen besonderen Tag mit euch unter Sonne,
              Meer und Palmen zu feiern. Hier findet ihr alle Infos zur Hochzeit
              in Mallorca, zur Reise und zur Anmeldung.
            </p>

            <div className={styles.buttons}>
              <a href="#rsvp" className={`btn btn-wedding ${styles.mainButton}`}>
                Zur Anmeldung
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
