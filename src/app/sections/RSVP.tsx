"use client";

import { FormEvent, useState, useRef } from "react";
import styles from "./RSVP.module.css";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function RSVP() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);

      // Client-side validation
      if (!data.firstName || !data.lastName || !data.email || !data.attendance) {
        setStatus("error");
        setErrorMessage("Bitte fülle alle Pflichtfelder aus.");
        return;
      }

      // Check honeypot (anti-spam)
      if (data.website) {
        // Silently reject spam - show success but don't send
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Senden fehlgeschlagen, bitte versuche es erneut.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage("Senden fehlgeschlagen, bitte versuche es erneut.");
    }
  };

  return (
    <section id="rsvp" className="section section-light">
      <div className="container">
        <h2 className="section-title">Anmeldung</h2>
        <p className="section-subtitle">
          Wir freuen uns riesig, diesen besonderen Tag mit euch zu feiern! Bitte lasst uns
          wissen, wie viele Personen kommen und ob ihr spezielle Essenswünsche habt.
        </p>

        {status === "success" && (
          <div className={styles.successMessage} role="status" aria-live="polite">
            <p>Nachricht versendet</p>
          </div>
        )}

        {status === "error" && (
          <div className={styles.errorMessage} role="alert" aria-live="assertive">
            <p>{errorMessage}</p>
          </div>
        )}

        <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Honeypot field (hidden) - anti-spam */}
          <input
            type="text"
            name="website"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
          
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className={styles.label}>
                Vorname
              </label>
              <input
                id="firstName"
                required
                type="text"
                className={`form-control ${styles.input}`}
                name="firstName"
                placeholder="Melanie"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className={styles.label}>
                Nachname
              </label>
              <input
                id="lastName"
                required
                type="text"
                className={`form-control ${styles.input}`}
                name="lastName"
                placeholder="Müller"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className={styles.label}>
                Telefonnummer (optional)
              </label>
              <input
                id="phone"
                type="tel"
                className={`form-control ${styles.input}`}
                name="phone"
                placeholder="+41 79 123 4567"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className={styles.label}>
                E-Mail-Adresse
              </label>
              <input
                id="email"
                required
                type="email"
                className={`form-control ${styles.input}`}
                name="email"
                placeholder="melanie@beispiel.ch"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="guests" className={styles.label}>
                Anzahl Gäste
              </label>
              <select
                id="guests"
                name="guests"
                className={`form-select ${styles.input}`}
                defaultValue="1"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Person" : "Personen"}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="dietary" className={styles.label}>
                Essenswünsche (optional)
              </label>
              <select
                id="dietary"
                name="dietary"
                className={`form-select ${styles.input}`}
              >
                <option value="">Keine Einschränkungen</option>
                <option value="vegetarian">Vegetarisch</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Glutenfrei</option>
                <option value="other">Andere</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="message" className={styles.label}>
                Besondere Wünsche oder Anmerkungen (optional)
              </label>
              <textarea
                id="message"
                className={`form-control ${styles.textarea}`}
                rows={4}
                name="message"
                placeholder="Lasst uns wissen, wenn ihr besondere Wünsche oder Fragen habt..."
              ></textarea>
            </div>
          </div>

          <div className={styles.radioGroup}>
            <fieldset>
              <legend className={styles.legend}>Werdet ihr dabei sein?</legend>
              <RadioItem
                label="Ich komme zum Apéro und zur Feier"
                value="both"
                name="attendance"
                required
              />
              <RadioItem
                label="Ich komme nur zum Apéro"
                value="aperitif-only"
                name="attendance"
              />
              <RadioItem
                label="Leider muss ich absagen"
                value="decline"
                name="attendance"
              />
            </fieldset>
          </div>

          <button
            type="submit"
            className="btn btn-wedding mt-4"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Wird gesendet..." : "Absenden"}
          </button>
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
  const id = `${name}-${value}`;
  return (
    <label className={styles.radioItem} htmlFor={id}>
      <input
        id={id}
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
