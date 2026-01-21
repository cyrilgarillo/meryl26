import styles from "./Story.module.css";

export default function Story() {
  return (
    <>
      {/* Story Intro: Cyril vs. Meli */}
      <section id="story" className="section section-light">
        <div className="container">
          <h2 className="section-title">Meryl</h2>
          <p className="section-subtitle">
            Zwei unterschiedliche Welten, eine grosse Liebe.
          </p>

          <div className={`row ${styles.storyGrid}`}>
            {/* Cyril */}
            <div className="col-6 mb-4 d-flex">
              <div className={styles.personCard}>
                <h3 className={styles.personTitle}>Cyril</h3>
                <ul className={styles.traitList}>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🎁</span>
                    <span>Voller Überraschungen</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>😅</span>
                    <span>Manchmal zu spät</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🚿</span>
                    <span>Spontan</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🌀</span>
                    <span>Kreatives Chaos mit Charme</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🤷</span>
                    <span>Irgendwo reicht auch</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>📖</span>
                    <span>Regeln lesen</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🧑‍🍳</span>
                    <span>Rezepttreu</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🔒</span>
                    <span>Sicherheitsliebend</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🧮</span>
                    <span>Zahlen & Fakten</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>⏳</span>
                    <span>Geduldig</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🪜</span>
                    <span>Schritt für Schritt</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🪟</span>
                    <span>Fenster auf Kipp</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>👨‍👩‍👧‍👦</span>
                    <span>Familienmensch</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>💖</span>
                    <span>Liebevoll</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Meli */}
            <div className="col-6 mb-4 d-flex">
              <div className={styles.personCard}>
                <h3 className={styles.personTitle}>Meli</h3>
                <ul className={styles.traitList}>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>✨</span>
                    <span>Lässt sich gerne überraschen</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🕒</span>
                    <span>Pünktlich</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>📋</span>
                    <span>Organisiert</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🌸</span>
                    <span>Ordnungsliebend</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>📦</span>
                    <span>Alles hat seinen Platz</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🔍</span>
                    <span>Einfach ausprobieren</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🍳</span>
                    <span>Nach Gefühl</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🚀</span>
                    <span>Abenteuerlustig</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🌈</span>
                    <span>Emotion & Gefühl</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>⚡</span>
                    <span>Ungeduldig</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>🏃</span>
                    <span>Direkt los</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>❄️</span>
                    <span>Ganz oder gar nicht</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>👨‍👩‍👧‍👦</span>
                    <span>Familienmensch</span>
                  </li>
                  <li className={styles.traitItem}>
                    <span className={styles.emoji}>💖</span>
                    <span>Liebevoll</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={styles.storyFooter}>
            <p className={styles.loveMessage}>
              <span className={styles.heartEmoji}>❤️</span>
              Liebe ist stärker als alles andere
              <span className={styles.heartEmoji}>❤️</span>
            </p>
          </div>

          {/* Final Message */}
          <div className={styles.finalMessage}>
            <p className={styles.homeMessage}>
              Unsere Herzen haben ihr Zuhause gefunden
            </p>
          </div>

          {/* Divider */}
          <hr className={styles.divider} />
        </div>
      </section>
    </>
  );
}
