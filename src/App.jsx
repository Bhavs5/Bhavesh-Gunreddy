import { HashRouter, Routes, Route, NavLink, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./styles.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = () => {
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  return (
    <nav className="nav">
      <span className="nav-logo" onClick={goHome}>BHAVESH GUNREDDY</span>
      <ul className="nav-links">
        <li><span onClick={goHome} className="nav-text">Home</span></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
        <li><span onClick={() => scrollTo("about")} className="nav-text">About</span></li>
        <li><span onClick={() => scrollTo("education")} className="nav-text">Education</span></li>
        <li><span onClick={() => scrollTo("contact")} className="nav-text">Contact</span></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Bhavesh Gunreddy</p>
      <p>React · React Router · CSS</p>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}