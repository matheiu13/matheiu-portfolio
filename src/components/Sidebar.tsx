import React from "react";
import { GitFork, Link2, Mail } from "lucide-react";
import { resume } from "../data/resume";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

interface SidebarProps {
  active: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="initials">MAP //</div>
        <div className="name">Matheiu Amiel<br />Perdido</div>
        <div className="role">Backend Engineer</div>
      </div>

      <ul className="nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className={`nav-item${active === item.id ? " active" : ""}`}>
            <button onClick={() => scrollTo(item.id)}>
              <span className="nav-dot" />
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <a href={resume.contact.github} target="_blank" rel="noreferrer" title="GitHub">
          <GitFork size={15} />
        </a>
        <a href={resume.contact.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
          <Link2 size={15} />
        </a>
        <a href={`mailto:${resume.contact.email}`} title="Email">
          <Mail size={15} />
        </a>
      </div>
    </aside>
  );
};
