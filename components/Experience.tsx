"use client";
import { useState } from "react";

const jobs = [
  { company: "Citibank", role: "Senior Database Administrator", period: "Mar 2025 – Present", location: "Belfast, UK", type: "Full-time · Current", color: "#14b8a6",
    points: [
      { t: "Designed and built end-to-end ETL/ELT pipelines processing large-scale financial and trading datasets", impact: null },
      { t: "Orchestrated workflows using Apache Airflow — DAGs for scheduling, dependency management, and monitoring", impact: null },
      { t: "Built data ingestion pipelines into S3 and ADLS Gen2, integrating Confluent Kafka topics into Databricks Delta Lake", impact: null },
      { t: "Implemented Medallion Architecture (Bronze → Silver → Gold) in Databricks with incremental MERGE loads and full audit trail", impact: "Legacy migration" },
      { t: "Used AWS Glue, PySpark and Databricks for distributed data processing, transformation and large-scale pipeline migration", impact: null },
      { t: "Applied IAM roles and policies to securely manage access to sensitive financial datasets across S3 and Databricks", impact: null },
      { t: "Monitored pipelines using CloudWatch and Airflow alerts, ensuring reliability and quick issue resolution", impact: null },
      { t: "Collaborated with compliance and risk teams on market surveillance and regulatory reporting — Gold layer datasets to Power BI", impact: null },
    ]},
  { company: "GMK Software Solutions", role: "Data Engineer", period: "Jun 2023 – Sep 2024", location: "UK", type: "Full-time", color: "#3b82f6",
    points: [
      { t: "Designed ETL architecture in Azure Cloud using Java, Python, SQL from scratch", impact: "99.9% accuracy" },
      { t: "Built data cleansing framework reducing manual processing effort significantly", impact: "60% effort reduction" },
      { t: "Azure Databricks notebooks & BI models for real-time terminal performance visibility", impact: null },
      { t: "Ingested data from REST API, Kafka, SQL Server, Blob, ADLS Gen2, and Delta Lake via ADF", impact: null },
      { t: "Collaborated with 5 departments to gather requirements and drive platform initiatives end-to-end", impact: null },
    ]},
  { company: "Bank of America", role: "Data Engineer", period: "Jan 2022 – Dec 2022", location: "Global", type: "Full-time", color: "#8b5cf6",
    points: [
      { t: "Engineered data pipelines with Databricks and ADF across structured and unstructured sources", impact: "10+ sources" },
      { t: "Orchestrated seamless data ingestion into Azure Data Lake Storage Gen2", impact: "+30% accessibility" },
      { t: "Extracted data from Azure SQL, Snowflake, Amazon Redshift, on-premise SQL Servers, and web apps", impact: null },
      { t: "Supported end users in troubleshooting data and BI performance issues", impact: "100+ users" },
      { t: "Power BI reports improved decision-making efficiency and grew quarterly revenue", impact: "+15% sales" },
    ]},
  { company: "Accenture", role: "Data Engineer", period: "Jun 2021 – Jan 2023", location: "Global", type: "Full-time", color: "#f59e0b",
    points: [
      { t: "Translated data requirements from cross-functional stakeholders into business dashboards", impact: "10+ dashboards" },
      { t: "ETL pipeline via Azure Databricks and Data Factory — extract, clean, denormalize, deliver", impact: null },
      { t: "Led on-premise to cloud migration using Databricks and Azure Synapse Analytics", impact: "+25% performance" },
      { t: "Established data governance frameworks for security, compliance, and data privacy", impact: null },
      { t: "Provided technical support resolving internal data-related difficulties", impact: "300+ issues" },
    ]},
  { company: "Claro Software Solutions", role: "Data Analyst Intern", period: "Jul 2020 – May 2021", location: "India", type: "Full-time", color: "#ec4899",
    points: [
      { t: "Interpreted diverse client finance and sales datasets to surface actionable trends", impact: null },
      { t: "Delivered bi-monthly strategic reports to upper management for data-driven decisions", impact: null },
      { t: "Built Power BI storytelling dashboards delivering operational efficiency insights", impact: "15+ dashboards" },
      { t: "Published reports to Power BI Service with RLS, user groups, and scheduled gateway refreshes", impact: null },
    ]},
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const j = jobs[active];

  return (
    <section id="experience" style={{ padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: 12 }}>Experience</p>
        <h2 className="grad-text" style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 48 }}>Where I&apos;ve worked.</h2>

        <div style={{ display: "flex", gap: 24 }}>
          {/* Tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, width: 220, flexShrink: 0 }}>
            {jobs.map((job, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                textAlign: "left", padding: "12px 16px",
                background: active === i ? "rgba(255,255,255,0.04)" : "transparent",
                border: "none", borderLeft: `2px solid ${active === i ? job.color : "rgba(255,255,255,0.06)"}`,
                borderRadius: "0 8px 8px 0", cursor: "pointer", transition: "all 0.2s",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: active === i ? "#ededed" : "#555", transition: "color 0.2s" }}>{job.company}</div>
                  {i === 0 && (
                    <span style={{ fontSize: 9, padding: "1px 5px", borderRadius: 3, fontWeight: 600, background: "rgba(20,184,166,0.15)", color: "#14b8a6", border: "1px solid rgba(20,184,166,0.25)", letterSpacing: "0.04em" }}>NOW</span>
                  )}
                </div>
                <div style={{ fontSize: 11, fontFamily: "monospace", color: active === i ? job.color : "#333", marginTop: 2, transition: "color 0.2s" }}>{job.period}</div>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div key={active} className="anim-fadein" style={{
            flex: 1, padding: "32px 36px", borderRadius: 12,
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
            borderTop: `1px solid ${j.color}50`,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: "#ededed", letterSpacing: "-0.02em" }}>{j.role}</h3>
                  {active === 0 && (
                    <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, fontWeight: 600, background: "rgba(20,184,166,0.12)", color: "#14b8a6", border: "1px solid rgba(20,184,166,0.25)", letterSpacing: "0.06em" }}>CURRENT</span>
                  )}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 13, fontFamily: "monospace", color: j.color }}>{j.company}</span>
                  <span style={{ color: "#333" }}>·</span>
                  <span style={{ fontSize: 13, color: "#555" }}>{j.location}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[j.type, j.period].map(tag => (
                  <span key={tag} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, fontFamily: "monospace", background: "rgba(255,255,255,0.04)", color: "#555", border: "1px solid rgba(255,255,255,0.06)" }}>{tag}</span>
                ))}
              </div>
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              {j.points.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: j.color, marginTop: 8, flexShrink: 0 }} />
                  <div style={{ fontSize: 14, color: "#777", lineHeight: 1.65 }}>
                    {pt.t}
                    {pt.impact && (
                      <span style={{ display: "inline-flex", marginLeft: 8, fontSize: 11, padding: "2px 7px", borderRadius: 4, fontFamily: "monospace", fontWeight: 600, background: `${j.color}18`, color: j.color, border: `1px solid ${j.color}30` }}>{pt.impact}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
