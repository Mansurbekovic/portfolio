import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, Phone, Send, Award, ArrowRight, Layers, Cpu, Bot, ShieldCheck, Eye, Terminal } from 'lucide-react';
import { getProjects, type LiveProject } from '../data/projectsData';
import { TelegramBotStatusWidget } from '../components/TelegramBotStatusWidget';
import { ProjectDemoModal } from '../components/ProjectDemoModal';
import { CertificateModal } from '../components/CertificateModal';
import { IdentityProofModal } from '../components/IdentityProofModal';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<LiveProject | null>(null);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [isIdentityProofOpen, setIsIdentityProofOpen] = useState(false);
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Minimalist Hero */}
        <section className="py-10 md:py-16 border-b border-[var(--border-subtle)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7">
              {/* Accreditation Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[#92400E] dark:text-[var(--accent-amber)] border border-[#FDE68A] dark:border-[var(--accent-amber)] text-xs font-mono font-medium mb-6">
                <Award className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                <span>{t.heroBadge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.12] mb-5">
                Muhammadislom Rustambekov
              </h1>

              <p className="text-lg sm:text-xl font-medium text-[var(--text-secondary)] leading-relaxed mb-6">
                {t.heroTitle}
              </p>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-8">
                {t.heroSubtitle}
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <NavLink to="/projects" className="btn-primary">
                  <span>{t.btnExploreProjects}</span>
                  <ArrowRight className="w-4 h-4" />
                </NavLink>

                <a
                  href="tel:+998503016347"
                  className="btn-amber"
                  title="Instant Call: +998 50 301 63 47"
                >
                  <Phone className="w-4 h-4" />
                  <span>+998 50 301 63 47</span>
                </a>

                <a
                  href="https://t.me/muhammadislom10"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <Send className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                  <span>@muhammadislom10</span>
                </a>
              </div>
            </div>

            {/* Right Column: Official Turon IT Certificate Card (Replaces upfront selfie) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-md w-full">
                {/* Ambient gold glow backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/30 to-amber-600/10 rounded-[12px] blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
                
                {/* Main Certificate Showcase Card */}
                <div className="relative rounded-[8px] overflow-hidden bg-[var(--bg-surface)] border-2 border-amber-500/40 shadow-2xl transition-all">
                  
                  {/* Top Accreditation Ribbon */}
                  <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-black px-3.5 py-2 border-b border-amber-500/30 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="text-[11px] font-mono font-bold tracking-wider text-amber-300 uppercase">
                        Davlat Litsenziyali Sertifikat
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>TASDIQLANGAN</span>
                    </span>
                  </div>

                  {/* Certificate Image Viewport with click to zoom */}
                  <div 
                    onClick={() => setIsCertOpen(true)}
                    className="relative aspect-[16/11] overflow-hidden bg-[var(--bg-muted)] cursor-pointer group/cert"
                    title="Kattalashtirib ko'rish uchun bosing"
                  >
                    <img
                      src="/images/certificate.jpg"
                      alt="Turon Xalqaro Ta'lim Markazi Rasmiy Sertifikati"
                      className="w-full h-full object-cover object-center group-hover/cert:scale-103 transition-transform duration-500 ease-out"
                      loading="eager"
                    />
                    
                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    {/* Hover Inspect Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-bold backdrop-blur-[2px]">
                      <Eye className="w-4 h-4 text-amber-300" />
                      <span>Sertifikatni kattalashtirib ko'rish</span>
                    </div>

                    {/* Bottom Metadata Plaque */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold tracking-tight">Turon Xalqaro Ta'lim Markazi</div>
                        <div className="text-[10px] text-amber-300 font-mono">Litsenziya № 1043575 &bull; Qayd № 247</div>
                      </div>
                      <span className="text-[10px] font-mono bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                        Rustambekov M.
                      </span>
                    </div>
                  </div>

                  {/* Card Lower Action Bar */}
                  <div className="p-3 bg-[var(--bg-warm)] border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setIsCertOpen(true)}
                      className="text-xs font-mono font-bold text-[var(--accent-amber)] hover:opacity-80 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Sertifikat (HD)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsIdentityProofOpen(true)}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] border border-[var(--border-strong)] text-[var(--text-primary)] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                      <span>Shaxsni tasdiqlash</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Live Telegram Bot Heartbeat Widget */}
        <section className="py-6 border-b border-[var(--border-subtle)]">
          <TelegramBotStatusWidget />
        </section>

        {/* Featured Showcase: All 6 Live Projects */}
        <section className="py-14 border-b border-[var(--border-subtle)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono font-semibold text-[var(--accent-amber)] uppercase tracking-wider mb-1">
                {t.showcaseBadge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                {t.showcaseTitle}
              </h2>
            </div>

            <NavLink to="/projects" className="text-xs font-medium text-[var(--accent-amber)] hover:opacity-80 flex items-center gap-1">
              <span>{t.allProjectsLink}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

          {/* 6 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="minimal-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[var(--bg-muted)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[5px] bg-[#111827] dark:bg-[var(--accent-amber)] text-white dark:text-[#111827] font-semibold text-xs hover:opacity-90 transition-all"
                  >
                    <span>{t.btnVisitSite}</span>
                    <ExternalLink className="w-3 h-3 text-[#F59E0B] dark:text-[#111827]" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedDemo(project)}
                    className="p-2 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                    title={t.btnPreview}
                  >
                    <Eye className="w-4 h-4 text-[var(--accent-amber)]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Pillars / Skills Matrix */}
        <section className="py-14 border-b border-[var(--border-subtle)]">
          <div className="mb-8">
            <div className="text-xs font-mono font-semibold text-[var(--accent-amber)] uppercase tracking-wider mb-1">
              {t.skillsBreakdownHeading}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              {t.skillsBreakdownHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: t.skillCatFrontend,
                icon: Layers,
                desc: 'React 19, TypeScript 5.x, Tailwind CSS v4, responsive UI/UX, Component Modularity.'
              },
              {
                title: t.skillCatBackend,
                icon: Cpu,
                desc: 'Python FastAPI async loop, Node.js REST APIs, WebSockets, PostgreSQL, Redis.'
              },
              {
                title: t.skillCatTelegram,
                icon: Bot,
                desc: 'High-throughput async Telegram bots, automated webhooks, payment flows, CRM sync.'
              },
              {
                title: t.skillCatSecurity,
                icon: ShieldCheck,
                desc: 'Argon2id password hashing, AES-256-GCM authenticated cipher, JWT rotation, CSP.'
              }
            ].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="minimal-card p-5">
                  <div className="w-9 h-9 rounded-[5px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[var(--text-primary)] mb-2">{skill.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick Utility Lab Banner */}
        <section className="py-12">
          <div className="minimal-card p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-[var(--accent-amber)]">
            <div>
              <div className="text-xs font-mono text-[var(--accent-amber)] uppercase font-bold mb-1">
                {t.toolsHeaderBadge}
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                {t.toolsHeaderTitle}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-xl leading-relaxed">
                {t.toolsHeaderSubtitle}
              </p>
            </div>

            <NavLink to="/tools" className="btn-amber shrink-0">
              <Terminal className="w-4 h-4" />
              <span>{t.btnUtilityLab}</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </section>

      </div>

      {/* Quick Demo Modal */}
      <ProjectDemoModal project={selectedDemo} onClose={() => setSelectedDemo(null)} />

      {/* Official Turon Certificate Inspection Modal */}
      <CertificateModal
        isOpen={isCertOpen}
        onClose={() => setIsCertOpen(false)}
      />

      {/* Official Identity Proof Modal */}
      <IdentityProofModal
        isOpen={isIdentityProofOpen}
        onClose={() => setIsIdentityProofOpen(false)}
        onOpenCertificate={() => setIsCertOpen(true)}
      />
    </div>
  );
};
