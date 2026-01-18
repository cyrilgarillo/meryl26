import styles from "./Accommodation.module.css";

export default function Accommodation() {
  return (
    <section id="accommodation" className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2 className="section-title">Unterkunft &amp; Anreise</h2>
        <p className="section-subtitle">
          Hier ein paar Tipps für eure Reise nach Mallorca und passende
          Hotels in der Nähe der Location.
        </p>

        <div className="row g-4">
          <div className="col-lg-6 mb-4">
            {/* Card: Unterkunft & Anreise */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Unterkunft & Anreise</h3>
              <div className={styles.cardText}>
                <p className={styles.highlight}>
                  <strong>Can Pastilla</strong> liegt direkt am Meer, nur ca. 10 Minuten 
                  vom Flughafen entfernt. Ein ruhiger Ort mit vielen Restaurants und Bars, 
                  ideal für Spaziergänge entlang der Playa de Palma. Wer Party möchte, 
                  erreicht die bekannten Spots an der Playa de Palma zu Fuss in ca. 30 Minuten.
                </p>
                <p className={styles.metaRow}>
                  <strong>Fahrzeiten:</strong>
                </p>
                <ul className={styles.list}>
                  <li>Flughafen → Finca ca. 35–40 Minuten mit Auto</li>
                  <li>Can Pastilla → Finca ca. 35–40 Minuten mit Auto</li>
                </ul>
                <p>
                  Hotel in Porreres ist möglich, oft ist Can Pastilla kostengünstiger 
                  und zudem direkt am Meer.
                </p>
              </div>
            </div>

            {/* Shuttle Callout */}
            <div className={styles.callout}>
              <h4 className={styles.calloutTitle}>🚐 Shuttle-Service</h4>
              <p className={styles.calloutText}>
                Damit ihr den Tag entspannt geniessen könnt und sicher zur Finca sowie später wieder nach Hause kommt, organisieren wir einen Shuttle ab Can Pastilla, hin und zurück.
                <br /><br />
                Details folgen, sobald alle Anmeldungen eingegangen sind.
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
                   <li>Palma ist mit dem Bus in rund 30 Minuten erreichbar und sehr empfehlenswert.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
