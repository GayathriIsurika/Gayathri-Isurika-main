import React, { useState, useEffect } from 'react';
import profileImage from './Images/my.jpeg';
import './style.css';
import {
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  Palette,
  Database,
  Cpu,
  Globe,
  GraduationCap,
  Layers,
  Terminal,
  FolderGit2
} from 'lucide-react';

// Brand icon components styled to match Lucide's 2px line aesthetics
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// --- Configuration Object ---
const portfolioConfig = {
  name: "Gayathri Isurika",
  title: "Computing Undergraduate & Web Developer",
  roleSubtitles: [
    "Computing Undergraduate",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Problem Solver"
  ],
  about: "I'm Gayathri Isurika, an undergraduate in Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. Deeply passionate about web development and UI/UX design, I craft clean, responsive, and intuitive digital interfaces while solving real-world problems through reliable code.",
  profileImage: profileImage,
  contact: {
    email: "isurikagayathri472@gmail.com",
    github: "https://github.com/GayathriIsurika",
    linkedin: "https://linkedin.com/in/gayathri-isurika",
    instagram: "https://www.instagram.com/__gayathri4__/"
  },
  skills: [
    { name: "React", level: 75, category: "Frontend", icon: Code2, color: "#38bdf8" },
    { name: "JavaScript", level: 85, category: "Languages", icon: Terminal, color: "#facc15" },
    { name: "HTML & CSS", level: 95, category: "Frontend", icon: Globe, color: "#f97316" },
    { name: "Java", level: 75, category: "Backend", icon: Cpu, color: "#ef4444" },
    { name: "Figma", level: 90, category: "Design", icon: Palette, color: "#ec4899" },
    { name: "MySQL", level: 85, category: "Database", icon: Database, color: "#06b6d4" },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      description: "A dynamic, modern dark-themed web portfolio showcasing personal projects, technical skills, and interactive UI components.",
      link: "https://github.com/GayathriIsurika/Presentation-Generator",
      tags: ["React", "CSS3", "Modern UI", "Lucide Icons"],
      highlight: "Featured"
    },
    {
      title: "Presentation-Generator",
      description: "Group Project: A smart, AI-powered automated presentation generation platform built with Ballerina and modern frontend architecture.",
      link: "https://github.com/GayathriIsurika/Presentation-Generator",
      tags: ["Ballerina", "AI Integration", "React", "Cloud"],
      highlight: "Collaborative"
    },
    {
      title: "Health-Care-Hospital",
      description: "A comprehensive hospital and medical care web system designed to streamline appointments, records, and patient communication.",
      link: "https://github.com/GayathriIsurika/Health-Care-Hospital",
      tags: ["Web Dev", "Database", "JavaScript", "HTML/CSS"],
      highlight: "Web Project"
    }
  ],
  stats: [
    {
      icon: GraduationCap,
      title: "BSc (Hons) in Computing & IS",
      desc: "Faculty of Computing, Sabaragamuwa University of Sri Lanka"
    },
    {
      icon: Layers,
      title: "Specialization & Focus",
      desc: "Modern Web Frameworks, Responsive Systems & UI Engineering"
    },
    {
      icon: Sparkles,
      title: "Ready for Opportunities",
      desc: "Open to software engineering internships and web development roles"
    }
  ]
};

// --- Ambient Background Component ---
const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="background-grid"></div>
      <div className="ambient-glow glow-orb-1"></div>
      <div className="ambient-glow glow-orb-2"></div>
      <div className="ambient-glow glow-orb-3"></div>
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>
    </div>
  );
};

