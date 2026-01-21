import styles from "./Accommodation.module.css";

export default function Accommodation() {
  return (
    <section id="accommodation" className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2 className="section-title">Unterkunft &amp; Anreise</h2>
        <p className="section-subtitle">
          Hier ein paar Informationen für eure Reise nach Mallorca.
Wir haben wundervolle Ferien in Can Pastilla erlebt und können euch diese Gegend von Herzen empfehlen.
Aus diesem Grund startet auch unser Shuttle-Service am Hochzeitstag in Can Pastilla.
        </p>

        <div className="row g-4">
          <div className="col-lg-6 mb-4">
            {/* Card: Unterkunft & Anreise */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Unterkunft & Anreise</h3>
              <div className={styles.cardText}>
                <p className={styles.highlight}>
                  <strong>Can Pastilla</strong> liegt direkt am Meer, nur ca. 10 Auto-Minuten
                  vom Flughafen entfernt. Ein ruhiger Ort mit vielen Restaurants und Bars, 
                  ideal für Spaziergänge entlang der Playa de Palma oder einer Abkühlung im Meer.
                </p>
                <p className={styles.metaRow}>
                  <strong>Fahrzeiten:</strong>
                </p>
                <ul className={styles.list}>
                  <li>Flughafen → Finca ca. 35–40 Minuten mit dem Auto</li>
                  <li>Can Pastilla → Finca ca. 35–40 Minuten mit dem Auto</li>
                </ul>
                <p>
                 
                </p>
              </div>
            </div>

            {/* Shuttle Callout */}
            <div className={styles.callout}>
              <h4 className={styles.calloutTitle}>🚐 Shuttle-Service</h4>
              <p className={styles.calloutText}>
                Für eine entspannte und sichere An- und Rückreise organisieren wir einen Shuttle ausschliesslich ab Can Pastilla, der euch direkt zur Finca und später wieder ohne Umwege nach Can Pastilla zurückbringt.
                <br /><br />
                Genauere Informationen folgen nach Eingang aller Anmeldungen.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.staticMapWrapper}>
              <img 
                src="/images/KarteMallorca.png" 
                alt="Karte von Mallorca mit Porreres und Can Pastilla" 
                className={styles.staticMap}
                loading="lazy"
              />
              <div className={styles.mapCaption}>
                <ul className={styles.captionList}>
                  <li>Flughafen Palma</li>
                  <li>Can Pastilla 10 min vom Flughafen entfernt</li>
                  <li>Can Feliu - Hochzeitslocation</li>
                </ul>
              </div>
            </div>

            {/* Alternative Anreise Callout */}
            <div className={styles.callout}>
              <h4 className={styles.calloutTitle}>🚗 Alternative Anreise</h4>
              <p className={styles.calloutText}>
                Wer lieber individuell anreisen möchte, kann selbstverständlich mit dem Auto anreisen. Es stehen Parkmöglichkeiten direkt vor der Finca zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
