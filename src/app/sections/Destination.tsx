import styles from "./Destination.module.css";
import { getMapEmbedURL, WEDDING_CONFIG } from "@/config/wedding";

export default function Destination() {
  const mapURL = getMapEmbedURL(WEDDING_CONFIG.location);

  return (
    <section id="destination" className="section section-light">
      <div className="container">
        <h2 className="section-title">Destination & Location</h2>
        <p className="section-subtitle">
          We celebrate in Mallorca – sun, sea and a touch of vacation feeling.
          You'll find more detailed information about the ceremony and the
          celebration here.
        </p>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <h3 className={styles.subheading}>Ceremony</h3>
            <p>
              The ceremony takes place at a special location in Mallorca (exact
              address to follow). Please allow enough time for the journey – there
              is parking available nearby.
            </p>

            <h3 className={styles.subheading}>Celebration</h3>
            <p>
              Afterwards, we'll celebrate at a restaurant with a view of the sea.
              You can look forward to aperitif, dinner, great music and hopefully
              many dance moves into the night.
            </p>

            <h3 className={styles.subheading}>Getting there & Parking</h3>
            <ul className={styles.list}>
              <li>Parking available near the location</li>
              <li>Taxi/transfer from Palma easily possible</li>
              <li>
                Detailed information about shuttle options coming soon, once we
                have all registrations.
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
                title="Wedding location map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
