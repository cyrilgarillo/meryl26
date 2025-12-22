"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Redirect to home page on success
        window.location.href = "/";
      } else {
        setError("Falsches Passwort. Bitte versuche es erneut.");
        setPassword("");
      }
    } catch (err) {
      setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Melanie &amp; Cyril</h1>
        <p className={styles.subtitle}>Hochzeit 06.06.2026 · Mallorca</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="password" className={styles.label}>
            Passwort
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="Passwort eingeben"
            required
            autoFocus
            disabled={isLoading}
          />

          {error && (
            <div className={styles.error} role="alert">
              {error}
            </div>
          )}

          <button
            type="submit"
            className={styles.button}
            disabled={isLoading || !password}
          >
            {isLoading ? "Wird überprüft..." : "Zur Hochzeitsseite"}
          </button>
        </form>

        <p className={styles.hint}>
          Das Passwort wurde euch per E-Mail oder Einladung zugeschickt.
        </p>
      </div>
    </div>
  );
}
