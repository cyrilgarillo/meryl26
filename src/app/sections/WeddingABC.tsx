// src/sections/WeddingABC.tsx
import styles from "./WeddingABC.module.css";

export default function WeddingABC() {
  return (
    <section id="abc" className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2 className="section-title">Hochzeits-ABC &amp; Lokales</h2>
        <p className="section-subtitle">
          Alles Wichtige rund um Dresscode, Wetter, Sprache und kleine
          Besonderheiten vor Ort.
        </p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className={styles.card}>
              <h3>A wie Anziehen</h3>
              <p>
                Sommerlich festlich – denkt an Sonne, eventuell Wind am Meer
                und bequeme Schuhe fuer den Abend. High Heels + Kopfsteinpflaster
                sind nicht immer die besten Freunde.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.card}>
              <h3>W wie Wetter</h3>
              <p>
                Anfang Juni ist es auf Mallorca angenehm warm. Trotzdem empfehlen
                wir eine leichte Jacke fuer den Abend, falls es am Meer
                frischer wird.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.card}>
              <h3>N wie Notfall</h3>
              <p>
                In dringenden Faellen erreicht ihr uns ueber unsere Handy-Nummern.
                Die europaweite Notfallnummer ist <strong>112</strong>.
              </p>
            </div>
          </div>
        </div>

        <p className={`${styles.footerNote} mt-4`}>
          Sprache: Mit Englisch kommt man fast ueberall durch, ein paar
          spanische Worte wie <em>Hola</em> und <em>Gracias</em> kommen aber
          immer gut an.
        </p>
      </div>
    </section>
  );
}
