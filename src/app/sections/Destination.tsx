import styles from "./Destination.module.css";
import { getMapEmbedURL, WEDDING_CONFIG } from "@/config/wedding";

export default function Destination() {
  const mapURL = getMapEmbedURL(WEDDING_CONFIG.location);

  return (
    <section id="destination" className="section section-light">
      <div className="container">
        <h2 className="section-title">Destination & Ort</h2>
        <p className="section-subtitle">
          Wir feiern auf Mallorca – Sonne, Meer und eine Prise Urlaubsfeeling.
          Hier findet ihr genauere Infos zur Zeremonie und zum Fest.
        </p>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <h3 className={styles.subheading}>Trauung</h3>
            <p>
              Die Trauung findet an einem besonderen Ort auf Mallorca statt (genaue
              Adresse folgt). Plant bitte genügend Zeit für die Anfahrt ein – es
              gibt Parkplätze in der Nähe.
            </p>

            <h3 className={styles.subheading}>Feier</h3>
            <p>
              Anschliessend feiern wir in einem Restaurant mit Blick aufs Meer.
              Freut euch auf Apéro, Dinner, tolle Musik und hoffentlich viele
              Tanzmoves bis in die Nacht.
            </p>

            <h3 className={styles.subheading}>Anfahrt & Parken</h3>
            <ul className={styles.list}>
              <li>Parkplätze in der Nähe der Location vorhanden</li>
              <li>Taxi/Transfer ab Palma problemlos möglich</li>
              <li>
                Genauere Infos zu Shuttle-Optionen folgen, sobald wir alle
                Anmeldungen haben.
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <div className={styles.mapWrapper}>
              <iframe
                src={mapURL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
                title="Karte der Hochzeitslocation"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
