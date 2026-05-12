"use client";
import { useState } from "react";

const projects = [
  { title: "Realtime Intelligence Platform", desc: "Cloud-native streaming ecosystem processing millions of events daily using Kafka, Databricks, and Azure. Powers live dashboards with sub-second latency.", metric: "12M+ events/day", mLabel: "throughput", stack: ["Kafka","Azure","Databricks","PySpark","Power BI"], href: "https://github.com/vegumaheshbabu", accent: "#3b82f6" },
  { title: "Enterprise ETL Automation", desc: "Scalable ETL pipelines with intelligent orchestration and monitoring for enterprise analytics. Reduced manual data work by 60%.", metric: "1.8TB", mLabel: "optimized daily", stack: ["ADF","SQL","Python","Power BI","Azure"], href: "https://github.com/vegumaheshbabu/Database-generation", accent: "#8b5cf6" },
  { title: "Cloud Analytics Architecture", desc: "Highly available BI infrastructure powering executive reporting and strategic decision systems across Finance and Retail domains.", metric: "99.9%", mLabel: "uptime SLA", stack: ["Azure","Snowflake","Airflow","Docker","Redshift"], href: "https://github.com/vegumaheshbabu", accent: "#14b8a6" },
  { title: "Stock Price Prediction · LSTM", desc: "Forecasted future stock prices using LSTM and RNN deep learning architectures. Serves as a reliable market indicator with 80% accuracy.", metric: "80%", mLabel: "prediction accuracy", stack: ["Python","LSTM","RNN","Keras","TensorFlow"], href: "https://github.com/vegumaheshbabu/Stock-price-prediction-with-LSTM-and-RNN", accent: "#f59e0b" },
  { title: "Mask Detection · Deep Learning", desc: "CNN model with MobileNetV2 transfer learning, deployed on live college camera infrastructure during COVID. Real-world production ML.", metric: "Live", mLabel: "production deploy", stack: ["Python","TensorFlow","MobileNetV2","CNN","OpenCV"], href: "https://github.com/vegumaheshbabu/Maskdetection_CNN", accent: "#ec4899" },
  { title: "Image Classification · VGG16", desc: "CIFAR-10 classification using VGG16 with custom fine-tuning strategies. Achieved 89% accuracy through systematic transfer learning optimisation.", metric: "89%", mLabel: "accuracy", stack: ["Python","VGG16","CIFAR-10","Keras","NumPy"], href: "https://github.com/vegumaheshbabu/Image-classification-with-transfer-learning", accent: "#22c55e" },
];

export default function Work() {
  const [hov, setHov] = useState<number|null>(null);

  return (
    <section id="work" style={{ padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: 12 }}>Selected Projects</p>
        <h2 className="grad-text" style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 48 }}>Work that ships.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(255,255,255,0.05)", borderRadius: 16, overflow: "hidden" }}>
          {projects.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", flexDirection: "column", padding: "28px 24px",
                background: hov === i ? "rgba(255,255,255,0.03)" : "#080808",
                position: "relative", overflow: "hidden", minHeight: 280,
                transition: "background 0.25s", textDecoration: "none",
              }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
            >
              {/* top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, ${p.accent}, transparent)`, opacity: hov === i ? 1 : 0, transition: "opacity 0.3s" }} />

              {/* metric */}
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 5, fontFamily: "monospace", fontWeight: 600, background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}30` }}>
                  {p.metric} <span style={{ color: `${p.accent}88`, fontWeight: 400 }}>{p.mLabel}</span>
                </span>
              </div>

              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#ededed", marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{p.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.stack.map(t => (
                  <span key={t} style={{ fontSize: 11, padding: "2px 7px", borderRadius: 4, fontFamily: "monospace", background: "rgba(255,255,255,0.04)", color: "#555", border: "1px solid rgba(255,255,255,0.06)" }}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="https://github.com/vegumaheshbabu" target="_blank"
            style={{ fontSize: 13, color: "#444", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ededed")}
            onMouseLeave={e => (e.currentTarget.style.color = "#444")}
          >View all projects on GitHub →</a>
        </div>
      </div>
    </section>
  );
}
