import React from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, Phone, Send, Award, ArrowRight, Layers, Cpu, Bot, ShieldCheck } from 'lucide-react';
import { LIVE_PROJECTS } from '../data/projectsData';

export const HomePage: React.FC = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Minimalist Hero */}
        <section className="py-12 md:py-16 border-b border-[#E8E2D7]">
          <div className="max-w-3xl">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-mono font-medium mb-6">
              <Award className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Certified Full-Stack Developer • Turon International Education Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.12] mb-5">
              Muhammadislom Rustambekov
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#4B5563] leading-relaxed mb-6">
              Full-Stack Software Engineer & Telegram Bot Developer. Architecting secure, scalable digital products, high-throughput automated bots, and modern web applications.
            </p>

            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8">
              Certified by <strong className="text-[#111827]">Turon International Education Center</strong>, I combine modern React 19 frontend systems with robust, asynchronous Python FastAPI backends. Every project below is fully deployed and operational in production.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <NavLink to="/projects" className="btn-primary">
                <span>Explore 6 Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </NavLink>

              <a
                href="tel:+998503016347"
                className="btn-amber"
                title="Instant Call"
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
                <Send className="w-3.5 h-3.5 text-[#D97706]" />
                <span>@muhammadislom10</span>
              </a>
            </div>

          </div>
        </section>

        {/* Featured Showcase: All 6 Live Projects */}
        <section className="py-14 border-b border-[#E8E2D7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono font-semibold text-[#D97706] uppercase tracking-wider mb-1">
                Featured Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                Live Production Websites
              </h2>
            </div>

            <NavLink to="/projects" className="text-xs font-medium text-[#D97706] hover:text-[#B45309] flex items-center gap-1">
              <span>View all project details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

          {/* 6 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIVE_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="minimal-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[#F3EFEA] text-[#6B7280] border border-[#E8E2D7]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#F9FAFB] text-[#4B5563] border border-[#E5E7EB]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F3EFEA]">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[5px] bg-[#111827] text-white font-medium text-xs hover:bg-[#1F2937] transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3 h-3 text-[#F59E0B]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Pillars / Skills Matrix */}
        <section className="py-14 border-b border-[#E8E2D7]">
          <div className="mb-8">
            <div className="text-xs font-mono font-semibold text-[#D97706] uppercase tracking-wider mb-1">
              Architecture & Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
              Engineering Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Frontend Systems',
                icon: Layers,
                desc: 'React 19, TypeScript 5.x, Tailwind CSS v4, responsive UI/UX, and component modularity.'
              },
              {
                title: 'Backend Engineering',
                icon: Cpu,
                desc: 'Python FastAPI async loop, Node.js REST APIs, WebSockets, PostgreSQL, and Redis.'
              },
              {
                title: 'Telegram Automation',
                icon: Bot,
                desc: 'High-throughput async Telegram bots, automated webhooks, payment flows, and CRM synchronization.'
              },
              {
                title: 'Zero-Trust Security',
                icon: ShieldCheck,
                desc: 'Argon2id password hashing, AES-256-GCM authenticated cipher, JWT rotation, and strict CSP.'
              }
            ].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="minimal-card p-5">
                  <div className="w-9 h-9 rounded-[5px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#111827] mb-2">{skill.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick Utility Lab Banner */}
        <section className="py-12">
          <div className="minimal-card p-8 bg-gradient-to-r from-[#FFFFFF] to-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-[#D97706]">
            <div>
              <div className="text-xs font-mono text-[#D97706] uppercase font-bold mb-1">
                Interactive Utilities
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">
                Need a Password Generator, Crypto Converter or JSON Formatter?
              </h3>
              <p className="text-xs text-[#4B5563] max-w-xl leading-relaxed">
                Visit the interactive Utility Lab built directly into this portfolio for real-time developer and visitor tools.
              </p>
            </div>

            <NavLink to="/tools" className="btn-amber shrink-0">
              <span>Open Utility Lab</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </section>

      </div>
    </div>
  );
};
