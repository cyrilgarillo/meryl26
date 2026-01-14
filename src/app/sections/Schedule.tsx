import styles from "./Schedule.module.css";

export default function Schedule() {
  return (
    <section id="schedule" className="section section-light">
      <div className="container">
        <h2 className="section-title">Der Ablauf</h2>
        <p className="section-subtitle">
          Damit ihr wisst, was euch an den einzelnen Tagen erwartet – von
          Freitagabend bis zum gemütlichen Sonntagmorgen.
        </p>

        <div className={styles.timeline}>
          <Day
            title="Freitag Get-together"
            items={[
              "18:00 · Treffen in der Finca für ein gemütliches Abendessen",
              "Anstossen, Ankommen, Ferienmodus aktivieren und einstimmen auf die Hochzeit",
            ]}
          />
          <Day
            title="Samstag Der grosse Tag"
            items={[
              "15:15 · Eintreffen der Gäste in der Finca",
              "15:30 · Welcome Drink",
              "16:00 · Freie Trauung",
              "17:00 · Apéro",
              "19:00 · Dinner",
              "21:30 · Tanz, Drinks & ganz viel Liebe",
            ]}
          />
          <Day
            title="Sonntag Gemeinsames Fruehstueck"
            items={[
              "09:30–11:30 · Gemeinsames Fruehstueck / Brunch",
              "Verabschiedung &amp; individuelle Rueckreise",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Day({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={styles.day}>
      <h3 className={styles.dayTitle}>{title}</h3>
      <ul>
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
