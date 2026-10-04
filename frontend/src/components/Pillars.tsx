import React from 'react';
import { ShieldCheck, Cpu, BrainCircuit, Sparkles, Gauge } from 'lucide-react';

export const Pillars: React.FC = () => {
  const pillars = [
    {
      id: 'zero-trust',
      icon: ShieldCheck,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/20 border-emerald-500/30',
      glow: 'group-hover:border-emerald-500/60',
      tag: 'MILITARY-GRADE DEFENSE',
      title: 'Zero-Trust Security Architecture',
      desc: 'Engineered with military-grade AES-256/RSA encryption, real-time threat telemetry, strict CORS/CSP level 3 policies, and automated DDoS mitigation to ensure your digital assets remain completely impenetrable.',
      specs: [
        'Mutual TLS 1.3 & Perfect Forward Secrecy',
        'Argon2id hashing with 64MB memory hardness',
        'Strict HSTS, CSP, and X-Frame-Options: DENY',
        'Automated Sentry and Prometheus anomaly traps'
      ]
    },
    {
      id: 'tech-stack',
      icon: Cpu,
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-950/20 border-cyan-500/30',
      glow: 'group-hover:border-cyan-500/60',
      tag: 'ENTERPRISE ARCHITECTURE',
      title: 'Cutting-Edge Stack (Python + React)',
      desc: 'Powered by an enterprise-grade Python backend (FastAPI Async) and a state-of-the-art React 19 frontend with Server Components, WebGL shaders, Tailwind CSS v4, and Zustand for ultra-smooth 120 FPS performance.',
      specs: [
        'React 19, TypeScript 5.x & Vite 8',
        'FastAPI async loop handling 10k+ RPS',
        'Pydantic v2 strict type validation',
        'Three.js GLSL spatial background shaders'
      ]
    },
    {
      id: 'frontier-ai',
      icon: BrainCircuit,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-950/20 border-purple-500/30',
      glow: 'group-hover:border-purple-500/60',
      tag: 'COGNITIVE ENGINE',
      title: 'Frontier AI Integration',
      desc: 'Harnesses the cognitive power of top-tier AI models (Claude 3.5 Sonnet / Gemini 3.5 Pro) for real-time dynamic UI generation, intelligent project analytics, and automated code integrity checks.',
      specs: [
        'Dual Gemini 3.5 Pro & Claude 3.5 Sonnet orchestration',
        'Automated AST vulnerability & supply-chain scanning',
        'Dynamic component code synthesis on demand',
        'LangChain & LlamaIndex semantic retrieval'
      ]
    },
    {
      id: 'spatial-design',
      icon: Sparkles,
      iconColor: 'text-pink-400',
      bgColor: 'bg-pink-950/20 border-pink-500/30',
      glow: 'group-hover:border-pink-500/60',
      tag: '120 FPS FLUIDITY',
      title: 'Fluid & Intuitive Design',
      desc: 'A visually captivating interface crafted with dynamic micro-interactions, responsive motion graphics, and clean spatial layouts that captivate audiences instantly without layout shifts.',
      specs: [
        'Hardware-accelerated CSS GPU matrix transforms',
        'Anti-gravity canvas particle simulation with repulsion',
        'Glassmorphic backdrop blur & obsidian aesthetics',
        'Adaptive mobile & desktop touch ergonomics'
      ]
    },
    {
      id: 'performance',
      icon: Gauge,
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-950/20 border-amber-500/30',
      glow: 'group-hover:border-amber-500/60',
      tag: 'ZERO-LATENCY',
      title: 'High-Performance Functionality',
      desc: 'Blazing-fast load times, seamless API integrations, edge-caching, and scalable modular code designed to handle complex workflows with precision and absolute reliability.',
      specs: [
        'Sub-10ms global edge response times',
        'TanStack Query optimistic data sync',
        'Zero-trust token rotation with ephemeral JTI',
        'Autonomous BGP Anycast scrubbing'
      ]
    }
  ];

  return (
    <section id="pillars" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            ARCHITECTURAL FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Extremes.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Key Pillars.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Every layer of Antigravity is purposefully built to harmonize rigorous military-grade security with fluid, unforgettable spatial artistry.
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
