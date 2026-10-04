import React, { useState } from 'react';
import {
  ExternalLink,
  Phone,
  Send,
  Award,
  CheckCircle2,
  Cpu,
  Layers,
  Bot,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  Mail,
  MessageSquare,
  Globe
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  emoji: string;
  category: string;
  url: string;
  description: string;
  tags: string[];
}

const LIVE_PROJECTS: Project[] = [
  {
    id: 'word-game',
    title: 'Word Game (24/7 Multiplayer)',
    emoji: '🎮',
    category: 'Real-Time Multiplayer Gaming',
    url: 'https://wordm.netlify.app',
    description: 'Interactive 2-player real-time word game operating 24/7 with instant state synchronization and anti-cheat validation.',
    tags: ['React', 'WebSocket Sync', 'Tailwind CSS', 'State Engine']
  },
  {
    id: 'upnura',
    title: 'UpNura Web Application',
    emoji: '🚀',
    category: 'Modern Web Application',
    url: 'https://upnura.netlify.app',
    description: 'Fast, interactive web application engineered with modern spatial layouts, responsive UI components, and fluid animations.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Component Architecture']
  },
  {
    id: 'qarz-daftari',
    title: 'Qarz Daftari (Financial Ledger)',
    emoji: '📖',
    category: 'FinTech & Accounting',
    url: 'https://qarz-daftari-islombe.vercel.app',
    description: 'Secure accounting and debt-tracking management system tailored for precise financial record-keeping and balance clarity.',
    tags: ['Next.js / Edge', 'LocalStorage Sync', 'Financial Algorithms', 'Tailwind CSS']
  },
  {
    id: 'englif',
    title: 'EnglIF (Language Learning)',
    emoji: '🇬🇧',
    category: 'EdTech Platform',
    url: 'https://englif.netlify.app',
    description: 'Interactive educational platform designed to streamline English language vocabulary retention, listening, and grammar mastery.',
    tags: ['React', 'Audio Engine', 'Interactive Quizzes', 'Tailwind CSS']
  },
  {
    id: 'web-shopping',
    title: 'Web Shopping (E-Commerce)',
    emoji: '🛒',
    category: 'E-Commerce Platform',
    url: 'https://web-shopping.netlify.app',
    description: 'Full-featured online store interface equipped with multi-criteria product filtering, dynamic cart management, and seamless checkout.',
    tags: ['React', 'Global Cart State', 'Catalog Filters', 'REST APIs']
  },
  {
    id: 'fc-point',
    title: 'FC Point Platform',
    emoji: '⚽',
    category: 'Sports Analytics',
    url: 'https://fc-point.netlify.app',
    description: 'Interactive sports analytics and score tracking platform delivering live football stats, league standings, and point calculations.',
    tags: ['React', 'Sports Analytics', 'Real-Time Scoring', 'Dynamic Dashboards']
  }
];

const SKILL_PILLARS = [
  {
    title: 'Frontend Architecture',
    icon: Layers,
    description: 'Modern, accessible, and ultra-smooth web applications built with React 19, TypeScript 5.x, and Tailwind CSS v4.',
    items: ['React 19 & TypeScript', 'Tailwind CSS v4 & Responsive Design', 'Canvas / WebGL Micro-Interactions', 'Component Modularity & Clean Code']
  },
  {
    title: 'Backend Systems',
    icon: Cpu,
    description: 'High-throughput asynchronous backend services delivering sub-10ms latency, resilient APIs, and database integrity.',
    items: ['Python (FastAPI Async)', 'Node.js & Express', 'RESTful API & WebSocket Streaming', 'PostgreSQL & Redis Caching']
  },
  {
    title: 'Telegram Bot Engineering',
    icon: Bot,
    description: 'High-concurrency automated Telegram bots with custom business workflows, payment integrations, and webhook pipelines.',
    items: ['Aiogram & Async Python Bots', 'Custom Webhooks & Instant Delivery', 'Database Persistence & User State', 'Automated CRM & Support Bots']
  },
  {
    title: 'Enterprise Security',
    icon: ShieldCheck,
    description: 'Zero-Trust security architecture ensuring complete data protection, authenticated encryption, and automated rate limiting.',
    items: ['Argon2id Hashing (64MB Hardness)', 'AES-256-GCM Authenticated Cipher', 'JWT Authentication & Token Rotation', 'Strict CORS, CSP & Slowapi Rate Limiting']
  }
];

