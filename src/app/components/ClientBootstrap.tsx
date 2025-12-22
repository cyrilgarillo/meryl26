"use client";

import { useEffect } from "react";

/**
 * Client-side Bootstrap JS initialization
 * This component ensures Bootstrap's JavaScript is loaded for interactive components
 * like navbar collapse, modals, etc.
 */
export default function ClientBootstrap() {
  useEffect(() => {
    // Dynamically import Bootstrap JS only on the client side
    // @ts-ignore - Bootstrap JS bundle doesn't have type declarations
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return null;
}
