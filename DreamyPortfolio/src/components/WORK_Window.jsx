import React, { useCallback, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import messageMeLottie from "../assets/butterfly.json";
import usmThumbnail from "../assets/projectPngs/UMS/preview.png";
import PortfolioThumbnail from "../assets/projectPngs/Portfolio/dreamy_CustomBuiltPortfolio.png";
import "../styles/workWindow.css";

const EMAIL_CONFIG = {
  to: "manpreet.singh.1092090@gmail.com",
  subject: "Work Inquiry",
};

/* Project Data */
const PROJECTS = [
  {
    title: "Dreamy Portfolio",
    description:
      "An interactive, OS-inspired personal portfolio built with React, featuring window-based navigation, smooth animations, and a scalable, data-driven architecture.",
    tech: [
      "React",
      "JavaScript",
      "ES6+",
      "CSS Modules",
      "flexbox, clamp, transitions",
    ],
    thumbnail: PortfolioThumbnail,
    link: "https://github.com/Manpreet109209/User-Management-System",
  },
  {
    title: "User Management System",
    description:
      "A full CRUD application with authentication, built using Node.js, Express, MySQL, and EJS.",
    tech: [
      "Node.js",
      "Express",
      "MySQL",
      "EJS",
      "bcrypt",
      "faker.js",
      "method-override",
    ],
    thumbnail: usmThumbnail,
    link: "https://github.com/Manpreet109209/User-Management-System",
  },
];

/* Project Card (stateless, controlled) */
function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <div className="projectWrap">
      {/* Card */}
      <article
        className="project-card"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <div className="project-card__media">
          <img
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            loading="lazy"
          />
        </div>

        <h3 className="project-card__title">{project.title}</h3>
      </article>

      {/* Popup */}
      {isOpen && (
        <div className="project-popup" role="dialog">
          <p>{project.description}</p>

          <div className="project-card__tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      )}
    </div>
  );
}

/* Main Window */
const WorkWindow = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isBouncing, setIsBouncing] = useState(false);

  const messageMeClick = useCallback(() => {
    setIsBouncing(true);

    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      EMAIL_CONFIG.to
    )}&su=${encodeURIComponent(EMAIL_CONFIG.subject)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setIsBouncing(false), 600);
  }, []);

  return (
    <section className="work-window" aria-labelledby="work-title">
      {/* Top Bar */}
      <header className="work-window__topbar">
        <h2 id="work-title" className="work-window__title">
          Projects
        </h2>
      </header>

      {/* Content */}
      <div className="work-window__content">
        {/* Projects */}
        <div className="work-window__projects">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isOpen={activeProject === index}
              onToggle={() =>
                setActiveProject(
                  activeProject === index ? null : index
                )
              }
            />
          ))}
        </div>

        {/* Work Offer */}
        <p className="work-window__headline_WorkOffer">
          Accepting work offers via my work e-mail ;)
        </p>

        {/* Contact Animation */}
        <button
          type="button"
          className={`work-window__messageMe ${
            isBouncing ? "is-bouncing" : ""
          }`}
          onClick={messageMeClick}
          aria-label="Open work email"
        >
          <Player
            autoplay
            loop
            src={messageMeLottie}
            style={{ width: "100%", height: "100%" }}
          />
        </button>
      </div>
    </section>
  );
};

export default React.memo(WorkWindow);