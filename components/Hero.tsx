"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ROLES = ["Data Engineer", "Cloud Architect", "Pipeline Builder", "Analytics Engineer"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter
  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 85);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1 + 0.3, o: Math.random() * 0.18 + 0.04,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${0.025 * (1 - d / 90)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", alignItems: "center",
      padding: "100px 0 60px", overflow: "hidden",
    }}>
      {/* Canvas background */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }} />

      {/* ── PREMIUM APPLE-STYLE BG ORBS ── */}

      {/* Left large blue orb */}
      <div style={{
        position: "absolute", left: "-10%", top: "10%",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      {/* Right purple orb behind photo */}
      <div style={{
        position: "absolute", right: "-5%", top: "5%",
        width: 650, height: 650, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(168,85,247,0.07) 40%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      {/* Bottom center green teal orb */}
      <div style={{
        position: "absolute", left: "35%", bottom: "-10%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)",
      }} />

      {/* ── MAIN CONTENT: split layout ── */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1200, margin: "0 auto", padding: "0 48px",
        display: "grid", gridTemplateColumns: "1fr auto",
        gap: 80, alignItems: "center", width: "100%",
      }}>

        {/* LEFT — text */}
        <div className="anim-fadein">

          {/* Status badge */}
          <div style={{ marginBottom: 28 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "5px 12px", borderRadius: 999, fontSize: 11, fontWeight: 500, letterSpacing: "0.02em",
              background: "rgba(34,197,94,0.08)", color: "#4ade80",
              border: "1px solid rgba(34,197,94,0.18)",
            }}>
              <span className="anim-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              Available for opportunities
            </span>
          </div>

          {/* Name — Apple SF-style large */}
          <h1 style={{
            fontSize: "clamp(52px, 7vw, 88px)",
            fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.95,
            marginBottom: 20, color: "#fff",
          }}>
            Mahesh<br />
            <span style={{
              background: "linear-gradient(135deg, #fff 0%, #a0a0a0 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Babu</span>
          </h1>

          {/* Typewriter role */}
          <div style={{ height: 40, display: "flex", alignItems: "center", marginBottom: 24 }}>
            <span style={{
              fontSize: "clamp(16px,2.2vw,24px)", fontWeight: 300,
              color: "#555", letterSpacing: "-0.01em",
            }}>
              {displayed}
              <span className="anim-blink" style={{
                display: "inline-block", width: 2, height: "0.9em",
                marginLeft: 2, background: "#3b82f6", verticalAlign: "middle",
              }} />
            </span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: 16, color: "#555", lineHeight: 1.85,
            maxWidth: 480, marginBottom: 40, fontWeight: 400,
          }}>
            Building data infrastructure that powers decisions.{" "}
            <span style={{ color: "#404040" }}>
              5+ years crafting cloud pipelines, real-time analytics, and BI systems that scale.
            </span>
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
            {[
              { label: "View my work", href: "#work", primary: true },
              { label: "LinkedIn ↗", href: "https://linkedin.com/in/vegumaheshbabu", primary: false },
              { label: "GitHub ↗", href: "https://github.com/vegumaheshbabu", primary: false },
            ].map(btn => (
              <a key={btn.label} href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "10px 22px", borderRadius: 10, fontSize: 13, fontWeight: 500,
                  background: btn.primary ? "#fff" : "rgba(255,255,255,0.04)",
                  color: btn.primary ? "#000" : "#666",
                  border: btn.primary ? "none" : "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.2s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  if (btn.primary) { el.style.background = "#e8e8e8"; }
                  else { el.style.color = "#ededed"; el.style.borderColor = "rgba(255,255,255,0.18)"; el.style.background = "rgba(255,255,255,0.07)"; }
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  if (btn.primary) { el.style.background = "#fff"; }
                  else { el.style.color = "#666"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.background = "rgba(255,255,255,0.04)"; }
                  el.style.transform = "translateY(0)";
                }}
              >{btn.label}{btn.primary && <span style={{ marginLeft: 2 }}>→</span>}</a>
            ))}
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { n: "4+", l: "Years" },
              { n: "10+", l: "Projects" },
              { n: "3", l: "Clouds" },
              { n: "99.9%", l: "Accuracy" },
            ].map((s, i) => (
              <div key={s.n} style={{
                paddingRight: 32, marginRight: 32,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{ fontSize: 22, fontWeight: 600, color: "#ededed", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: "#444", marginTop: 4, letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo with Apple-style glass card + orb halo */}
        <div style={{ position: "relative", flexShrink: 0 }}>

          {/* Halo glow ring behind photo */}
          <div style={{
            position: "absolute", inset: -24,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(59,130,246,0.12) 40%, transparent 70%)",
            filter: "blur(24px)",
            animation: "float 6s ease-in-out infinite",
          }} />

          {/* Subtle ring border */}
          <div style={{
            position: "absolute", inset: -2, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02), rgba(139,92,246,0.15))",
            padding: 2,
          }} />

          {/* Photo container */}
          <div style={{
            position: "relative", width: 320, height: 320, borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
            animation: "float 6s ease-in-out infinite",
          }}>
            <Image
              src="/mahesh2.png"
              alt="Mahesh Babu"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            {/* Glass reflection overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
            }} />
          </div>

          {/* Floating badge — bottom left of photo */}
          <div style={{
            position: "absolute", bottom: 16, left: -24,
            padding: "8px 14px", borderRadius: 10,
            background: "rgba(14,14,14,0.85)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            animation: "float 6s ease-in-out infinite",
            animationDelay: "1s",
          }}>
            <div style={{ fontSize: 10, color: "#555", marginBottom: 3, letterSpacing: "0.06em", textTransform: "uppercase" }}>Current</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#ededed" }}>Data Engineer</div>
            <div style={{ fontSize: 11, color: "#555", marginTop: 1 }}>London, UK</div>
          </div>

          {/* Floating badge — top right of photo */}
          <div style={{
            position: "absolute", top: 20, right: -32,
            padding: "8px 14px", borderRadius: 10,
            background: "rgba(14,14,14,0.85)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(34,197,94,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            animation: "float 6s ease-in-out infinite",
            animationDelay: "2.5s",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span className="anim-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: "#4ade80" }}>Open to work</span>
            </div>
          </div>

          {/* Floating badge — MSc badge */}
          <div style={{
            position: "absolute", bottom: 80, right: -40,
            padding: "8px 14px", borderRadius: 10,
            background: "rgba(14,14,14,0.85)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            animation: "float 6s ease-in-out infinite",
            animationDelay: "4s",
          }}>
            <div style={{ fontSize: 10, color: "#555", marginBottom: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>Education</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#818cf8" }}>MSc Data Science</div>
            <div style={{ fontSize: 11, color: "#555" }}>First Class · 2024</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="anim-float" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
        <div style={{ width: 20, height: 32, borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 5 }}>
          <div style={{ width: 2, height: 8, borderRadius: 2, background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>
    </section>
  );
}
