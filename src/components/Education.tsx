import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { resume } from "../data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as const } },
};

export const Education: React.FC = () => (
  <motion.section
    id="education"
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionLabel label="Education" index="04 /" />

    {resume.education.map((edu, i) => (
      <div className="edu-card" key={i}>
        <div>
          <div className="edu-degree">{edu.degree}</div>
          <span className="edu-honor">{edu.honor}</span>
          <div className="edu-school">{edu.school}</div>
          <div className="edu-capstone-label">Capstone project</div>
          <div className="edu-capstone">{edu.capstone}</div>
        </div>
        <div className="edu-year">{edu.year}</div>
      </div>
    ))}
  </motion.section>
);
