"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText("vmahi.026@gmail.com"); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section id="contact" style={{ padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ position: "relative", borderRadius: 20, padding: "80px 64px", textAlign: "center", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: 16 }}>Get in touch</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>
              <span className="grad-text">Let&apos;s build</span><br />
              <span className="grad-color">something great.</span>
            </h2>
            <p style={{ fontSize: 15, color: "#555", maxWidth: 420, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Open to senior data engineering roles, consulting, and technical collaborations. Based in UK, working globally.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
              <button onClick={copy} style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                background: "#fff", color: "#000", border: "none", cursor: "pointer", transition: "background 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e5e5e5"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
              >{copied ? "✓ Copied!" : "vmahi.026@gmail.com"}</button>

              {[
                { label: "LinkedIn ↗", href: "https://linkedin.com/in/vegumaheshbabu" },
                { label: "GitHub ↗", href: "https://github.com/vegumaheshbabu" },
              ].map(btn => (
                <a key={btn.label} href={btn.href} target="_blank" style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                  background: "rgba(255,255,255,0.04)", color: "#666", border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#ededed"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#666"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >{btn.label}</a>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[
                { label: "Phone", val: "+44 7818 953 549", href: "tel:+447818953849" },
                { label: "Location", val: "Hemel Hempstead, UK", href: null },
                { label: "Instagram", val: "@_m4h3sh", href: "https://instagram.com/_m4h3sh" },
                { label: "Resume", val: "Download PDF →", href: "resume/Mahesh.pdf" },
              ].map(item => (
                <div key={item.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "#333", marginBottom: 6 }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} download={item.label === "Resume"}
                      style={{ fontSize: 13, color: "#555", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#ededed")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#555")}
                    >{item.val}</a>
                  ) : (
                    <span style={{ fontSize: 13, color: "#555" }}>{item.val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
