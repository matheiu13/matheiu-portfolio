import React from "react";
import "./index.css";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

const SECTIONS = ["hero", "about", "skills", "experience", "education", "contact"];

function App() {
  const active = useScrollSpy(SECTIONS, 120);

  return (
    <div className="layout">
      <Sidebar active={active} />

      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Mobile bottom nav */}
      <nav className="mobile-nav">
        {["about", "skills", "experience", "education", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {id}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default App;
