import { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "01",
    title: "Image Caption Generator",
    desc: "End-to-end image captioning system using a CNN–LSTM encoder–decoder architecture. Generates natural language descriptions from input images, evaluated with BLEU score metrics.",
    tags: ["PyTorch", "Python", "NLP", "Computer Vision", "CNN", "LSTM"],
    categories: ["ml", "cv", "nlp"],
    date: "Aug – Nov 2025",
    status: "complete",
    link: "https://github.com/Bhavs5/NLPproject2025",
  },
  {
    id: "02",
    title: "Hybrid ML — Credit Risk Prediction",
    desc: "Hybrid classification model combining multiple ML algorithms for credit default prediction. Outperforms single-model baselines via feature engineering and cross-validation.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Feature Engineering"],
    categories: ["ml"],
    date: "Feb – Apr 2025",
    status: "complete",
    link: "https://github.com/Bhavs5",
  },
  {
    id: "03",
    title: "Snake & Apple Game",
    desc: "Snake game prototype in Java using OOP principles and a clean game loop. Includes collision detection, dynamic scoring, keyboard controls, and real-time UI feedback.",
    tags: ["Java", "OOP", "Game Dev"],
    categories: ["software"],
    date: "Sep – Oct 2025",
    status: "complete",
    link: "https://github.com/Bhavs5",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "ML / AI", value: "ml" },
  { label: "Computer Vision", value: "cv" },
  { label: "Software", value: "software" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const navigate = useNavigate();

  const visible = projects.filter(
    (p) => active === "all" || p.categories.includes(active)
  );

  return (
    <div className="page-projects">
      {/* Hero */}
      <div className="projects-page-hero">
        <div className="breadcrumb">
          <span onClick={() => navigate("/")}>Home</span>
          <span className="breadcrumb-sep">/</span>
          <span>Projects</span>
        </div>
        <div className="sec-label">02 — Work</div>
        <h2 className="sec-title">What I've Built</h2>
        <p className="projects-subtitle">
          A collection of projects spanning Machine Learning, Computer Vision, NLP,
          and Software Engineering — each one a step deeper into building
          intelligent systems.
        </p>
        <div className="projects-stats">
          <div className="stat-cell">
            <div className="stat-num">3</div>
            <div className="stat-lbl">Projects</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">6+</div>
            <div className="stat-lbl">Technologies</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">2</div>
            <div className="stat-lbl">Domains</div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="projects-section">
        <div className="projects-filter">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${active === f.value ? " active" : ""}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="proj-cards">
          {visible.map((p) => (
            <div className="proj-card" key={p.id}>
              <div className="card-top">
                <span className="card-num">{p.id}</span>
                <a href={p.link} target="_blank" rel="noreferrer" className="card-link-icon">
                  GitHub ↗
                </a>
              </div>
              <div className="card-title">{p.title}</div>
              <p className="card-desc">{p.desc}</p>
              <div className="card-tags">
                {p.tags.map((t) => <span className="ctag" key={t}>{t}</span>)}
              </div>
              <div className="card-meta">
                <span className="card-date">{p.date}</span>
                <span className="card-status">
                  <span className={`status-dot${p.status === "complete" ? " complete" : ""}`} />
                  Complete
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}