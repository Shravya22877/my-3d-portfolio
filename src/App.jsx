
import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Recipe Suggester",
    category: "AGENTIC AI",
    year: "2025",
    description:
      "An AI agent that suggests recipes based on ingredients you already have.",
    overview:
      "Recipe Suggester helps users discover recipes using ingredients available at home.",
    problem:
      "People often have ingredients but struggle to decide what meals they can prepare.",
    solution:
      "An AI agent takes the available ingredients and generates relevant recipe suggestions.",
    features: [
      "Ingredient-based recipe suggestions",
      "AI-powered recipe recommendations",
    ],
    stack: ["Python", "Agentic AI"],
    achievement:
      "1st Prize in the Agentic AI domain at CEATHERION 2025.",
    repository: "https://github.com/Shravya22877/Recipe_Suggester",
  },
  {
    number: "02",
    name: "ResQpet",
    category: "SOCIAL IMPACT",
    year: "2025",
    description:
      "A platform connecting people reporting animals in distress with volunteers.",
    overview:
      "ResQpet — Saving Lives, One Report at a Time — is a web-based animal rescue platform.",
    problem:
      "Reporting injured or stranded animals and communicating their locations can be difficult.",
    solution:
      "Users can upload animal photographs and specify locations. Volunteers can access reports and respond to rescue situations.",
    features: [
      "Upload photographs of injured or stranded animals",
      "GPS-based location detection",
      "Manual location selection on an interactive map",
      "Volunteer dashboard",
      "Volunteer registration",
      "Contribution points and Bronze, Silver and Gold badges",
      "Automatically generated certificates for each report",
    ],
    stack: ["Node.js", "Express", "JavaScript", "Leaflet.js"],
    status:
      "Under development. NGO integration and real-time notifications are planned for future updates.",
    repository: "https://github.com/Shravya22877/ResQpet2.0",
  },
  {
    number: "03",
    name: "ROUTELESS",
    category: "STUDENT MOBILITY",
    year: "2026",
    description:
      "An alternative transportation discovery platform for students who miss their regular transport.",
    overview:
      "ROUTELESS explores how students can find alternative transportation when they miss their usual college transport.",
    problem:
      "Students who miss their regular transportation may struggle to find alternative travel options.",
    solution:
      "A platform designed to connect students with alternative transportation options such as autos and cabs.",
    features: [
      "Alternative transportation discovery",
      "Student-focused transport options",
      "Auto and cab discovery",
      "Payment approach designed for both parties",
    ],
    stack: ["Full-stack Web Development"],
    repository: "https://github.com/Shravya22877/ROUTELESS",
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project"
        >
          ×
        </button>

        <span className="eyebrow">
          CASE STUDY / {project.number}
        </span>

        <h2 id="modal-title">{project.name}</h2>

        <p className="modal-category">
          {project.category} / {project.year}
        </p>

        <div className="modal-divider" />

        <section>
          <h3>01 — Overview</h3>
          <p>{project.overview}</p>
        </section>

        <section>
          <h3>02 — The problem</h3>
          <p>{project.problem}</p>
        </section>

        <section>
          <h3>03 — The solution</h3>
          <p>{project.solution}</p>
        </section>

        <section>
          <h3>04 — Key features</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>05 — Technology</h3>
          <div className="tag-list">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        {project.achievement && (
          <section className="modal-highlight">
            <h3>Recognition</h3>
            <p>{project.achievement}</p>
          </section>
        )}

        {project.status && (
          <section className="modal-highlight">
            <h3>Development status</h3>
            <p>{project.status}</p>
          </section>
        )}

        <a
          className="repository-link"
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW GITHUB REPOSITORY ↗
        </a>

        <button className="modal-bottom-close" onClick={onClose}>
          CLOSE ×
        </button>
      </article>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="site-shell">
      <nav className="navbar">
        <a href="#home" className="brand">
          S.
        </a>

        <span className="nav-center">
          SECOND YEAR ISE STUDENT / 2026
        </span>

        <div className="nav-actions">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            RESUME ↗
          </a>
          <a href="#contact">LET'S TALK ↗</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-heading">
            <span className="hero-overline">PORTFOLIO / 2026</span>
            <h1>SHRAVYA</h1>
          </div>

          <div className="hero-meta">
            <div>
              <span>INFORMATION SCIENCE & ENGINEERING</span>
              <small>CANARA ENGINEERING COLLEGE / INDIA</small>
            </div>

            <div className="hero-tagline">
              CURIOUS BY NATURE.
              <br />
              BUILDER BY CHOICE.
            </div>
          </div>

          <div className="hero-intro">
            <div className="hero-statement">
              <span>INDEPENDENT DEVELOPER</span>
              <h2>
                THINK.
                <br />
                EXPLORE.
                <br />
                BUILD.
              </h2>
            </div>

            <div className="hero-description">
              <p>
                I'm Shravya, a second-year Information Science
                and Engineering student at Canara Engineering
                College. I enjoy building full-stack applications,
                exploring AI and turning ideas into practical
                technology.
              </p>

              <div className="hero-buttons">
                <a href="#projects">EXPLORE MY WORK ↗</a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  VIEW RESUME ↗
                </a>
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <span>DESIGNING</span>
            <span>DEVELOPING</span>
            <span>LEARNING</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="section-label">
            <span>01 / ABOUT ME</span>
            <span>THE PERSON BEHIND THE CODE</span>
          </div>

          <div className="about-content">
            <h2>
              NOT JUST
              <br />
              WRITING CODE.
              <br />
              <span>BUILDING IDEAS.</span>
            </h2>

            <div className="about-copy">
              <p>
                I'm Shravya, a second-year Information Science
                and Engineering student at Canara Engineering
                College.
              </p>

              <p>
                I'm interested in artificial intelligence,
                software development and creating practical
                technology. I enjoy experimenting with new
                ideas and learning by building.
              </p>

              <p>
                From developing full-stack applications to
                exploring Agentic AI, I enjoy turning concepts
                into working projects.
              </p>

              <div className="about-signature">
                A MIND THAT NEVER STOPS EXPLORING.
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects" id="projects">
          <div className="section-label">
            <span>02 / SELECTED WORK</span>
            <span>IDEAS INTO REALITY</span>
          </div>

          <h2 className="projects-heading">
            SELECTED
            <br />
            <span>PROJECTS.</span>
          </h2>

          <div className="project-list">
            {projects.map((project) => (
              <button
                key={project.number}
                className="project-card"
                type="button"
                onClick={() => setActiveProject(project)}
              >
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-info">
                  <span>
                    {project.category} / {project.year}
                  </span>

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <span className="project-open">
                  VIEW CASE STUDY ↗
                </span>
              </button>
            ))}
          </div>

          <p className="project-hint">
            SELECT A PROJECT TO EXPLORE ITS CASE STUDY.
          </p>

          <a
            className="all-projects-github"
            href="https://github.com/Shravya22877"
            target="_blank"
            rel="noreferrer"
          >
            MORE PROJECTS ON GITHUB ↗
          </a>
        </section>

        {/* BACKGROUND */}
        <section className="section background" id="background">
          <div className="section-label">
            <span>03 / BACKGROUND</span>
            <span>EDUCATION & RECOGNITION</span>
          </div>

          <div className="background-grid">
            <div>
              <span className="eyebrow">EDUCATION</span>
              <h3>Canara Engineering College</h3>
              <p>
                Second Year — B.E. Information Science & Engineering
              </p>
            </div>

            <div>
              <span className="eyebrow">RECOGNITION</span>
              <h3>CEATHERION 2025</h3>
              <p>1st Prize — Agentic AI Domain</p>
              <p>Recipe Suggester</p>
            </div>
          </div>

          <div className="exploration-section">
            <div className="exploration-heading">
              <span className="eyebrow">CURRENT FOCUS / 2026</span>
              <h3>What I'm Exploring.</h3>
            </div>

            <div className="exploration-grid">
              <article>
                <span>01</span>
                <h4>Agentic AI & AI Engineering</h4>
                <p>
                  Exploring AI agents and building AI-powered applications.
                </p>
              </article>

              <article>
                <span>02</span>
                <h4>Full-Stack Development</h4>
                <p>
                  Building web applications across frontend, backend and databases.
                </p>
              </article>

              <article>
                <span>03</span>
                <h4>Spec-Driven Development</h4>
                <p>
                  Turning requirements into structured specifications before implementation.
                </p>
              </article>

              <article>
                <span>04</span>
                <h4>AI-Assisted Software Development</h4>
                <p>
                  Experimenting with AI coding tools for planning, building and debugging.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <footer className="section footer" id="contact">
          <div className="section-label">
            <span>04 / CONTACT</span>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>

          <h2>
            HAVE AN
            <br />
            <span>INTERESTING IDEA?</span>
          </h2>

          <a
            className="footer-email"
            href="https://www.linkedin.com/in/shravya-poojary-a6334b384"
            target="_blank"
            rel="noreferrer"
          >
            LET'S CONNECT ↗
          </a>

          <div className="footer-socials">
            <a
              href="https://github.com/Shravya22877"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shravya-poojary-a6334b384"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              RESUME ↗
            </a>
          </div>

          <div className="footer-bottom">
            <span>SHRAVYA © 2026</span>
            <span>THINK. EXPLORE. BUILD.</span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </footer>
      </main>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
