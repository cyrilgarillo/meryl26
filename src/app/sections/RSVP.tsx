// src/sections/RSVP.tsx
"use client";

import { FormEvent, useState } from "react";
import styles from "./RSVP.module.css";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Hier spaeter API / Email / Formspree integrieren
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="section section-light">
      <div className="container">
        <h2 className="section-title">Anmeldung</h2>
        <p className="section-subtitle">
          Wir freuen uns, wenn du den Tag mit uns feierst! Bitte gib unten an,
          mit wie vielen Personen du kommst und ob du vegetarisch essen moechtest.
          Fragen kannst du jederzeit direkt an{" "}
          <a href="mailto:oka@julia-martin-heiraten.ch">
            oka@julia-martin-heiraten.ch
          </a>{" "}
          schicken (Adresse spaeter anpassen).
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className={styles.label}>Vorname</label>
              <input
                required
                type="text"
                className={`form-control ${styles.input}`}
                name="firstName"
              />
            </div>
            <div className="col-md-6">
              <label className={styles.label}>Nachname</label>
              <input
                required
                type="text"
                className={`form-control ${styles.input}`}
                name="lastName"
              />
            </div>
            <div className="col-md-6">
              <label className={styles.label}>Telefonnummer</label>
              <input
                type="tel"
                className={`form-control ${styles.input}`}
                name="phone"
              />
            </div>
            <div className="col-md-6">
              <label className={styles.label}>E-Mail-Adresse</label>
              <input
                required
                type="email"
                className={`form-control ${styles.input}`}
                name="email"
              />
            </div>

            <div className="col-12">
              <label className={styles.label}>Bemerkung</label>
              <textarea
                className={`form-control ${styles.textarea}`}
                rows={4}
                name="message"
              ></textarea>
            </div>

            <div className="col-md-6">
              <label className={styles.label}>Anzahl Personen</label>
              <select
                name="guests"
                className={`form-select ${styles.input}`}
                defaultValue="1"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.radioGroup}>
            <RadioItem
              label="Ich werde zum Apéro und zum Fest kommen."
              value="apero_fest"
              name="attendance"
              required
            />
            <RadioItem
              label="Ich werde nur zum Apéro kommen."
              value="apero_only"
              name="attendance"
            />
            <RadioItem
              label="Ich melde mich leider ganz ab."
              value="sorry"
              name="attendance"
            />
            <RadioItem
              label="Ich wünsche vegetarisches Essen."
              value="vegetarian"
              name="food"
            />
          </div>

          <button type="submit" className="btn btn-wedding mt-3">
            Senden
          </button>

          {submitted && (
            <p className="mt-3">
              Danke fuer deine Anmeldung! Wir melden uns bei dir, sobald wir
              weitere Infos haben.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

type RadioProps = {
  label: string;
  value: string;
  name: string;
  required?: boolean;
};

function RadioItem({ label, value, name, required }: RadioProps) {
  return (
    <label className={styles.radioItem}>
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        className="form-check-input"
      />
      <span>{label}</span>
    </label>
  );
}
