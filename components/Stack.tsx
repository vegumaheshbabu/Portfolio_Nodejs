"use client";

const categories = [
  { label: "Cloud & Infrastructure", color: "#3b82f6", tools: ["Azure","AWS","GCP","Azure Databricks","Azure Synapse","ADLS Gen2","Docker","Kubernetes"] },
  { label: "Data Engineering", color: "#8b5cf6", tools: ["Apache Kafka","PySpark","Apache Airflow","ADF","Delta Lake","Snowflake","Redshift","dbt"] },
  { label: "Languages & Databases", color: "#14b8a6", tools: ["Python","SQL","Java","PostgreSQL","SQL Server","MySQL","MongoDB"] },
  { label: "BI & Visualisation", color: "#f59e0b", tools: ["Power BI","Tableau","DAX","Power Query","Excel","Looker"] },
  { label: "ML & Analytics", color: "#ec4899", tools: ["TensorFlow","Keras","Scikit-learn","Pandas","NumPy","LSTM","CNN","MobileNetV2"] },
  { label: "Tools & Practices", color: "#22c55e", tools: ["Git","GitHub","JIRA","ServiceNow","REST APIs","Agile","Data Governance"] },
];

const marquee = ["Azure","Kafka","Databricks","PySpark","Power BI","Docker","Airflow","Snowflake","Python","SQL","Git","ADF","Spark","Delta Lake","Tableau","AWS","GCP","JIRA","dbt","TensorFlow"];

export default function Stack() {
  return (
    <section id="stack" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      {/* Marquee strip */}
      <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "14px 0" }}>
        <div className="anim-marquee" style={{ display: "flex", gap: 20, width: "max-content" }}>
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} style={{ fontSize: 12, fontFamily: "monospace", color: "#333", whiteSpace: "nowrap", padding: "4px 12px", borderRadius: 999, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: 12 }}>Tech Stack</p>
          <h2 className="grad-text" style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 48 }}>The full toolkit.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
            {categories.map((cat, i) => (
              <div key={i} style={{
                padding: "20px 20px 20px", borderRadius: 12,
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 0.2s, background 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.color }} />
                  <span style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: cat.color }}>{cat.label}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cat.tools.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 5, fontFamily: "monospace", background: "rgba(255,255,255,0.03)", color: "#555", border: "1px solid rgba(255,255,255,0.06)" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
