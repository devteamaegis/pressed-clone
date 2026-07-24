"use client";
import { useEffect, useRef } from "react";

type RTMenu = { trigger: string; hoverOpen: boolean; gap: number; align: "left" | "right"; html: string };
const byDittoId = (id: string): HTMLElement | null => document.querySelector('[data-ditto-id="' + id + '"]');

/** Reproduces mount-on-open dropdown/nav menus: renders nothing and applies NOTHING on mount; only on
 *  user interaction does it inject the captured panel fragment under its trigger. The base
 *  render is therefore unchanged. */
export default function DropdownMenu({ menus }: { menus: RTMenu[] }) {
  const wired = useRef(false);
  useEffect(() => {
    if (wired.current) return;
    wired.current = true;
    for (const m of menus) {
      const trig = byDittoId(m.trigger);
      if (!trig) continue;
      let panel: HTMLElement | null = null;
      const place = () => {
        if (!panel) return;
        const r = trig.getBoundingClientRect();
        panel.style.position = "absolute";
        panel.style.top = (r.bottom + window.scrollY + m.gap) + "px";
        if (m.align === "right") { panel.style.left = ""; panel.style.right = (document.documentElement.clientWidth - (r.right + window.scrollX)) + "px"; }
        else { panel.style.right = ""; panel.style.left = (r.left + window.scrollX) + "px"; }
        panel.style.zIndex = "9999";
      };
      const open = () => {
        if (panel) return;
        const wrap = document.createElement("div");
        wrap.innerHTML = m.html;
        panel = wrap.firstElementChild as HTMLElement | null;
        if (!panel) return;
        document.body.appendChild(panel);
        place();
        trig.setAttribute("aria-expanded", "true");
      };
      const close = () => { if (panel) { panel.remove(); panel = null; } trig.setAttribute("aria-expanded", "false"); };
      const toggle = () => (panel ? close() : open());
      if (m.hoverOpen) {
        const root = trig.parentElement ?? trig;
        root.addEventListener("mouseenter", open);
        root.addEventListener("mouseleave", close);
      } else {
        trig.addEventListener("click", (e) => { e.preventDefault(); toggle(); });
      }
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
      document.addEventListener("click", (e) => {
        const t = e.target as Node;
        if (panel && !trig.contains(t) && !panel.contains(t)) close();
      });
      window.addEventListener("resize", place);
      window.addEventListener("scroll", place, { passive: true });
    }
    (window as any).__dittoMenuReady = true; // wiring done — lets the gate drive deterministically
  }, [menus]);
  return null;
}
