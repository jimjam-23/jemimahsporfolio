import React from "react";
import "./App.css";

const projects = [
  {
    title: "Bloomline Brand Kit",
    category: "Brand Identity",
    year: "2024",
    description:
      "Floral-inspired marks and packaging for a boutique skincare line.",
    color: "var(--accent-coral)",
  },
  {
    title: "Motion Poster Series",
    category: "Editorial",
    year: "2023",
    description: "Dynamic typographic system for a design conference series.",
    color: "var(--accent-gold)",
  },
  {
    title: "Sunroom UI",
    category: "Product Design",
    year: "2024",
    description: "Warm, sunlit dashboard with modular layout and tonal depth.",
    color: "var(--accent-mint)",
  },
  {
    title: "Tide & Type",
    category: "Poster",
    year: "2022",
    description: "Bold, kinetic type exploration inspired by coastal motion.",
    color: "var(--accent-blue)",
  },
  {
    title: "Muse Packaging",
    category: "Packaging",
    year: "2023",
    description: "Minimal packaging concept with tactile paper textures.",
    color: "var(--accent-olive)",
  },
  {
    title: "Lumen Landing",
    category: "Web Design",
    year: "2024",
    description: "Landing page concept with light-first gradients and clarity.",
    color: "var(--accent-lilac)",
  },
];

const gallery = [
  {
    title: "Citrus Poster",
    tag: "Print",
    size: "A2",
  },
  {
    title: "Pearl App Mockup",
    tag: "Mobile",
    size: "6 screens",
  },
  {
    title: "Orbit Icons",
    tag: "Iconography",
    size: "24 pieces",
  },
  {
    title: "Studio Palette",
    tag: "Branding",
    size: "12 swatches",
  },
  {
    title: "Storybook Layout",
    tag: "Editorial",
    size: "28 pages",
  },
  {
    title: "Sculpted Logo",
    tag: "Identity",
    size: "3 variants",
  },
];

function Header() {
  return (
    <header className="hero">
      <nav className="nav">
        <div className="logo">Jemimah</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="nav-button">Let’s Collaborate</button>
      </nav>
      <div className="hero-content">
        <div className="hero-text">
          <p className="eyebrow">Visual designer · Lagos, NG</p>
          <h1>
            Jemimah Portfolio is a living archive of bold identities,
            expressive layouts, and tactile visual systems.
          </h1>
          <p className="subhead">
            I craft brand worlds, editorial design, and digital experiences that
            feel warm, intentional, and memorable. Explore featured projects and
            the latest studio experiments.
          </p>
          <div className="hero-actions">
            <button className="primary">View Selected Work</button>
            <button className="ghost">Download Portfolio PDF</button>
          </div>
          <div className="meta">
            <div>
              <span>12+</span>
              <p>Client collaborations</p>
            </div>
            <div>
              <span>48</span>
              <p>Design explorations</p>
            </div>
            <div>
              <span>5</span>
              <p>Years creating</p>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-top">
            <p>Selected highlight</p>
            <span>2024</span>
          </div>
          <h3>Prism Studio Rebrand</h3>
          <p>
            A luminous identity system built around optical gradients, custom
            lettering, and tactile print finishes.
          </p>
          <div className="hero-card-footer">
            <span>Identity · Print · Digital</span>
            <button className="chip">View case</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      style={{
        borderColor: project.color,
        animationDelay: `${index * 0.12}s`,
      }}
    >
      <div className="project-pill" style={{ background: project.color }}>
        {project.category}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-footer">
        <span>{project.year}</span>
        <button className="chip">Open project</button>
      </div>
    </article>
  );
}

function GalleryItem({ item, index }) {
  return (
    <div
      className="gallery-item"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="gallery-thumb">
        <span>{item.tag}</span>
      </div>
      <div className="gallery-info">
        <h4>{item.title}</h4>
        <p>{item.size}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <section id="work" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Design systems with warmth, clarity, and movement.</h2>
            </div>
            <p className="section-copy">
              Each project is documented with process notes, imagery, and
              production details. Update these cards with your own images and
              links.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <section id="gallery" className="section alt">
          <div className="section-header">
            <div>
              <p className="eyebrow">Studio gallery</p>
              <h2>Snapshots from ongoing experiments and image studies.</h2>
            </div>
            <button className="ghost">Filter by medium</button>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <GalleryItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <h2>Let’s build your next visual story.</h2>
          <p>
            Available for brand identity, editorial, and interface design work.
          </p>
        </div>
        <div className="footer-actions">
          <button className="primary">Send a project brief</button>
          <button className="chip">hello@jemimah.design</button>
        </div>
        <p className="footer-note">
          © 2024 Jemimah’s Portfolio · Crafted with intention
        </p>
      </footer>
    </div>
  );
}

export default App;