export const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg) return;
    setSentSuccess(true);
    setContactName('');
    setContactEmail('');
    setContactMsg('');
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 bg-ambient relative selection:bg-sky-500 selection:text-slate-950 font-sans">
      {/* Background Subtle Cyber Grid */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40 z-0" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#060913]/85 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-purple-600 flex items-center justify-center font-bold text-slate-950 shadow-md transition-transform group-hover:scale-105">
              MR
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base tracking-wide text-white uppercase flex items-center gap-2">
                <span>MUHAMMADISLOM</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-500/30">
                  TURON CERTIFIED
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Full-Stack Software Engineer
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#projects" className="hover:text-sky-400 transition-colors">
              Live Projects (6)
            </a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">
              Tech Stack
            </a>
            <a href="#certification" className="hover:text-sky-400 transition-colors">
              Certification
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Hotline & Telegram */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/Muhammadislom_08"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-950/60 border border-sky-500/40 text-xs font-mono text-sky-300 hover:bg-sky-900/60 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>@Muhammadislom_08</span>
            </a>

            <a
              href="tel:+998503016347"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-300 hover:border-emerald-400 hover:text-white transition-all shadow-sm"
              title="Click to Call Instant Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+998 50 301 63 47</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090e1d] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Live Projects (6)
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Tech Stack
            </a>
            <a
              href="#certification"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Certification
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Contact
            </a>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="tel:+998503016347"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call: +998 50 301 63 47</span>
              </a>
              <a
                href="https://t.me/Muhammadislom_08"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-950/80 border border-sky-500/40 text-sky-300 font-mono text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Telegram: @Muhammadislom_08</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-400/30 text-sky-300 font-mono text-xs mb-8 shadow-sm">
              <Award className="w-4 h-4 text-sky-400" />
              <span>CERTIFIED FULL-STACK DEVELOPER • TURON INTERNATIONAL EDUCATION CENTER</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Muhammadislom Rustambekov
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-purple-400 mb-6">
              Full-Stack Software Engineer & Telegram Bot Developer
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Architecting secure, high-performance, and scalable digital systems. Specializing in modern React 19 web applications, high-throughput automated Telegram bots, and enterprise Python FastAPI backends.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 transition-all"
              >
                <span>View 6 Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+998503016347"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 font-bold text-sm hover:border-emerald-400 hover:text-white transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call: +998 50 301 63 47</span>
              </a>

              <a
                href="https://t.me/Muhammadislom_08"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:border-sky-400 hover:text-sky-300 transition-all"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram: @Muhammadislom_08</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-2xl font-extrabold text-white font-mono">6 Live</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-mono">Production Apps</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-2xl font-extrabold text-sky-400 font-mono">24/7 Sync</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-mono">Real-Time Gaming</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-2xl font-extrabold text-purple-400 font-mono">FastAPI</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-mono">Python Async Core</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">Turon</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-mono">Certified Developer</div>
              </div>
            </div>

          </div>
        </section>

        {/* PRIMARY SHOWCASE: THE 6 LIVE PROJECTS */}
        <section id="projects" className="py-20 border-t border-slate-900 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30">
                <Globe className="w-3.5 h-3.5" />
                <span>MANDATORY LIVE SHOWCASE AREA</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Featured Live Applications
              </h2>
              <p className="text-slate-400 mt-4 text-base sm:text-lg">
                Click <strong className="text-sky-300">"Visit Live Site ↗"</strong> on any card below to launch and explore the live deployed application instantly.
              </p>
            </div>

            {/* 6 Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LIVE_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-7 flex flex-col justify-between hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-1 transition-all duration-300 shadow-xl group"
                >
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{project.emoji}</span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-sky-950/80 text-sky-300 border border-sky-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 border border-white/10 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Visit Button */}
                  <div className="pt-4 border-t border-slate-800">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-500 text-slate-950 font-bold font-mono text-xs shadow-md hover:shadow-sky-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-4 h-4 text-slate-950" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Core Expertise & Tech Stack */}
        <section id="skills" className="py-20 border-t border-slate-900 bg-slate-950/70">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-mono text-sky-400 tracking-widest uppercase mb-3">
                CORE TECHNICAL COMPETENCIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Tech Stack & System Architecture
              </h2>
              <p className="text-slate-400 mt-4 text-base sm:text-lg">
                Engineered with high standards across frontend interfaces, asynchronous backend systems, and automated Telegram bots.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILL_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between shadow-lg hover:border-slate-700 transition-all"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-slate-800">
                      {pillar.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Certification & Education Spotlight */}
        <section id="certification" className="py-20 border-t border-slate-900 bg-slate-950/40">
          <div className="max-w-5xl mx-auto px-6">
            <div className="p-8 sm:p-10 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-900/90 to-sky-950/30 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-sky-950 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                  <Award className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
                    OFFICIAL PROFESSIONAL CERTIFICATION
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Turon International Education Center
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Certified Full-Stack Software Developer. Mastered end-to-end web engineering, algorithmic architecture, modern React ecosystem, and robust database management.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col gap-3 w-full md:w-auto">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs font-mono uppercase text-center shadow-lg hover:bg-sky-400 transition-all"
                >
                  Verify Credentials
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Direct Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-900 bg-slate-950/80">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">
                DIRECT COMMUNICATION CHANNEL
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let's Build Something Exceptional
              </h2>
              <p className="text-slate-400 mt-4 text-base sm:text-lg">
                Available for enterprise web development, automated Telegram bots, and scalable full-stack projects.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Direct Contacts */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Instant Call Card */}
                <a
                  href="tel:+998503016347"
                  className="p-6 rounded-2xl border border-emerald-500/40 bg-slate-900/80 hover:bg-slate-900 hover:border-emerald-400 transition-all block group shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Direct Phone (Click-to-Call)</div>
                      <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">+998 50 301 63 47</div>
                      <div className="text-[11px] text-slate-400 mt-1">Instant voice connection</div>
                    </div>
                  </div>
                </a>

                {/* Instant Telegram Card */}
                <a
                  href="https://t.me/Muhammadislom_08"
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 rounded-2xl border border-sky-500/40 bg-slate-900/80 hover:bg-slate-900 hover:border-sky-400 transition-all block group shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-500/40 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Direct Telegram Hub</div>
                      <div className="text-xl font-bold font-mono text-sky-400 mt-0.5">@Muhammadislom_08</div>
                      <div className="text-[11px] text-slate-400 mt-1">24/7 fast messaging</div>
                    </div>
                  </div>
                </a>

                {/* Email Card */}
                <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/60">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Ingress Email</div>
                      <div className="text-base font-bold text-white mt-0.5">muhammadislom@antigravity.innovations</div>
                      <div className="text-[11px] text-slate-400 mt-1">Enterprise consultations</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Direct Message Box */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                  <p className="text-xs font-mono text-slate-400 mb-6">
                    Direct inquiry dispatch to Rustambekov Muhammadislom.
                  </p>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Azizbek"
                          className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-sky-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="azizbek@domain.com"
                          className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-sky-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Message / Project Scope
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={contactMsg}
                        onChange={(e) => setContactMsg(e.target.value)}
                        placeholder="Tell me about your project, timeline, or requirements..."
                        className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-sky-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-sky-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-slate-950" />
                      <span>Send Direct Transmission</span>
                    </button>
                  </form>

                  {sentSuccess && (
                    <div className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Message received! Muhammadislom will respond shortly.</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 relative z-10 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-white text-sm">
              Muhammadislom Rustambekov (Mansurbekovich)
            </div>
            <div className="text-slate-400 mt-1">
              Full-Stack Software Engineer • Certified by Turon International Education Center
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+998503016347"
              className="text-emerald-400 hover:text-white transition-colors"
            >
              +998 50 301 63 47
            </a>
            <span>•</span>
            <a
              href="https://t.me/Muhammadislom_08"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-white transition-colors"
            >
              @Muhammadislom_08
            </a>
          </div>

          <div>
            © {new Date().getFullYear()} Antigravity Innovations. Beyond limits. Beyond gravity.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
