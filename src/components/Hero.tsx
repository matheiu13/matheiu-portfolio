import React from "react";
import { motion } from "framer-motion";
import { resume } from "../data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as const },
  }),
};

const COORDS = ["A1", "B1", "C1", "D1"];

export const Hero: React.FC = () => (
  <section id="hero" className="hero">
    <motion.div
      className="hero-coords"
      variants={fadeUp}
      custom={0}
      initial="hidden"
      animate="show"
    >
      14.5995° N, 121.0244° E — Cainta, Rizal, PH
    </motion.div>

    <motion.h1
      className="hero-name"
      variants={fadeUp}
      custom={1}
      initial="hidden"
      animate="show"
    >
      Matheiu <span>Perdido</span>
    </motion.h1>

    <motion.div
      className="hero-title"
      variants={fadeUp}
      custom={2}
      initial="hidden"
      animate="show"
    >
      Backend Software Engineer
    </motion.div>

    <motion.p
      className="hero-tagline"
      variants={fadeUp}
      custom={3}
      initial="hidden"
      animate="show"
    >
      {resume.tagline}
    </motion.p>

    <motion.div
      className="hero-stats"
      variants={fadeUp}
      custom={4}
      initial="hidden"
      animate="show"
    >
      {resume.stats.map((s, i) => (
        <div className="hero-stat" key={i} data-coord={COORDS[i]}>
          <div className="hero-stat-value">{s.value}</div>
          <div className="hero-stat-label">{s.label}</div>
        </div>
      ))}
    </motion.div>
  </section>
);
