import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitFork, Link2 } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { resume } from "../data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as const } },
};

export const About: React.FC = () => (
  <motion.section
    id="about"
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionLabel label="About" index="01 /" />

    <div className="about-grid">
      <div className="about-card full">
        <div className="about-card-label">Summary</div>
        <p>{resume.summary}</p>
        <p style={{ marginTop: "0.75rem" }}>
          Currently at Petnet Inc., I'm rebuilding their core Forex Information System from the
          ground up — migrating a monolithic PHP/Laravel stack into a distributed NestJS
          microservices architecture with gRPC inter-service communication. I thrive in high-stakes
          environments where correctness isn't optional.
        </p>
      </div>

      <div className="about-card">
        <div className="about-card-label">Contact</div>
        <ul className="contact-list">
          <li>
            <Mail size={13} className="contact-icon" />
            <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          </li>
          <li>
            <Phone size={13} className="contact-icon" />
            {resume.contact.phone}
          </li>
          <li>
            <MapPin size={13} className="contact-icon" />
            {resume.contact.location}
          </li>
          <li>
            <GitFork size={13} className="contact-icon" />
            <a href={resume.contact.github} target="_blank" rel="noreferrer">
              github.com/matheiu13
            </a>
          </li>
          <li>
            <Link2 size={13} className="contact-icon" />
            <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/matheiu-perdido
            </a>
          </li>
        </ul>
      </div>

      <div className="about-card">
        <div className="about-card-label">What I bring</div>
        <p>
          Production experience in fintech means I've seen what happens when an API fails mid-transaction.
          I design for failure, build audit trails by default, and treat performance not as an
          afterthought but as a feature.
        </p>
      </div>
    </div>
  </motion.section>
);
