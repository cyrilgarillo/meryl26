// src/sections/About.tsx
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className={`section section-light ${styles.wrapper}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className={styles.heading}>Wir heiraten!</h1>
            <p className={styles.date}>06.06.2026 · Mallorca</p>
            <p className={styles.names}>Melanie &amp; Cyril</p>
            <p className={styles.text}>
              Unter Sonne, Meer und Palmen moechten wir diesen besonderen Tag
              mit euch feiern. Auf dieser Seite findet ihr alle Infos zur
              Hochzeit, zur Reise und zur Anmeldung.
            </p>
            <a href="#rsvp" className="btn btn-wedding mt-3">
              Ich bin dabei!
            </a>
          </div>
          <div className="col-lg-6 text-center">
            {/* Platzhalterbild – hier euren eigenen Import oder Pfad verwenden */}
            <div className={styles.photoWrapper}>
              <Image
                src="/images/melanie-cyril.jpg"
                alt="Melanie und Cyril"
                fill
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
