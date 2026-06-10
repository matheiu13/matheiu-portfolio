import React from "react";
import { motion } from "framer-motion";
import { Mail, GitFork, ExternalLink } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { resume } from "../data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as const } },
};

export const Contact: React.FC = () => (
  <motion.section
    id="contact"
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <SectionLabel label="Contact" index="05 /" />

    <div className="cta-block">
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--accent)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: "1rem",
          opacity: 0.7,
        }}
      >
        {/* open to opportunities */}
      </div>
      <div className="cta-heading">Let's build something reliable together</div>
      <div className="cta-sub">
        Whether it's a greenfield system or a legacy codebase that needs untangling — I'm interested.
      </div>
      <div className="cta-actions">
        <a href={`mailto:${resume.contact.email}`} className="btn btn-primary">
          <Mail size={13} />
          {resume.contact.email}
        </a>
        <a href={resume.contact.github} target="_blank" rel="noreferrer" className="btn">
          <GitFork size={13} />
          GitHub
          <ExternalLink size={11} style={{ opacity: 0.5 }} />
        </a>
        <a href={resume.contact.linkedin} target="_blank" rel="noreferrer" className="btn">
          <ExternalLink size={13} />
          LinkedIn
          <ExternalLink size={11} style={{ opacity: 0.5 }} />
        </a>
      </div>
    </div>
  </motion.section>
);