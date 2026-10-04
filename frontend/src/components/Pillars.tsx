import React from 'react';
import { ShieldCheck, Cpu, Bot, Sparkles, Gauge } from 'lucide-react';

export const Pillars: React.FC = () => {
  const pillars = [
    {
      id: 'frontend-architecture',
      icon: Cpu,
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-950/20 border-cyan-500/30',
      glow: 'group-hover:border-cyan-500/60',
      tag: 'FRONTEND MASTERY',
      title: 'Modern Frontend Architecture',
      desc: 'Crafting responsive, dynamic, and accessible interfaces with React 19, TypeScript 5.x, Tailwind CSS v4, and Canvas/WebGL visuals for 120 FPS buttery-smooth performance.',
      specs: [
        'React 19 & TypeScript 5.x state systems',
        'Tailwind CSS v4 with custom neon shaders',
        'Canvas & WebGL spatial particle dynamics',
        'Mobile-first responsive design across all viewports'
      ]
    },
    {
      id: 'backend-systems',
      icon: Gauge,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-950/20 border-purple-500/30',
      glow: 'group-hover:border-purple-500/60',
      tag: 'ASYNCHRONOUS BACKEND',
      title: 'Python & Node.js Backend Ecosystems',
      desc: 'Engineering high-throughput asynchronous backends with FastAPI and Node.js. Delivering sub-10ms RESTful endpoints, persistent WebSockets, and resilient database management.',
      specs: [
        'FastAPI asynchronous execution loop',
        'Pydantic v2 strict schema enforcement',
        'Real-time WebSocket multiplayer synchronization',
        'PostgreSQL & Redis caching integration'
      ]
    },
    {
      id: 'telegram-bots',
      icon: Bot,
      iconColor: 'text-sky-400',
      bgColor: 'bg-sky-950/20 border-sky-500/30',
      glow: 'group-hover:border-sky-500/60',
      tag: 'HIGH-THROUGHPUT AUTOMATION',
      title: 'Telegram Bot Engineering',
      desc: 'Developing intelligent, high-concurrency Telegram bots equipped with custom business logic, payment gateways, webhook streaming, and automated CRM workflows.',
      specs: [
        'Aiogram / Python-Telegram-Bot async pipelines',
        'Custom webhook architecture with zero dropped events',
        'Automated database sync & state persistence',
        'Interactive inline keyboards & webapp integrations'
      ]
    },
    {
      id: 'zero-trust',
      icon: ShieldCheck,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/20 border-emerald-500/30',
      glow: 'group-hover:border-emerald-500/60',
      tag: 'ENTERPRISE DEFENSE',
      title: 'Zero-Trust Security & Cryptography',
      desc: 'Hardening digital assets with Argon2id password hashing, AES-256-GCM authenticated encryption, OAuth2 with token rotation, and strict CSP/CORS defense headers.',
      specs: [
        'Argon2id hashing (64MB RAM hardness)',
        'AES-256-GCM authenticated cipher with 96-bit IVs',
        'Strict HSTS, CSP Level 3, and X-Frame-Options: DENY',
        'Slowapi intelligent IP rate-limiting'
      ]
    },
    {
      id: 'certified-excellence',
      icon: Sparkles,
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-950/20 border-amber-500/30',
      glow: 'group-hover:border-amber-500/60',
      tag: 'TURON ACCREDITED',
      title: 'Turon Certified Engineering',
      desc: 'Certified by Turon International Education Center. Dedicated to writing clean, modular, maintainable code that scales from startup prototypes to high-stakes enterprise platforms.',
      specs: [
        'Full-Stack Software Developer Diploma',
        'Rigorous automated test-driven development',
        'Continuous integration & live cloud deployment',
        'Ethical engineering & absolute security'
      ]
    }
  ];

  return (
    <section id="pillars" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            TECHNICAL ARSENAL & CORE PILLARS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Skills.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Battle-Tested Foundations.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Every layer of Rustambekov Muhammadislom's engineering practice is built on reliable architectural principles and verified certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 hover:-translate-y-1.5 transition-all duration-300 shadow-lg ${pillar.glow}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${pillar.bgColor}`}>
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase px-2 py-1 rounded bg-black/40 border border-white/5">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {pillar.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
