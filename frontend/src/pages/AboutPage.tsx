import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Award, CheckCircle2, Phone, Code2, Server, Terminal, Shield, ArrowRight, Eye, GitCommit, Flame } from 'lucide-react';
import { CertificateModal } from '../components/CertificateModal';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const { t } = useLanguage();

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
      case 1: return 'bg-[#FEF3C7] dark:bg-[#713F12]/60 border border-[#FDE68A] dark:border-[#A16207]';
      case 2: return 'bg-[#FCD34D] dark:bg-[#A16207] border border-[#F59E0B]';
      case 3: return 'bg-[#F59E0B] dark:bg-[#CA8A04]';
      case 4: return 'bg-[#D97706] dark:bg-[#FACC15]';
      default: return 'bg-[var(--bg-muted)] border border-[var(--border-subtle)]';
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-5">
        
        {/* Header */}
        <div className="border-b border-[var(--border-subtle)] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[#92400E] dark:text-[var(--accent-amber)] border border-[#FDE68A] dark:border-[var(--accent-amber)] text-xs font-mono font-medium mb-4">
            <Award className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
            <span>{t.turonCertified}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
            {t.aboutTitle}
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* Biography Block */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            {t.bioHeading}
          </h2>
          <div className="minimal-card p-6 space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>{t.bioP1}</p>
            <p>{t.bioP2}</p>
            <p>{t.bioP3}</p>
          </div>
        </section>

        {/* Certification Details */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {t.accreditationHeading}
            </h2>
            <button
              type="button"
              onClick={() => setCertModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] hover:opacity-90 text-[#92400E] dark:text-[var(--accent-amber)] border border-[#FDE68A] dark:border-[var(--accent-amber)] text-xs font-mono font-bold transition-all shadow-2xs cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
              <span>{t.inspectDiplomaBtn}</span>
            </button>
          </div>

          <div className="minimal-card p-6 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-muted)] border-l-4 border-l-[var(--accent-amber)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[6px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-xs font-mono font-bold text-[var(--accent-amber)] uppercase">{t.diplomaSubtitle}</div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#059669] dark:text-[#34D399] border border-[#A7F3D0] dark:border-[#059669]">
                    {t.diplomaVerifiedBadge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
                  {t.diplomaMajor}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  {t.diplomaIssuer}
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{t.diplomaSkill1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{t.diplomaSkill2}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{t.diplomaSkill3}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{t.diplomaSkill4}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">{t.diplomaClickHint}</span>
                  <button
                    type="button"
                    onClick={() => setCertModalOpen(true)}
                    className="text-xs font-mono font-bold text-[var(--accent-amber)] hover:opacity-80 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.diplomaViewFull}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Competencies Breakdown */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            {t.skillsBreakdownHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Frontend */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-2.5 mb-3 text-[var(--text-primary)] font-bold text-sm">
                <Code2 className="w-4 h-4 text-[var(--accent-amber)]" />
                <span>{t.skillCatFrontend}</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li>• <strong>React 19 & Next.js:</strong> Component architecture, concurrent mode, SSR, client routing.</li>
                <li>• <strong>TypeScript 5.x:</strong> Strict type safety, clean generic interfaces.</li>
                <li>• <strong>Tailwind CSS v4:</strong> Responsive, mobile-first utility design systems.</li>
                <li>• <strong>State Management:</strong> Zustand, TanStack Query (React Query v5).</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-2.5 mb-3 text-[var(--text-primary)] font-bold text-sm">
                <Server className="w-4 h-4 text-[var(--accent-amber)]" />
                <span>{t.skillCatBackend}</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li>• <strong>Python (FastAPI):</strong> High-throughput asynchronous REST APIs.</li>
                <li>• <strong>Pydantic v2:</strong> Strict request/response payload validation.</li>
                <li>• <strong>Node.js:</strong> Express services and WebSocket event dispatchers.</li>
                <li>• <strong>Databases:</strong> PostgreSQL, Redis caching, LocalStorage sync.</li>
              </ul>
            </div>

            {/* Telegram Bots */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-2.5 mb-3 text-[var(--text-primary)] font-bold text-sm">
                <Terminal className="w-4 h-4 text-[var(--accent-amber)]" />
                <span>{t.skillCatTelegram}</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li>• <strong>Async Bot Frameworks:</strong> Aiogram, python-telegram-bot.</li>
                <li>• <strong>Webhook Pipelines:</strong> Zero-downtime event streaming.</li>
                <li>• <strong>Automated Workflows:</strong> Payment checkouts, CRM integrations, quizzes.</li>
                <li>• <strong>State Management:</strong> FSM (Finite State Machine) user sessions.</li>
              </ul>
            </div>

            {/* Security */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-2.5 mb-3 text-[var(--text-primary)] font-bold text-sm">
                <Shield className="w-4 h-4 text-[var(--accent-amber)]" />
                <span>{t.skillCatSecurity}</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
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
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
            {t.skillMatrixHeading}
          </h2>
          <p className="text-xs text-[var(--text-muted)] mb-5">
            {t.skillMatrixSubtitle}
          </p>

          <div className="minimal-card p-6 space-y-5">
            {SKILL_METRICS.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                  <span className="font-semibold text-[var(--text-primary)]">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[var(--bg-muted)] text-[var(--text-muted)]">
                      {skill.experience}
                    </span>
                    <span className="font-bold text-[var(--accent-amber)]">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-[3px] bg-[var(--bg-muted)] overflow-hidden">
                  <div
                    className="h-full rounded-[3px] bg-gradient-to-r from-[var(--accent-amber)] to-[#F59E0B] transition-all duration-500"
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
            <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-[var(--accent-amber)]" />
              <span>{t.githubHeading}</span>
            </h2>
            <div className="flex items-center gap-1 text-xs font-mono text-[var(--accent-amber)]">
              <Flame className="w-3.5 h-3.5 fill-[var(--accent-amber)]" />
              <span>{t.githubStreakBadge}</span>
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] mb-5">
            {t.githubSubtitle}
          </p>

          <div className="minimal-card p-6">
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-5 mb-5 border-b border-[var(--border-subtle)]">
              <div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">{t.githubTotalContributions}</div>
                <div className="text-lg font-bold text-[var(--text-primary)] font-mono mt-0.5">1,480+</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">{t.githubCurrentStreak}</div>
                <div className="text-lg font-bold text-[#10B981] font-mono mt-0.5">49 Days</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">{t.githubLongestStreak}</div>
                <div className="text-lg font-bold text-[var(--accent-amber)] font-mono mt-0.5">124 Days</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">{t.githubActiveRepos}</div>
                <div className="text-lg font-bold text-[var(--text-primary)] font-mono mt-0.5">6 Active</div>
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
            <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>{t.githubTimelineNote}</span>
              <div className="flex items-center gap-1.5">
                <span>{t.githubLess}</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[var(--bg-muted)] border border-[var(--border-subtle)]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#FEF3C7] dark:bg-[#713F12]/60 border border-[#FDE68A] dark:border-[#A16207]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#FCD34D] dark:bg-[#A16207]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#F59E0B] dark:bg-[#CA8A04]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#D97706] dark:bg-[#FACC15]" />
                <span>{t.githubMore}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Action */}
        <div className="p-6 rounded-[6px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">{t.aboutCtaTitle}</h4>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{t.aboutCtaSubtitle}</p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <NavLink to="/contact" className="btn-primary text-xs">
              <span>{t.aboutCtaContactBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
            <a href="tel:+998503016347" className="btn-amber text-xs">
              <Phone className="w-3.5 h-3.5" />
              <span>{t.aboutCtaCallBtn}</span>
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
