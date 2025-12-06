// src/sections/Destination.tsx
import styles from "./Destination.module.css";
import { WEDDING_MAP_EMBED_URL } from "../api/googleMaps";

export default function Destination() {
  return (
    <section id="destination" className="section section-light">
      <div className="container">
        <h2 className="section-title">Destination &amp; Location</h2>
        <p className="section-subtitle">
          Wir feiern auf Mallorca – Sonne, Meer und eine Portion Ferienfeeling.
          Genauere Infos zur Trauung und zur Feier findet ihr hier.
        </p>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <h3 className={styles.subheading}>Trauung</h3>
            <p>
              Die Trauung findet an einem besonderen Ort auf Mallorca statt
              (genaue Adresse folgt). Plant genuegend Zeit fuer die Anreise ein
              – in der Naehe stehen Parkplaetze zur Verfuegung.
            </p>

            <h3 className={styles.subheading}>Feier</h3>
            <p>
              Anschliessend feiern wir in einem Restaurant mit Blick aufs Meer.
              Dort erwartet euch Apéro, Dinner, gute Musik und hoffentlich
              viele Tanzschritte bis in die Nacht.
            </p>

            <h3 className={styles.subheading}>Anfahrt &amp; Parking</h3>
            <ul className={styles.list}>
              <li>Parkplaetze in der Naehe der Location</li>
              <li>Taxi/Transfer ab Palma gut moeglich</li>
              <li>
                Genaue Infos zu Shuttle-Optionen folgen, sobald alle Anmeldungen
                da sind.
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <div className={styles.mapWrapper}>
              <iframe
                src={WEDDING_MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
