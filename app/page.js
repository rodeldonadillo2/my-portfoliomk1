'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Rodel Donadillo logo" className="navbar-logo-image" />
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-divider" />

        {/* LEFT - CREATOR */}
        <div className="hero-side hero-left">
          <div className="hero-content">
            <h1 className="hero-title">creator</h1>
            <p className="hero-desc">
              Social media strategist who builds brands and drives real engagement.
            </p>
          </div>
        </div>

        {/* CENTER NAME ONLY */}
        <div className="hero-center">
          <span className="hero-name">Rodel Donadillo</span>
        </div>

        {/* RIGHT - AUTOMATOR */}
        <div className="hero-side hero-right">
          <div className="hero-content">
            <h1 className="hero-title">automator</h1>
            <p className="hero-desc">
              Systems builder who automates workflows and scales businesses.
            </p>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="fade-in">
          <p className="section-label">01 — About</p>
          <h2 className="section-title">I bridge the gap between<br /><span>creativity and systems</span></h2>
        </div>
        <div className="about-grid fade-in">
          <div className="about-text">
            <p>
              I&apos;m Rodel Donadillo — a Social Media Manager, Automation Specialist, and Aspiring Web Developer based in the Philippines. I help businesses grow their online presence while building the systems that make that growth sustainable.
            </p>
            <p>
              My background in Meta Suites and GoHighLevel means I understand both the creative and technical sides of digital marketing. Now I&apos;m adding web development to that stack — because the best marketers of tomorrow will also know how to build.
            </p>
            <p>
              I believe in shipping fast, learning faster, and building things that actually work for real people.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years in Social Media</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Workflows Automated</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">GHL</div>
              <div className="stat-label">Certified User</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">∞</div>
              <div className="stat-label">Problems to Solve</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ background: '#0d0d0d', maxWidth: '100%', padding: '6rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="fade-in">
            <p className="section-label">02 — Skills</p>
            <h2 className="section-title">What I bring<br /><span>to the table</span></h2>
          </div>
          <div className="skills-grid fade-in">
            {[
              { icon: '📱', name: 'Meta Suites', type: 'Creator', category: 'creator' },
              { icon: '⚡', name: 'GoHighLevel', type: 'Automator', category: 'automator' },
              { icon: '🐙', name: 'GitHub', type: 'Automator', category: 'automator' },
              { icon: '📊', name: 'Social Media Mgmt', type: 'Creator', category: 'creator' },
              { icon: '🔄', name: 'Automation', type: 'Automator', category: 'automator' },
              { icon: '💻', name: 'Web Development', type: 'Automator', category: 'automator' },
              { icon: '🎯', name: 'Content Strategy', type: 'Creator', category: 'creator' },
              { icon: '📈', name: 'Growth Marketing', type: 'Creator', category: 'creator' },
            ].map((skill) => (
              <div key={skill.name} className={`skill-card ${skill.category}`}>
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-type">{skill.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="fade-in">
          <p className="section-label">03 — Projects</p>
          <h2 className="section-title">Things I&apos;ve<br /><span>built and shipped</span></h2>
        </div>
        <div className="projects-grid fade-in">
          {[
            {
              num: '001',
              title: 'Social Media Dashboard',
              desc: 'A centralized dashboard for managing multiple social media accounts, scheduling posts, and tracking engagement metrics across Meta platforms.',
              tags: ['Meta API', 'Next.js', 'Tailwind'],
            },
            {
              num: '002',
              title: 'GHL Automation Suite',
              desc: 'A collection of GoHighLevel workflows that automate lead nurturing, follow-up sequences, and client onboarding for digital marketing agencies.',
              tags: ['GoHighLevel', 'Automation', 'CRM'],
            },
            {
              num: '003',
              title: 'Client Reporting Tool',
              desc: 'An automated reporting system that pulls data from social platforms and generates branded PDF reports for clients on a weekly basis.',
              tags: ['Automation', 'PDF', 'Social Media'],
            },
          ].map((project) => (
            <div key={project.num} className="project-card">
              <div className="project-number">{project.num}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="https://github.com/rodeldonadillo2" className="btn btn-primary">
                  GitHub ↗
                </a>
                <a href="#" className="btn btn-outline">
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#0d0d0d', maxWidth: '100%', padding: '6rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="fade-in">
            <p className="section-label">04 — Contact</p>
            <h2 className="section-title">Let&apos;s build<br /><span>something together</span></h2>
          </div>
          <div className="contact-wrapper fade-in">
            <div className="contact-info">
              <p>
                Whether you need a social media strategy, an automation system, or a web project — I&apos;m open to collaborations, freelance work, and new opportunities.
              </p>
              <div className="contact-links">
                <a href="mailto:rodeldonadillo2@gmail.com" className="contact-link">
                  <div className="contact-link-icon">✉️</div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">Email</span>
                    <span className="contact-link-value">rodeldonadillo2@gmail.com</span>
                  </div>
                </a>
                <a href="https://github.com/rodeldonadillo2" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-icon">🐙</div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">GitHub</span>
                    <span className="contact-link-value">rodeldonadillo2</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-cta">
              <h3>Ready to work together?</h3>
              <p>Send me a message and I&apos;ll get back to you within 24 hours.</p>
              <a href="mailto:rodeldonadillo2@gmail.com" className="btn btn-primary btn-large">
                Send a Message ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/logo.png" alt="Rodel Donadillo logo" className="footer-logo-image" />
        </div>
        <span>© 2025 Rodel Donadillo. All rights reserved.</span>
        <span style={{ color: 'var(--muted)' }}>Built with Next.js + Vercel</span>
      </footer>
    </>
  );
}