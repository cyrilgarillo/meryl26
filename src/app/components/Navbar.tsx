"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { WEDDING_CONFIG } from "@/config/wedding";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        styles.navbar
      } ${scrolled ? styles.navbarScrolled : styles.navbarTop}`}
    >
      <div className="container">
        <Link href="#about" className={`navbar-brand ${styles.brand}`}>
          {WEDDING_CONFIG.coupleNames.display}
        </Link>

        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#weddingNavbar"
          aria-controls="weddingNavbar"
          aria-expanded="false"
          aria-label="Navigationsmenü umschalten"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="weddingNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {WEDDING_CONFIG.sections.map((section) => (
              <li className="nav-item" key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link ${styles.navLink}`}
                  data-bs-toggle="collapse"
                  data-bs-target="#weddingNavbar"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
