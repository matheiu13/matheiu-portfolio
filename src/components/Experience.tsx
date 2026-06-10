import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { resume } from "../data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as const } },
};

export const Experience: React.FC = () => {
  const [openProject, setOpenProject] = useState<number>(0);

  const job = resume.experience[0];

  return (
    <motion.section
      id="experience"
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <SectionLabel label="Experience" index="03 /" />

      <div className="exp-header">
        <div>
          <div className="exp-company">{job.company}</div>
          <div className="exp-company-meta">
            <span className="exp-company-type">{job.type}</span>
            <span className="exp-period">{job.location}</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="exp-period" style={{ marginBottom: 4 }}>{job.role}</div>
          <div className="exp-period">{job.period}</div>
        </div>
      </div>

      <div>
        {job.projects.map((proj, i) => (
          <div className="project-block" key={i}>
            <div className="project-meta">
              <div className="project-name">{proj.name}</div>
              <div className="project-period">{proj.period}</div>
              <div className="project-stack">
                {proj.stack.map((s) => (
                  <span className="stack-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div>
              <ul className="project-highlights">
                {(openProject === i ? proj.highlights : proj.highlights.slice(0, 2)).map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>

              {proj.highlights.length > 2 && (
                <button
                  onClick={() => setOpenProject(openProject === i ? -1 : i)}
                  style={{
                    marginTop: 10,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: 0,
                    textTransform: "uppercase",
                  }}
                >
                  <ChevronDown
                    size={12}
                    style={{
                      transform: openProject === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                  {openProject === i ? "Show less" : `+${proj.highlights.length - 2} more`}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
