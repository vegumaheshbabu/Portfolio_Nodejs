"use client";

const skills = [
  { name: "SQL", pct: 95 }, { name: "Python", pct: 85 },
  { name: "Data Visualisation", pct: 90 }, { name: "Cloud Architecture", pct: 88 },
  { name: "ETL & Pipelines", pct: 92 }, { name: "Machine Learning", pct: 80 },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: 12 }}>About</p>
        <h2 className="grad-text" style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 64 }}>The person behind the data.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.85, marginBottom: 20 }}>
              I&apos;m Mahesh — a Data Engineer based in Hemel Hempstead, UK. I specialise in building the infrastructure that makes data useful: pipelines, warehouses, and real-time analytics that turn raw data into decisions.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 40 }}>
              I hold a First Class MSc in Data Science from Hertfordshire University and have shipped solutions at Accenture, Bank of America, and cloud startups. Outside work: guitar, travel, and teaching.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 32px" }}>
              {[
                ["Location","Hemel Hempstead, UK"], ["Education","MSc Data Science"],
                ["Domains","Finance · Retail · Sales"], ["Languages","English · Telugu · Hindi"],
                ["BI Tools","Power BI · Tableau"], ["Interests","Guitar · Travel · Teaching"],
              ].map(([k,v]) => (
                <div key={k}>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "#333", marginBottom: 5 }}>{k}</div>
                  <div style={{ fontSize: 13, color: "#777" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: 28 }}>Core Skills</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
              {skills.map(s => (
                <div key={s.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontFamily: "monospace", color: "#777" }}>{s.name}</span>
                    <span style={{ fontSize: 12, fontFamily: "monospace", color: "#444" }}>{s.pct}%</span>
                  </div>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.06)", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${s.pct}%`, background: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }} />
                    <div style={{ position: "absolute", top: "50%", left: `${s.pct}%`, transform: "translate(-50%,-50%)", width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6", boxShadow: "0 0 8px #8b5cf6" }} />
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: 16 }}>Education</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { degree: "MSc Data Science", school: "University of Hertfordshire", year: "2023–2024", color: "#3b82f6" },
                { degree: "BSc Computer Science", school: "GITAM University, Visakhapatnam", year: "2017–2021", color: "#8b5cf6" },
              ].map(e => (
                <div key={e.degree} style={{ display: "flex", gap: 14, padding: "14px 16px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 2, borderRadius: 2, background: e.color, flexShrink: 0, alignSelf: "stretch" }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#ededed", marginBottom: 3 }}>{e.degree}</div>
                    <div style={{ fontSize: 12, color: "#555", marginBottom: 6 }}>{e.school}</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ fontSize: 11, fontFamily: "monospace", color: "#333" }}>{e.year}</span>
                      <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 4, fontFamily: "monospace", fontWeight: 500, background: `${e.color}18`, color: e.color, border: `1px solid ${e.color}30` }}>First Class Distinction</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
