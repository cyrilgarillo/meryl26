import styles from "./Gifts.module.css";

export default function Gifts() {
  return (
    <section id="gifts" className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2 className="section-title">Geschenke</h2>
        <p className="section-subtitle">
          Eure Zeit und eure Reise nach Mallorca sind fuer uns das grösste Geschenk.
          Wenn ihr uns darueber hinaus etwas schenken möchtet, freuen wir uns ueber einen Beitrag zum Hochzeitsfest. 
        </p>

        <div className={styles.card}>
          <h3>Kontoangaben</h3>
          <ul>
            <li>Melanie hans</li>
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
