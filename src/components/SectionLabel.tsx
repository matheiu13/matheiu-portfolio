import React from "react";

interface SectionLabelProps {
  label: string;
  index?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ label, index }) => (
  <div className="section-label">
    <span className="section-label-bracket">[</span>
    {index && (
      <span className="section-label-text" style={{ color: "var(--text3)", letterSpacing: "0.1em" }}>
        {index}
      </span>
    )}
    <span className="section-label-text">{label}</span>
    <span className="section-label-bracket">]</span>
    <div className="section-label-line" />
  </div>
);
