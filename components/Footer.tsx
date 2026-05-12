export default function Footer() {
  return (
    <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 12, fontFamily: "monospace", color: "#2a2a2a" }}>© 2025 Mahesh Babu</span>
        <span style={{ fontSize: 12, fontFamily: "monospace", color: "#2a2a2a" }}>Data Engineer · Cloud Architect · vegumaheshbabu.com</span>
        <div style={{ display: "flex", gap: 20 }}>
          {[["LinkedIn","https://linkedin.com/in/vegumaheshbabu"],["GitHub","https://github.com/vegumaheshbabu"],["Instagram","https://instagram.com/_m4h3sh"]].map(([l,h]) => (
            <a key={l} href={h} target="_blank" style={{ fontSize: 12, fontFamily: "monospace", color: "#2a2a2a", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#666")}
              onMouseLeave={e => (e.currentTarget.style.color = "#2a2a2a")}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
