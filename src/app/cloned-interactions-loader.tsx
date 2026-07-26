"use client";
import { useEffect } from "react";

/**
 * Loads the framework-free interaction runtime AFTER React has hydrated.
 *
 * The runtime mutates the DOM (builds the mega-menu, cart badge, rotates the
 * promo bar, wires the FAQ accordion, etc.). If it runs before hydration it
 * causes a hydration mismatch and React 19 replaces those nodes, silently
 * wiping every handler — which is exactly what happened on Vercel when the
 * script was loaded from <head> (it worked locally only by timing luck).
 * useEffect runs once, client-side, after mount/hydration, so the runtime
 * always attaches to the final, stable DOM.
 */
export default function ClonedInteractionsLoader() {
  useEffect(() => {
    if (document.getElementById("cloned-interactions-js")) return;
    const s = document.createElement("script");
    s.id = "cloned-interactions-js";
    s.src = "/cloned-interactions.js";
    document.body.appendChild(s);
  }, []);
  return null;
}
