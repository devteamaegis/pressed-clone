"use client";
import { useEffect } from "react";

type RTWaapi = { anchor: string; keyframes: Array<Record<string, string | number>>; duration: number; delay: number; easing: string; iterations: number; direction: string; fill: string };
type RTRotator = { anchor: string; texts: string[]; intervalMs: number };
type RTReveal = { anchor: string; opacity: string; transform: string; transition: string };
type RTMarquee = { anchor: string; pxPerSec: number; periodPx: number };
export type MotionSpec = { waapi: RTWaapi[]; rotators: RTRotator[]; reveals: RTReveal[]; marquees: RTMarquee[] };

const byDittoId = (id: string): HTMLElement | null => document.querySelector('[data-ditto-id="' + id + '"]');

/** Replays captured motion the stylesheet can't express: WAAPI animations (re-issued via
 *  element.animate), rotating text (interval-cycled), and scroll-triggered reveals (start
 *  hidden, transition in when scrolled into view). Starts on mount. Installs
 *  window.__dittoMotionStop, and honors window.__dittoMotionStopped, so the validator can
 *  restore the fully-settled/revealed base for grading — gates 0–6 measure the static frame.
 *  The stopped FLAG (set by the validator even before this mounts) makes a late mount skip
 *  applying any motion, closing the hydration race that could otherwise leave content hidden. */
export default function DittoMotion({ spec }: { spec: MotionSpec }) {
  useEffect(() => {
    if ((window as any).__dittoMotionStopped) return; // measurement mode — apply nothing
    const intervals: ReturnType<typeof setInterval>[] = [];
    const rotators: Array<{ el: HTMLElement; original: string | null }> = [];
    const anims: Animation[] = [];
    const revealed: Array<() => void> = []; // per-reveal "show now" fns (also the cleanup)
    let io: IntersectionObserver | null = null;
    let forceTimer: ReturnType<typeof setTimeout> | null = null;

    for (const w of spec.waapi) {
      const el = byDittoId(w.anchor);
      if (!el) continue;
      try {
        anims.push(el.animate(w.keyframes, {
          duration: w.duration || 0, delay: w.delay || 0, easing: w.easing || "linear",
          iterations: w.iterations < 0 ? Infinity : (w.iterations || 1),
          direction: (w.direction as PlaybackDirection) || "normal", fill: (w.fill as FillMode) || "none",
        }));
      } catch { /* unsupported keyframe shape — leave static */ }
    }

    // Marquees: rAF-driven continuous tickers, reconstructed as an infinite linear translateX
    // loop over one duplicated copy (periodPx). Leftward (pxPerSec<0): 0 -> -period; rightward:
    // -period -> 0. Cancelled by stopAll so the graded frame shows the element's base transform.
    for (const m of spec.marquees) {
      const el = byDittoId(m.anchor);
      if (!el || !m.periodPx || !m.pxPerSec) continue;
      const left = m.pxPerSec < 0;
      const a = "translateX(0px)", z = "translateX(-" + m.periodPx + "px)";
      const durationMs = Math.max(1000, Math.round((m.periodPx / Math.abs(m.pxPerSec)) * 1000));
      try {
        anims.push(el.animate([{ transform: left ? a : z }, { transform: left ? z : a }], {
          duration: durationMs, iterations: Infinity, easing: "linear",
        }));
      } catch { /* leave static */ }
    }

    for (const r of spec.rotators) {
      const el = byDittoId(r.anchor);
      if (!el || r.texts.length < 2) continue;
      const original = el.textContent;
      const start = r.texts.findIndex((t) => t === (original || "").replace(/\s+/g, " ").trim());
      let i = start < 0 ? 0 : start;
      rotators.push({ el, original });
      intervals.push(setInterval(() => { i = (i + 1) % r.texts.length; el.textContent = r.texts[i]!; }, Math.max(400, r.intervalMs)));
    }

    // Scroll reveals: hide each element (opacity/transform) with the captured transition,
    // then reveal (clear the inline overrides → transitions to the base CSS) when it scrolls
    // into view. A force-reveal timer guarantees nothing stays hidden if the observer misses.
    if (spec.reveals.length) {
      // Reveal to the full resting state. Setting 1/none (not clearing to base) is correct for
      // every reveal — the revealed state is always full + un-offset — and is REQUIRED for
      // scroll-scrub panels whose captured base CSS is a frozen mid-scrub value (opacity 0.63).
      const show = (el: HTMLElement) => { el.style.opacity = "1"; el.style.transform = "none"; };
      const byEl = new Map<Element, HTMLElement>();
      for (const rv of spec.reveals) {
        const el = byDittoId(rv.anchor);
        if (!el) continue;
        el.style.transition = rv.transition;
        el.style.opacity = rv.opacity;
        if (rv.transform !== "none") el.style.transform = rv.transform;
        byEl.set(el, el);
        revealed.push(() => show(el));
      }
      io = new IntersectionObserver((entries) => {
        for (const e of entries) if (e.isIntersecting) { const el = byEl.get(e.target); if (el) { show(el); io!.unobserve(e.target); } }
      }, { rootMargin: "0px 0px -8% 0px" });
      for (const el of byEl.keys()) io.observe(el);
      forceTimer = setTimeout(() => { for (const f of revealed) f(); }, 4000);
    }

    const stopAll = () => {
      (window as any).__dittoMotionStopped = true;
      for (const id of intervals) clearInterval(id);
      for (const r of rotators) r.el.textContent = r.original;
      for (const a of anims) { try { a.cancel(); } catch { /* ignore */ } }
      if (io) io.disconnect();
      if (forceTimer) clearTimeout(forceTimer);
      for (const f of revealed) f(); // reveal everything → base CSS settled frame
    };
    // Measurement hook: restore the fully-settled/revealed base for grading.
    (window as any).__dittoMotionStop = stopAll;
    return () => {
      for (const id of intervals) clearInterval(id);
      if (io) io.disconnect();
      if (forceTimer) clearTimeout(forceTimer);
      try { delete (window as any).__dittoMotionStop; } catch { /* ignore */ }
    };
  }, [spec]);
  return null;
}
