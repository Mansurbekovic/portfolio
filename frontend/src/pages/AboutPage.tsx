import React from 'react';
import { NavLink } from 'react-router-dom';
import { Award, CheckCircle2, Phone, Code2, Server, Terminal, Shield, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
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
          <h2 className="text-xl font-bold text-[#111827] mb-4">
            Accreditation & Education
          </h2>
          <div className="minimal-card p-6 bg-gradient-to-br from-[#FFFFFF] to-[#FAF8F5] border-l-4 border-l-[#D97706]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[6px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#D97706] uppercase">Official Diploma</div>
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

      </div>
    </div>
  );
};
