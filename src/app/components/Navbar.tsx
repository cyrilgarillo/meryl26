"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "Home" },
  { id: "countdown", label: "Countdown" },
  { id: "story", label: "Unsere Geschichte" },
  { id: "destination", label: "Destination & Location" },
  { id: "accommodation", label: "Unterkunft & Anreise" },
  { id: "schedule", label: "Ablauf" },
  { id: "abc", label: "Hochzeits-ABC" },
  { id: "rsvp", label: "Anmeldung" },
  { id: "gifts", label: "Geschenke" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navModeClass = scrolled ? "navbar-light" : "navbar-dark";

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${navModeClass} ${
        styles.navbar
      } ${scrolled ? styles.navbarScrolled : styles.navbarTop}`}
    >
      <div className="container">
        <Link href="#about" className={`navbar-brand ${styles.brand}`}>
          Melanie &amp; Cyril
        </Link>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#weddingNavbar"
          aria-controls="weddingNavbar"
          aria-expanded="false"
          aria-label="Navigation umschalten"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="weddingNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {sections.map((s) => (
              <li className="nav-item" key={s.id}>
                <a href={`#${s.id}`} className={`nav-link ${styles.navLink}`}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
