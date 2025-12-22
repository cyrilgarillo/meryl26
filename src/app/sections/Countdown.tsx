"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const targetDate = new Date("2026-06-06T00:00:00+02:00");

function calculateTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const diff = targetDate.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show skeleton/default values until client-side hydration completes
  if (!mounted) {
    return (
      <section id="countdown" className={`section page-offset ${styles.wrapper}`}>
        <div className="container text-center">
          <h2 className="section-title">Bis zum grossen Tag</h2>
          <p className="section-subtitle">
            Wir zählen die Tage bis wir mit euch auf Mallorca feiern.
          </p>
          <div className={styles.counterRow}>
            <CounterBox label="Tage" value={0} />
            <CounterBox label="Stunden" value={0} />
            <CounterBox label="Minuten" value={0} />
            <CounterBox label="Sekunden" value={0} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="countdown" className={`section page-offset ${styles.wrapper}`}>
      <div className="container text-center">
        <h2 className="section-title">Bis zum grossen Tag</h2>
        <p className="section-subtitle">
          Wir zählen die Tage bis wir mit euch auf Mallorca feiern.
        </p>

        <div className={styles.counterRow}>
          <CounterBox label="Tage" value={timeLeft.days} />
          <CounterBox label="Stunden" value={timeLeft.hours} />
          <CounterBox label="Minuten" value={timeLeft.minutes} />
          <CounterBox label="Sekunden" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
}

function CounterBox({ label, value }: { label: string; value: number }) {
  return (
    <div className={styles.box}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
