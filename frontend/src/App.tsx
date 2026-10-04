import React from 'react';

const projects = [
  {
    title: 'AI Assistant Dashboard',
    summary: 'Smart internal tool for automation, analytics, and customer support workflows.',
    tags: ['React', 'Python', 'AI'],
  },
  {
    title: 'E-commerce Growth Platform',
    summary: 'Marketplace conversion optimization with personalized recommendations and reporting.',
    tags: ['Next.js', 'Stripe', 'Analytics'],
  },
  {
    title: 'Security Monitoring Portal',
    summary: 'Live operations dashboard for performance, alerts, and risk signal tracking.',
    tags: ['FastAPI', 'Monitoring', 'Cloud'],
  },
];

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'UI/UX',
  'REST APIs',
  'Brand Design',
  'SEO',
  'Figma',
];

const stats = [
  { value: '5+', label: 'Years building digital products' },
  { value: '18', label: 'Projects launched' },
  { value: '96%', label: 'Client satisfaction rate' },
];

export const App: React.FC = () => {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span>Antigravity</span>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="primary-button" href="#contact">
          Book a call
        </a>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">FULL-STACK DEVELOPER / DESIGNER</p>
            <h1>
              I create <span>clean digital experiences</span> that feel premium.
            </h1>
            <p className="lead">
              I build modern websites, product interfaces, and conversion-focused experiences that
              help brands look sharper and grow faster.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#work">
                View projects
              </a>
              <a className="secondary-button" href="#about">
                About me
              </a>
            </div>

            <div className="stats-row">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header">
              <span className="dot dot-green" />
              <span className="dot dot-yellow" />
              <span className="dot dot-red" />
            </div>

            <div className="terminal-window">
              <div className="line">
                <span className="prompt">$</span> build portfolio --fast
              </div>
              <div className="line muted">Starting design system...</div>
              <div className="line muted">Optimizing landing page UX...</div>
              <div className="line success">Deployment ready ✅</div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-grid">
          <div>
            <p className="eyebrow">ABOUT</p>
            <h2>Product-minded builder with an eye for detail.</h2>
          </div>
          <div>
            <p>
              I help startups and businesses turn rough ideas into polished products. My work mixes
              strategy, design, and engineering to create interfaces that are both visually strong
              and easy to use.
            </p>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-head">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Recent projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-visual">
                  <span className="visual-badge">Live</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <p className="eyebrow">STACK</p>
            <h2>Tools I use</h2>
          </div>

          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-box">
          <div>
            <p className="eyebrow">LET'S WORK TOGETHER</p>
            <h2>Need a sharp, modern web presence?</h2>
          </div>
          <a className="primary-button" href="mailto:hello@antigravity.dev">
            hello@antigravity.dev
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Antigravity</span>
        <span>Built for product growth.</span>
      </footer>
    </div>
  );
};

export default App;
