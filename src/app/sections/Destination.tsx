import styles from "./Destination.module.css";
import { getMapEmbedURL, WEDDING_CONFIG } from "@/config/wedding";

export default function Destination() {
  const mapURL = getMapEmbedURL(WEDDING_CONFIG.location);

  return (
    <section id="destination" className="section section-light">
      <div className="container">
        <h2 className="section-title">Destination & Ort</h2>
        <p className="section-subtitle">
          Wir feiern auf Mallorca, Sonne und eine Prise Urlaubsfeeling.
          Hier findet ihr genauere Infos zum Ort.
        </p>

        <div className="row">
          <div className="col-lg-6 mb-4">
            {/* Optional: Kleine Bild-Thumbnails - Bilder unter /public/images/ ablegen */}
            {/* 
            <div className={styles.imageGrid}>
              <img 
                src="/images/porreres.jpg" 
                alt="Porreres Landschaft" 
                className={styles.thumb}
                loading="lazy"
              />
              <img 
                src="/images/can-pastilla.jpg" 
                alt="Can Pastilla Strand" 
                className={styles.thumb}
                loading="lazy"
              />
            </div>
            */}

            <div className={styles.gridLeft}>
              {/* Card 1: Trauung */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Trauung in Porreres</h3>
                <div className={styles.cardText}>
                  <p className={styles.metaRow}>
                    <strong>Adresse:</strong> Cami de sa Serra, Km 1,2, 07260 Porreres, Balearic Islands, Spanien
                  </p>
                  <p>
                    Die Trauung findet im Landesinneren, in der Finca Can Feliu in Porreres statt. 
                  </p>
                </div>
              </div>



            </div>
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
