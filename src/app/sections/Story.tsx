import styles from "./Story.module.css";

export default function Story() {
  return (
    <section id="story" className="section section-light">
      <div className="container">
        <h2 className="section-title">Unsere Geschichte</h2>
        <p className="section-subtitle">
          Eine kurze Story wie wir uns kennengelernt haben – in der Kurzversion
          fuer alle, die mit uns anstossen.
        </p>

        <div className={`row ${styles.row}`}>
          <div className="col-md-6">
            <p>
              Alles begann in <strong>Bern</strong>, an einem ganz normalen
              Abend, der dann irgendwie doch nicht mehr so normal war. Ein
              gemeinsamer Apéro mit Freunden, ein spontanes Gespraech ueber
              Reisen, Meer und gutes Essen – und ploetzlich war da dieses
              Gefuehl, dass wir uns schon ewig kennen.
            </p>
            <p>
              Seither haben wir viele gemeinsame Abenteuer erlebt: Staedte,
              Strandferien, Netflix-Marathons, Kaeseplaettchen und jede Menge
              Lachen. Mallorca ist einer unserer Lieblingsorte geworden – und
              genau dort moechten wir uns nun das Ja-Wort geben.
            </p>
          </div>
          <div className="col-md-6">
            <div className={styles.storyCard}>
              <h3 className={styles.storyTitle}>Highlights</h3>
              <ul>
                <li>Erstes Date: irgendwo zwischen Nervositaet und Pizza</li>
                <li>Erste gemeinsame Reise: spontan, chaotisch, perfekt</li>
                <li>Home sweet home: unsere gemeinsame Wohnung</li>
                <li>Der Antrag: ein besonderer Moment nur fuer uns zwei</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
