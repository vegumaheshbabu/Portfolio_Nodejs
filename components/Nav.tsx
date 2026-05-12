"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Work", "Experience", "Stack", "About", "Contact"];

  return (
    <>
      {/* Premium top light bar — Apple/Linear style */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 1, zIndex: 200,
        background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.5) 20%, rgba(139,92,246,0.7) 50%, rgba(59,130,246,0.5) 80%, transparent 100%)",
        opacity: 0.6,
      }} />

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 56,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        background: scrolled ? "rgba(8,8,8,0.80)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        transition: "all 0.3s ease",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>Mahesh Babu</span>
          <span style={{
            fontSize: 10, padding: "2px 8px", borderRadius: 999, fontWeight: 500,
            background: "rgba(34,197,94,0.1)", color: "#4ade80",
            border: "1px solid rgba(34,197,94,0.2)",
          }}>Open to work</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: 13, color: "#555", transition: "color 0.2s", letterSpacing: "-0.01em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ededed")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}
            >{l}</a>
          ))}
          <a href="resume/Mahesh.pdf" download style={{
            fontSize: 13, padding: "6px 16px", borderRadius: 8, fontWeight: 500,
            background: "#fff", color: "#000", transition: "all 0.2s",
            boxShadow: "0 1px 0 rgba(255,255,255,0.1) inset",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e8e8e8"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >Resume ↓</a>
        </div>
      </nav>
    </>
  );
}
