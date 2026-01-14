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
          <div className="col-md-6">
            <div className={styles.card}>
              <h3 className={styles.heading}>Anreise</h3>
              <ul>
                <li>
                  <strong>Flug:</strong> Ziel-Flughafen ist Palma de Mallorca
                  (PMI).
                </li>
                <li>
                  <strong>Transfer:</strong> Mietwagen oder Taxi sind
                  am Flughafen verfügbar.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className={styles.card}>
              <h3 className={styles.heading}>Unterkunft</h3>
              <ul>
                <li>Hotel A – Strandnah, ungefähr 10–15 Minuten zur Location</li>
                <li>Hotel B – Ruhig gelegen, gut für Familien</li>
                <li>Airbnb / Finca – perfekt für Gruppen oder längerer Aufenthalt</li>
              </ul>
              <p className="mt-2">
                Wir empfehlen euch frühzeitig zu buchen, da Juni auf Mallorca
                zur Hauptsaison gehört.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
