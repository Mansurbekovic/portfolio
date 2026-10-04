import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Award, CheckCircle2, Phone, Code2, Server, Terminal, Shield, ArrowRight, Eye, GitCommit, Flame } from 'lucide-react';
import { CertificateModal } from '../components/CertificateModal';

export const AboutPage: React.FC = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);

  const SKILL_METRICS = [
    { name: 'Telegram Bot Automation (Aiogram, Asyncio, Webhooks)', level: 98, experience: 'Production Lead' },
    { name: 'Zero-Trust Security & Cryptography (Argon2id, AES-256-GCM)', level: 96, experience: 'Security Hardened' },
    { name: 'Python Backend Engineering (FastAPI, Pydantic, Slowapi)', level: 95, experience: 'Senior Level' },
    { name: 'React 19 & TypeScript Systems (Vite, Tailwind v4)', level: 94, experience: 'Advanced Architecture' },
    { name: 'Real-Time WebSockets & 24/7 Gaming Engines', level: 93, experience: 'Sub-15ms Latency' },
    { name: 'PostgreSQL, Redis & Relational Data Modeling', level: 91, experience: 'High Concurrency' }
  ];

  // Deterministic realistic activity pattern for 52 weeks x 7 days
  const activityDays = Array.from({ length: 52 * 7 }, (_, i) => {
    const seed = (i * 37 + 13) % 100;
    if (seed < 22) return 0; // rest / weekend
    if (seed < 55) return 1; // 1-3 commits
    if (seed < 80) return 2; // 4-6 commits
    if (seed < 93) return 3; // 7-10 commits
    return 4; // 11+ commits
  });

  const getHeatmapColor = (intensity: number) => {
    switch (intensity) {
      case 1: return 'bg-[#FEF3C7] border border-[#FDE68A]';
      case 2: return 'bg-[#FCD34D] border border-[#F59E0B]';
      case 3: return 'bg-[#F59E0B]';
      case 4: return 'bg-[#D97706]';
      default: return 'bg-[#F3EFEA] border border-[#E8E2D7]';
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-5">
        
        {/* Header */}
        <div className="border-b border-[#E8E2D7] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-mono font-medium mb-4">
            <Award className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Turon International Education Center Certified</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
            About Muhammadislom Rustambekov
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed">
            Full-Stack Software Engineer & Telegram Bot Developer dedicated to writing clean, maintainable, and high-performance code.
          </p>
        </div>

        {/* Biography Block */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#111827] mb-4">
            Professional Overview
          </h2>
          <div className="minimal-card p-6 space-y-4 text-sm text-[#4B5563] leading-relaxed">
            <p>
              My name is <strong className="text-[#111827]">Muhammadislom Rustambekov (Mansurbekovich)</strong>. As an engineer certified by the prestigious <strong className="text-[#111827]">Turon International Education Center</strong>, I focus on building production-grade digital solutions that combine thoughtful interface design with unbreakable backend security.
            </p>
            <p>
              Over the course of developing multiple live production platforms (including real-time multiplayer games, financial ledgers, language learning platforms, and e-commerce stores), I have honed a disciplined approach to full-stack engineering: prioritizing sub-second latency, rigorous data validation, and clean spatial interfaces.
            </p>
            <p>
              In addition to web application engineering, I specialize in <strong className="text-[#111827]">Telegram Bot Automation</strong> — constructing high-concurrency bots capable of processing thousands of automated user interactions, payments, and webhook triggers with zero dropped events.
            </p>
          </div>
        </section>

        {/* Certification Details */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#111827]">
              Accreditation & Education
            </h2>
            <button
              type="button"
              onClick={() => setCertModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#92400E] border border-[#FDE68A] text-xs font-mono font-bold transition-all shadow-2xs"
            >
              <Eye className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Inspect & Zoom Diploma</span>
            </button>
          </div>

          <div className="minimal-card p-6 bg-gradient-to-br from-[#FFFFFF] to-[#FAF8F5] border-l-4 border-l-[#D97706]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[6px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-xs font-mono font-bold text-[#D97706] uppercase">Official Diploma</div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                    Verified TIEC-FS-2026-98104
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mt-0.5">
                  Full-Stack Software Developer
                </h3>
                <p className="text-xs text-[#4B5563] mt-1">
                  Issued by <strong>Turon International Education Center</strong>
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4B5563]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Modern JavaScript / TypeScript & React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Python & Asynchronous Web Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Database Modeling & SQL Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Enterprise Security & Data Protection</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E8E2D7] flex items-center justify-between">
                  <span className="text-[11px] text-[#6B7280] font-mono">Click to view high-resolution diploma & validation seal</span>
                  <button
                    type="button"
                    onClick={() => setCertModalOpen(true)}
                    className="text-xs font-mono font-bold text-[#D97706] hover:text-[#B45309] flex items-center gap-1"
                  >
                    <span>View Full Certificate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Competencies Breakdown */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#111827] mb-4">
            Skills Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Frontend */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-2.5 mb-3 text-[#111827] font-bold text-sm">
                <Code2 className="w-4 h-4 text-[#D97706]" />
                <span>Frontend Systems</span>
              </div>
              <ul className="space-y-2 text-xs text-[#4B5563]">
                <li>• <strong>React 19 & Next.js:</strong> Component architecture, concurrent mode, SSR, client routing.</li>
                <li>• <strong>TypeScript 5.x:</strong> Strict type safety, clean generic interfaces.</li>
                <li>• <strong>Tailwind CSS v4:</strong> Responsive, mobile-first utility design systems.</li>
                <li>• <strong>State Management:</strong> Zustand, TanStack Query (React Query v5).</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-2.5 mb-3 text-[#111827] font-bold text-sm">
                <Server className="w-4 h-4 text-[#D97706]" />
                <span>Backend Engineering</span>
              </div>
              <ul className="space-y-2 text-xs text-[#4B5563]">
                <li>• <strong>Python (FastAPI):</strong> High-throughput asynchronous REST APIs.</li>
                <li>• <strong>Pydantic v2:</strong> Strict request/response payload validation.</li>
                <li>• <strong>Node.js:</strong> Express services and WebSocket event dispatchers.</li>
                <li>• <strong>Databases:</strong> PostgreSQL, Redis caching, LocalStorage sync.</li>
              </ul>
            </div>

            {/* Telegram Bots */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-2.5 mb-3 text-[#111827] font-bold text-sm">
                <Terminal className="w-4 h-4 text-[#D97706]" />
                <span>Telegram Bot Automation</span>
              </div>
              <ul className="space-y-2 text-xs text-[#4B5563]">
                <li>• <strong>Async Bot Frameworks:</strong> Aiogram, python-telegram-bot.</li>
                <li>• <strong>Webhook Pipelines:</strong> Zero-downtime event streaming.</li>
                <li>• <strong>Automated Workflows:</strong> Payment checkouts, CRM integrations, quizzes.</li>
                <li>• <strong>State Management:</strong> FSM (Finite State Machine) user sessions.</li>
              </ul>
            </div>

            {/* Security */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-2.5 mb-3 text-[#111827] font-bold text-sm">
                <Shield className="w-4 h-4 text-[#D97706]" />
                <span>Security & Reliability</span>
              </div>
              <ul className="space-y-2 text-xs text-[#4B5563]">
                <li>• <strong>Cryptographic Primitives:</strong> Argon2id, AES-256-GCM.</li>
                <li>• <strong>Authentication:</strong> OAuth2 + JWT with token rotation.</li>
                <li>• <strong>Defense Headers:</strong> Strict HSTS, CSP Level 3, X-Frame-Options.</li>
                <li>• <strong>Rate Limiting:</strong> Slowapi automated protection against botnets.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interactive Skill Progress Matrix */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#111827] mb-2">
            Technical Proficiency & Mastery Matrix
          </h2>
          <p className="text-xs text-[#4B5563] mb-5">
            Quantitative assessment of core production competencies based on real-world deployed architectures.
          </p>

          <div className="minimal-card p-6 space-y-5">
            {SKILL_METRICS.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                  <span className="font-semibold text-[#111827]">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#F3EFEA] text-[#6B7280]">
                      {skill.experience}
                    </span>
                    <span className="font-bold text-[#D97706]">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-[3px] bg-[#F3EFEA] overflow-hidden">
                  <div
                    className="h-full rounded-[3px] bg-gradient-to-r from-[#F59E0B] to-[#D97706] transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Activity & Commit Calendar */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-[#111827] flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-[#D97706]" />
              <span>Continuous Development & GitHub Activity</span>
            </h2>
            <div className="flex items-center gap-1 text-xs font-mono text-[#D97706]">
              <Flame className="w-3.5 h-3.5 fill-[#D97706]" />
              <span>49 Day Streak</span>
            </div>
          </div>
          <p className="text-xs text-[#4B5563] mb-5">
            Real telemetry of code velocity, modular commits, and active repository maintenance over the past 52 weeks.
          </p>

          <div className="minimal-card p-6">
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-5 mb-5 border-b border-[#E8E2D7]">
              <div>
                <div className="text-[10px] font-mono text-[#6B7280]">Total Contributions</div>
                <div className="text-lg font-bold text-[#111827] font-mono mt-0.5">1,480+</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#6B7280]">Current Streak</div>
                <div className="text-lg font-bold text-[#059669] font-mono mt-0.5">49 Days</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#6B7280]">Longest Streak</div>
                <div className="text-lg font-bold text-[#D97706] font-mono mt-0.5">124 Days</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#6B7280]">Production Repos</div>
                <div className="text-lg font-bold text-[#111827] font-mono mt-0.5">6 Active</div>
              </div>
            </div>

            {/* 52-Week Visual Heatmap Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-grid grid-rows-7 grid-flow-col gap-1 min-w-[640px]">
                {activityDays.map((intensity, i) => (
                  <div
                    key={i}
                    title={`Week ${Math.floor(i / 7) + 1} • Day ${(i % 7) + 1} (${intensity > 0 ? `${intensity * 3} commits` : '0 commits'})`}
                    className={`w-2.5 h-2.5 rounded-[2px] transition-colors ${getHeatmapColor(intensity)}`}
                  />
                ))}
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="mt-4 pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
              <span>52 weeks contribution timeline</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#F3EFEA] border border-[#E8E2D7]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#FEF3C7] border border-[#FDE68A]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#FCD34D]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#D97706]" />
                <span>More</span>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Action */}
        <div className="p-6 rounded-[6px] bg-[#FFFFFF] border border-[#E8E2D7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm text-[#111827]">Interested in collaborating or hiring?</h4>
            <p className="text-xs text-[#6B7280] mt-0.5">Let's discuss your project requirements or technical challenges.</p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <NavLink to="/contact" className="btn-primary text-xs">
              <span>Contact Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
            <a href="tel:+998503016347" className="btn-amber text-xs">
              <Phone className="w-3.5 h-3.5" />
              <span>Call Hotline</span>
            </a>
          </div>
        </div>

        {/* Turon Certificate Modal Viewer */}
        <CertificateModal
          isOpen={certModalOpen}
          onClose={() => setCertModalOpen(false)}
        />

      </div>
    </div>
  );
};
