import React from "react";
import styles from "./KPISection.module.css";

const KPISection = () => {
  const kpis = [
    {
      value: "+ 10K",
      description: "Learning Hours",
      bgColor: "linear-gradient(135deg, #8d0dee, #d7c9f9)",
      hoverText:
        "Over 10,000 hours of educational content consumed by our users, covering various subjects and skill levels.",
    },
    {
      value: "+ 370K",
      description: "Active Users on Taleb App",
      bgColor: "linear-gradient(135deg, #39047a, #ba6af1)",
      hoverText:
        "Our platform has grown to serve more than 370,000 active users monthly across different regions.",
    },
    {
      value: "+ 210",
      description: "International & National Institutions",
      bgColor: "linear-gradient(135deg, #25045c, #9484ae)",
      hoverText:
        "Collaborating with 210+ prestigious institutions worldwide to provide quality education and resources.",
    },
    {
      value: "+ 500",
      description: "Internships & Job Placements",
      bgColor: "linear-gradient(135deg, #ba6af1, #8d0dee)",
      hoverText:
        "Successfully placed 500+ students in internships and jobs with our partner companies and organizations.",
    },
  ];

  return (
    <div className={styles.kpiSection}>
      {kpis.map((kpi, index) => (
        <div
          className={styles.kpiQuarter}
          key={index}
          style={{ background: kpi.bgColor }}
        >
          <div className={styles.kpiContent}>
            <h2 className={styles.kpiValue}>{kpi.value}</h2>
            <p className={styles.kpiDescription}>{kpi.description}</p>
          </div>
          <div className={styles.kpiHoverText}>
            <p>{kpi.hoverText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPISection;
