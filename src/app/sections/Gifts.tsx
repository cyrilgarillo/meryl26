import styles from "./Gifts.module.css";

export default function Gifts() {
  return (
    <section id="gifts" className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2 className="section-title">Geschenke</h2>
        <p className="section-subtitle">
          Das groesste Geschenk ist, dass ihr euch die Zeit nehmt und mit uns
          nach Mallorca kommt. Falls ihr uns trotzdem etwas schenken moechtet,
          freuen wir uns ueber einen Beitrag fuer gemeinsame Erlebnisse.
        </p>

        <div className={styles.card}>
          <h3>Ideen</h3>
          <ul>
            <li>Beitrag zur Hochzeitsreise</li>
            <li>Gutschein fuer gemeinsame Aktivitäten</li>
            <li>Etwas Persönliches, das euch mit uns verbindet</li>
          </ul>
          <p className="mt-2">
            Kontodaten oder Wunschliste folgen spaeter – wir informieren euch
            rechtzeitig per Mail oder hier auf der Seite.
          </p>
        </div>
      </div>
    </section>
  );
}
