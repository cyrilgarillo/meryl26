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
  Am Abend vor unserer Hochzeit möchten wir mit euch einen ganz besonderen Moment teilen – voller Vorfreude,
  Liebe und gemeinsamer Erinnerungen.
</p>

<p>
  Um diesen Abend noch magischer zu machen, bitten wir euch, in Weiss gekleidet zu erscheinen.
</p>

<p>
  Am Hochzeitstag: Sommerlich festlich denkt an Sonne, eventuell Wind
  und bequeme Schuhe für den Abend.
  High Heels und Kopfsteinpflaster sind nicht immer die besten Freunde ;)
</p>

<p>
  Das Wichtigste für uns ist, dass ihr euch alle wohl fühlt!
</p>

            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.card}>
              <h3>W wie Wetter</h3>
              <p>
                Anfang Juni ist es auf Mallorca angenehm warm. Trotzdem empfehlen
                wir eine leichte Jacke für den Abend, falls es etwas frischer wird.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.card}>
              <h3> hans</h3>
              <p>
                Trinkgelder sind auf Mallorca nicht obligatorisch, aber
                immer willkommen. Ein kleines Trinkgeld für guten Service
                wird geschätzt.
              </p>
            </div>
          </div>
        </div>

        <p className={`${styles.footerNote} mt-4`}>
          Sprache: Mit Englisch kommt man fast überall durch, ein paar
          spanische Worte wie <em>Hola</em> und <em>Gracias</em> kommen aber
          immer gut an.
        </p>
      </div>
    </section>
  );
}
