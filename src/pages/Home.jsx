import { useNavigate } from "react-router-dom";
import photo from "../assets/photo.jpeg";
const skills = {
  "ML & AI": ["PyTorch", "Scikit-learn", "CNN", "LSTM", "NLP", "Computer Vision"],
  Languages: ["Python", "Java", "JavaScript", "C", "R"],
  "Web & Tools": ["React", "Express.js", "REST APIs", "Git", "GitHub", "Jupyter"],
  Mathematics: ["Statistics", "Probability", "Linear Algebra"],
};

const details = [
  { key: "Location", val: "Hyderabad, India" },
  { key: "Phone", val: "+91 8919454251", href: "tel:+918919454251" },
  { key: "Email", val: "bhaveshreddygun@gmail.com", href: "mailto:bhaveshreddygun@gmail.com" },
  { key: "GitHub", val: "github.com/Bhavs5", href: "https://github.com/Bhavs5" },
  { key: "LinkedIn", val: "bhavesh-gunreddy", href: "https://linkedin.com/in/bhavesh-gunreddy-b3281b248" },
];

const education = [
  {
    period: "2023 — Present",
    degree: "Integrated B.Tech — Computer Science & Engineering",
    school: "Mahindra Ecole Centrale, Hyderabad",
    grade: "CGPA 6.50 / 10",
  },
  {
    period: "2020 — 2023",
    degree: "Intermediate (MPC)",
    school: "Page Junior College (TSBIE), Hyderabad",
    grade: "92.6%",
  },
  {
    period: "2019 — 2020",
    degree: "High School (SSC)",
    school: "Little Flower High School, Hyderabad",
    grade: "GPA 10.0 / 10",
  },
];

const contacts = [
  { label: "Email", val: "bhaveshreddygun@gmail.com", href: "mailto:bhaveshreddygun@gmail.com" },
  { label: "Phone", val: "+91 8919454251", href: "tel:+918919454251" },
  { label: "LinkedIn", val: "bhavesh-gunreddy", href: "https://linkedin.com/in/bhavesh-gunreddy-b3281b248" },
  { label: "GitHub", val: "github.com/Bhavs5", href: "https://github.com/Bhavs5" },
];

const projects = [
  {
    id: "01",
    title: "Image Caption Generator",
    desc: "End-to-end image captioning system using a CNN–LSTM encoder–decoder architecture. Generates natural language descriptions from input images, evaluated with BLEU score metrics.",
    tags: ["PyTorch", "Python", "NLP", "Computer Vision", "CNN", "LSTM"],
    date: "Aug – Nov 2025",
    link: "https://github.com/Bhavs5/NLPproject2025",
  },
  {
    id: "02",
    title: "Hybrid ML — Credit Risk Prediction",
    desc: "Hybrid classification model combining multiple ML algorithms for credit default prediction. Outperforms single-model baselines via feature engineering and cross-validation.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Feature Engineering"],
    date: "Feb – Apr 2025",
    link: "https://github.com/Bhavs5",
  },
  {
    id: "03",
    title: "Snake & Apple Game",
    desc: "Snake game prototype in Java using OOP principles and a clean game loop. Includes collision detection, dynamic scoring, keyboard controls, and real-time UI feedback.",
    tags: ["Java", "OOP", "Game Dev"],
    date: "Sep – Oct 2025",
    link: "https://github.com/Bhavs5/snake_game",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-home">

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">Computer Science &amp; AI — Hyderabad, India</div>
            <h1 className="hero-name">
              Bhavesh<br /><span className="last">Gunreddy</span>
            </h1>
            <p className="hero-desc">
              Building intelligent systems at the intersection of Machine Learning,
              Computer Vision, and NLP. Currently pursuing B.Tech in CSE at
              Mahindra Ecole Centrale.
            </p>
            <div className="hero-btns">
              <button onClick={() => navigate("/projects")} className="btn btn-primary">View Projects</button>
              <button onClick={() => scrollTo("contact")} className="btn btn-ghost">Get in Touch</button>
              <a href="https://github.com/Bhavs5" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
              <img src={photo} alt="Bhavesh Gunreddy" className="hero-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="sec-label">01 — About</div>
        <h2 className="sec-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a Computer Science student focused on <strong>Machine Learning, AI, and Computer Vision</strong>. I enjoy building end-to-end systems that transform raw data into meaningful outputs — from generating image captions to predicting credit risk.</p>
            <p>My foundation in Statistics, Probability, and Linear Algebra lets me reason about models from first principles. I'm equally drawn to clean software craftsmanship, reflected in my web and game development work.</p>
            <p>I competed at the <strong>AI Student of the Year Hackathon</strong> hosted by MU AI Hub in partnership with Google Gemini, finishing as Runner-up.</p>
            <div className="detail-list">
              {details.map((d) => (
                <div className="detail-row" key={d.key}>
                  <span className="detail-key">{d.key}</span>
                  <span className="detail-val">
                    {d.href ? <a href={d.href} target="_blank" rel="noreferrer">{d.val}</a> : d.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {Object.entries(skills).map(([cat, items]) => (
              <div className="skills-category" key={cat}>
                <div className="skills-cat-label">{cat}</div>
                <div className="chips">
                  {items.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section id="projects" className="projects-preview-section">
        <div className="sec-label">02 — Work</div>
        <h2 className="sec-title">What I've Built</h2>
        <div className="proj-cards">
          {projects.map((p) => (
            <div className="proj-card" key={p.id}>
              <div className="card-top">
                <span className="card-num">{p.id}</span>
                <a href={p.link} target="_blank" rel="noreferrer" className="card-link-icon">GitHub ↗</a>
              </div>
              <div className="card-title">{p.title}</div>
              <p className="card-desc">{p.desc}</p>
              <div className="card-tags">
                {p.tags.map((t) => <span className="ctag" key={t}>{t}</span>)}
              </div>
              <div className="card-meta">
                <span className="card-date">{p.date}</span>
                <span className="card-status">
                  <span className="status-dot complete" />
                  Complete
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <button onClick={() => navigate("/projects")} className="btn btn-ghost">
            View All Projects →
          </button>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="edu-section">
        <div className="sec-label">03 — Education</div>
        <h2 className="sec-title">Academic Background</h2>
        <div className="edu-list">
          {education.map((e) => (
            <div className="edu-row" key={e.period}>
              <div className="edu-year">{e.period}</div>
              <div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-grade">{e.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="ach-section">
        <div className="sec-label">04 — Recognition</div>
        <h2 className="sec-title">Achievements</h2>
        <div className="ach-row">
          <div className="ach-year">2025</div>
          <div>
            <div className="ach-title">Runner-up — AI Student of the Year Hackathon</div>
            <div className="ach-desc">Hosted by MU AI Hub in partnership with Google Gemini. Competed among student developers to build AI-powered solutions, placing second overall.</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="sec-label">05 — Contact</div>
        <h2 className="sec-title">Get In Touch</h2>
        <div className="contact-inner">
          <p className="contact-desc">Open to collaborations, internships, and research opportunities. Reach out via any of the channels below.</p>
          <div className="contact-grid">
            {contacts.map((c) => (
              <a href={c.href} target="_blank" rel="noreferrer" className="contact-cell" key={c.label}>
                <div className="cc-label">{c.label}</div>
                <div className="cc-val">{c.val}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
