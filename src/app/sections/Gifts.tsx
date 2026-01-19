import styles from "./Gifts.module.css";

export default function Gifts() {
  return (
    <section id="gifts" className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2 className="section-title">Geschenke</h2>
        <p className="section-subtitle">
          Eure Zeit und eure Reise nach Mallorca sind für uns das grösste Geschenk.
          Wenn ihr uns darüber hinaus etwas schenken möchtet, freuen wi uns über einen 
          Beitrag zu unseren Flitterwochen oder gemeinsame Erlebnisse.
        </p>

        <div className={styles.card}>
          <h3>Kontoangaben</h3>
          <ul>
            <li>Name: Melanie Landolf & Cyril Scheurmann</li>
            <li>Adresse: Bernstrasse 20, 3110 Münsingen</li>
            <li>IBAN: </li> 
          </ul>
          <p className="mt-2">
            
          </p>
        </div>
      </div>
    </section>
  );
}
