"use client";

import { FormEvent, useState } from "react";
import styles from "./RSVP.module.css";
import { WEDDING_CONFIG } from "@/config/wedding";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);

      // TODO: Replace with actual form submission endpoint
      // Example: await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(data) })
      console.log("Form submission data:", data);

      setSubmitted(true);
      e.currentTarget.reset();

      // Auto-hide message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="rsvp" className="section section-light">
      <div className="container">
        <h2 className="section-title">RSVP</h2>
        <p className="section-subtitle">
          We'd love to celebrate this special day with you! Please let us know how many
          people will be joining and if you have any dietary preferences. Questions?
          Feel free to contact us anytime at{" "}
          <a href={`mailto:${WEDDING_CONFIG.contactEmail}`}>
            {WEDDING_CONFIG.contactEmail}
          </a>
          .
        </p>

        {submitted && (
          <div className={styles.successMessage} role="status" aria-live="polite">
            <p>
              Thank you for your registration! We'll get back to you as soon as we have more
              information.
            </p>
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className={styles.label}>
                First Name
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
                Last Name
              </label>
              <input
                id="lastName"
                required
                type="text"
                className={`form-control ${styles.input}`}
                name="lastName"
                placeholder="Smith"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className={styles.label}>
                Phone Number (optional)
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
                Email Address
              </label>
              <input
                id="email"
                required
                type="email"
                className={`form-control ${styles.input}`}
                name="email"
                placeholder="melanie@example.com"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="guests" className={styles.label}>
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                className={`form-select ${styles.input}`}
                defaultValue="1"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="dietary" className={styles.label}>
                Dietary Preferences (optional)
              </label>
              <select
                id="dietary"
                name="dietary"
                className={`form-select ${styles.input}`}
              >
                <option value="">No restrictions</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-free</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="message" className={styles.label}>
                Special Requests or Notes (optional)
              </label>
              <textarea
                id="message"
                className={`form-control ${styles.textarea}`}
                rows={4}
                name="message"
                placeholder="Let us know if you have any special requests or questions..."
              ></textarea>
            </div>
          </div>

          <div className={styles.radioGroup}>
            <fieldset>
              <legend className={styles.legend}>Will you be joining us?</legend>
              <RadioItem
                label="I'll be at the aperitif and the celebration"
                value="both"
                name="attendance"
                required
              />
              <RadioItem
                label="I'll only be at the aperitif"
                value="aperitif-only"
                name="attendance"
              />
              <RadioItem
                label="Unfortunately, I have to decline"
                value="decline"
                name="attendance"
              />
            </fieldset>
          </div>

          <button
            type="submit"
            className="btn btn-wedding mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
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
