import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { resume } from "../data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as const } },
};

export const Skills: React.FC = () => (
  <motion.section
    id="skills"
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
  >
    <SectionLabel label="Skills" index="02 /" />

    <div className="skills-grid">
      {Object.entries(resume.skills).map(([group, tags]) => (
        <div className="skills-group" key={group}>
          <div className="skills-group-label">{group}</div>
          <div className="skills-tags">
            {tags.map((tag) => (
              <span className="skill-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);
