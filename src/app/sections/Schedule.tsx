// src/sections/Schedule.tsx
import styles from "./Schedule.module.css";

export default function Schedule() {
  return (
    <section id="schedule" className="section section-light">
      <div className="container">
        <h2 className="section-title">Der Ablauf</h2>
        <p className="section-subtitle">
          Damit ihr wisst, was euch an den einzelnen Tagen erwartet – von
          Freitagabend bis zum gemuetlichen Sonntagmorgen.
        </p>

        <div className={styles.timeline}>
          <Day
            title="Freitag – Ankommen &amp; Welcome"
            items={[
              "ab 16:00 · Anreise und Check-in",
              "19:00 · Lockeres Get-together / Apéro",
              "open end · Anstossen, Ankommen, Ferienmodus aktivieren",
            ]}
          />
          <Day
            title="Samstag – Der grosse Tag"
            items={[
              "14:30 · Eintreffen der Gaeste an der Trauungs-Location",
              "15:00 · Trauung",
              "17:00 · Apéro &amp; Fotos",
              "19:00 · Dinner &amp; Party",
              "open end · Tanz, Drinks und ganz viel Liebe",
            ]}
          />
          <Day
            title="Sonntag – Gemeinsames Fruehstueck"
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
