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

  const handleNavLinkClick = () => {
    // Close the navbar collapse when a link is clicked (mobile only)
    const navbarCollapse = document.getElementById("weddingNavbar");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      // Try using Bootstrap's Collapse API first
      const bootstrap = (window as any).bootstrap;
      if (bootstrap && bootstrap.Collapse) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || 
                          new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      } else {
        // Fallback: manually remove the 'show' class if Bootstrap isn't loaded yet
        navbarCollapse.classList.remove("show");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        styles.navbar
      } ${scrolled ? styles.navbarScrolled : styles.navbarTop}`}
    >
      <div className="container">
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {WEDDING_CONFIG.sections.map((section) => (
              <li className="nav-item" key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link ${styles.navLink}`}
                  onClick={handleNavLinkClick}
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
