import styles from "./Gifts.module.css";

export default function Gifts() {
  return (
    <section id="gifts" className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2 className="section-title">Geschenke</h2>
        <p className="section-subtitle" style={{ fontSize: '1.1rem', fontWeight: '500', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Eure Zeit und eure Reise nach Mallorca sind für uns das grösste Geschenk.
          Wenn ihr uns darüber hinaus etwas schenken möchtet, freuen wir uns über einen 
          Beitrag zu unseren Flitterwochen oder gemeinsame Erlebnisse.
        </p>

        <div className={styles.card}>
          <h3>Kontoangaben</h3>
          <ul>
            <li>Name: Melanie Landolf</li>
            <li>Adresse: Bernstrasse 20, 3110 Münsingen</li>
            <li>IBAN: CH57 0878 1000 2441 3870 0 </li> 
            <li> Bank:
              Swissquote Bank SA<br />
              Chemin de la Crétaux 33 Case postale 319<br />
              1196 Gland<br />
              SWITZERLAND
            </li> 
          </ul>
          <p className="mt-2">
            
          </p>
        </div>
      </div>
    </section>
  );
}