// --- Navigation Component ---
const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Skills', icon: Code2 },
    { name: 'Works', icon: Briefcase },
    { name: 'Contact', icon: Mail }
  ];

  return (
    <header className="nav-container">
      <nav className="navigation" aria-label="Main Navigation">
        <button 
          className="nav-brand" 
          onClick={() => setActiveSection('Home')}
          aria-label="Go to home"
        >
          <span className="brand-badge">G</span>
          <span className="brand-text">Gayathri<span>.dev</span></span>
        </button>

        <div className="nav-links">
          {navItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`nav-link ${activeSection === name ? 'active' : ''}`}
              onClick={() => setActiveSection(name)}
            >
              <Icon size={16} />
              <span>{name}</span>
            </button>
          ))}
        </div>

        <button 
          className="nav-cta-btn"
          onClick={() => setActiveSection('Contact')}
        >
          <Sparkles size={15} color="#38bdf8" />
          <span>Get in Touch</span>
        </button>
      </nav>
    </header>
  );
};

// --- Hero / Home Section ---
const HomeSection = ({ setActiveSection }) => {
  return (
    <section className="home-section" id="Home">
      <div className="home-content">
        <div className="home-text">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>Available for opportunities</span>
          </div>

          <span className="greeting-lead">Hello World, I'm</span>
          <h1 className="greeting-name">
            <span className="name-gradient">{portfolioConfig.name}</span>
          </h1>

          <div className="role-wrapper">
            <Terminal size={22} className="role-icon" />
            <Typewriter texts={portfolioConfig.roleSubtitles} />
          </div>

          <p className="bio-description">
            Undergraduate in Computing & Information Systems at Sabaragamuwa University of Sri Lanka. 
            Crafting elegant, accessible, and high-performance digital web experiences.
          </p>

          <div className="hero-actions">
            <button 
              className="btn-primary" 
              onClick={() => setActiveSection('Works')}
            >
              <FolderGit2 size={18} />
              <span>View Projects</span>
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => setActiveSection('Contact')}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </button>
          </div>

          <div className="social-links">
            <a 
              href={portfolioConfig.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href={portfolioConfig.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href={portfolioConfig.contact.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={20} />
            </a>
            <a 
              href={`mailto:${portfolioConfig.contact.email}`}
              className="social-link"
              aria-label="Send an Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="home-image">
          <div className="profile-halo-wrapper">
            <div className="halo-glow"></div>
            <div className="halo-ring"></div>
            
            <div className="profile-card">
              <img
                src={portfolioConfig.profileImage}
                alt={portfolioConfig.name}
                className="profile-image"
              />
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-react">
              <Code2 size={16} />
              <span>React</span>
            </div>
            <div className="floating-badge badge-figma">
              <Palette size={16} />
              <span>Figma</span>
            </div>
            <div className="floating-badge badge-java">
              <Cpu size={16} />
              <span>Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const AboutSection = ({ setActiveSection }) => {
  return (
    <section className="content-section" id="About">
      <div className="section-header">
        <span className="section-tag">
          <User size={14} /> Background
        </span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about combining technical architecture with creative user experience.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-main-card">
          <p className="about-quote">
            "{portfolioConfig.about}"
          </p>

          <div className="about-tags">
            <span className="pill-tag">✨ Web Development</span>
            <span className="pill-tag">🎨 UI/UX Design</span>
            <span className="pill-tag">💻 Frontend Architecture</span>
            <span className="pill-tag">⚡ Responsive Design</span>
            <span className="pill-tag">🧩 Problem Solving</span>
          </div>

          <button 
            className="btn-primary"
            onClick={() => setActiveSection('Contact')}
          >
            <Sparkles size={16} />
            <span>Let's Build Something Together</span>
          </button>
        </div>

        <div className="about-side-stack">
          {portfolioConfig.stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="stat-card" key={idx}>
                <div className="stat-icon-box">
                  <Icon size={24} />
                </div>
                <div className="stat-details">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Skills Section ---
const SkillsSection = () => {
  return (
    <section className="content-section" id="Skills">
      <div className="section-header">
        <span className="section-tag">
          <Code2 size={14} /> Capabilities
        </span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies, frameworks, and design tools I use to bring ideas to life.
        </p>
      </div>

      <div className="skills-grid">
        {portfolioConfig.skills.map(skill => {
          const Icon = skill.icon;
          return (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card-top">
                <div className="skill-info-left">
                  <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="skill-title">{skill.name}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{skill.category}</span>
                  </div>
                </div>
                <span className="skill-level-pct">{skill.level}%</span>
              </div>

              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// --- Projects / Works Section ---
const WorksSection = () => {
  return (
    <section className="content-section" id="Works">
      <div className="section-header">
        <span className="section-tag">
          <Briefcase size={14} /> Portfolio
        </span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects that showcase my development and problem-solving journey.
        </p>
      </div>

      <div className="projects-grid">
        {portfolioConfig.projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div>
              <div className="project-card-header">
                <div className="project-icon-box">
                  <FolderGit2 size={24} />
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-external-btn"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span className="project-tag" key={tIdx}>{tag}</span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-footer-action"
              >
                <GithubIcon size={16} />
                <span>View Source Code</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Contact Section ---
const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="content-section" id="Contact">
      <div className="section-header">
        <span className="section-tag">
          <Mail size={14} /> Get in Touch
        </span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Have an interesting project, internship opportunity, or just want to say hi?
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-glow-circle">
            <Mail size={32} />
          </div>

          <p className="contact-intro-text">
            I'm currently looking for new opportunities and collaborations. My inbox is always open!
          </p>

          <div className="contact-direct-actions">
            <div className="email-copy-bar">
              <div className="email-text-box">
                <Mail size={18} color="#38bdf8" />
                <span>{portfolioConfig.contact.email}</span>
              </div>
              <button 
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          <div className="contact-social-grid">
            <a 
              href={`mailto:${portfolioConfig.contact.email}`}
              className="contact-social-pill"
            >
              <Mail size={18} color="#38bdf8" />
              <span>Send Direct Email</span>
            </a>
            <a 
              href={portfolioConfig.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-pill"
            >
              <LinkedinIcon size={18} />
              <span>Connect on LinkedIn</span>
            </a>
            <a 
              href={portfolioConfig.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-pill"
            >
              <GithubIcon size={18} />
              <span>Follow on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Multi-text Typewriter Component ---
const Typewriter = ({ texts = [], speed = 80, pause = 1600 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[index % texts.length];

    if (!isDeleting && subIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setSubIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && subIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(timeout);
    } else if (isDeleting && subIndex > 0) {
      const timeout = setTimeout(() => {
        setSubIndex(prev => prev - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex(prev => (prev + 1) % texts.length);
    }
  }, [subIndex, isDeleting, index, texts, speed, pause]);

  const displayedText = texts[index % texts.length]?.substring(0, subIndex) || '';

  return <span className="typewriter">{displayedText}</span>;
};

// --- Footer Component ---
const Footer = ({ setActiveSection }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-nav">
          {['Home', 'About', 'Skills', 'Works', 'Contact'].map(item => (
            <button key={item} onClick={() => setActiveSection(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className="footer-social-row">
          <a 
            href={portfolioConfig.contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href={portfolioConfig.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a 
            href={portfolioConfig.contact.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a 
            href={`mailto:${portfolioConfig.contact.email}`}
            className="footer-social-btn"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="footer-credit">
          © {new Date().getFullYear()} <b>Gayathri Isurika</b> • Computing Undergraduate • Built with React & Lucide
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
function App() {
  const [activeSection, setActiveSection] = useState('Home');

  // Scroll to top when switching sections for smooth UX
  const handleSectionChange = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <HomeSection setActiveSection={handleSectionChange} />;
      case 'About':
        return <AboutSection setActiveSection={handleSectionChange} />;
      case 'Skills':
        return <SkillsSection />;
      case 'Works':
        return <WorksSection />;
      case 'Contact':
        return <ContactSection />;
      default:
        return <HomeSection setActiveSection={handleSectionChange} />;
    }
  };

  return (
    <div className="app-wrapper">
      <AnimatedBackground />
      <div className="container">
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={handleSectionChange} 
        />
        <main id="main-content">
          {renderSection()}
        </main>
      </div>
      <Footer setActiveSection={handleSectionChange} />
    </div>
  );
}

export default App;
