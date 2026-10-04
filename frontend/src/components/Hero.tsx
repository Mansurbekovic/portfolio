import React, { useState, useEffect } from 'react';
import { Shield, Terminal, ArrowRight, Activity, Zap, Award, Phone, CheckCircle2 } from 'lucide-react';
import { usePortfolioStore } from '../store/useStore';

export const Hero: React.FC = () => {
  const { setTerminalOpen } = usePortfolioStore();
  const [pulseCount, setPulseCount] = useState(14892);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision & Pitch */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Certification Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 font-mono text-xs shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>TURON INTERNATIONAL EDUCATION CENTER CERTIFIED</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>FULL-STACK SOFTWARE ENGINEER</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <div className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-2">
                Official Portfolio of Rustambekov Muhammadislom
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Architecting Secure,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                  High-Performance
                </span>{' '}
                Digital Systems.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              I am <strong className="text-white">Muhammadislom Rustambekov</strong>. Certified by <em className="text-cyan-300 not-italic font-semibold">Turon International Education Center</em>, I specialize in engineering end-to-end web applications, robust Telegram automation bots, and ultra-secure backend ecosystems with military-grade Zero-Trust architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore 6 Live Production Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+998503016347"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-semibold text-sm hover:border-emerald-400 hover:text-white transition-all shadow-lg"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+998 50 301 63 47</span>
              </a>

              <button
                onClick={() => setTerminalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>CLI Terminal</span>
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-2 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  6<span className="text-cyan-400">+</span>
                </div>
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider mt-1">
                  Live Deployed Apps
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  &lt;10<span className="text-purple-400">ms</span>
                </div>
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider mt-1">
                  Edge Response Time
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  100<span className="text-emerald-400">%</span>
                </div>
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider mt-1">
                  Turon Certified
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Telemetry Glass Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition duration-1000"></div>

            <div className="relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-2xl p-6 shadow-2xl">
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">islom_command_hub.v2</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                  TURON-VERIFIED
                </span>
              </div>

              {/* Status Header */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Full-Stack Command Core</div>
                    <div className="text-xs font-mono text-cyan-400">Python + React 19 + Telegram API</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-400">Mitigated</div>
                  <div className="text-sm font-mono font-bold text-emerald-400">
                    {pulseCount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Metrics Rows */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Multiplayer State Synchronization</span>
                    <span className="text-cyan-400">Word Game (24/7 Live)</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 w-[99%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Cryptographic Ledger Engine</span>
                    <span className="text-purple-400">Qarz Daftari (Secured)</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[100%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>UI/UX Fluidity</span>
                    <span className="text-emerald-400">120 FPS UpNura & EnglIF</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 w-[98%]" />
                  </div>
                </div>
              </div>

              {/* Live Mini Log */}
              <div className="mt-5 p-3 rounded-lg bg-black/60 border border-slate-800/80 font-mono text-[11px] space-y-1 text-slate-400">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Activity className="w-3 h-3" />
                  <span>[LIVE_NODE] Rustambekov Muhammadislom Mansurbekovich</span>
                </div>
                <div className="text-slate-500">
                  › Direct: +998 50 301 63 47 (Active Hotline)
                </div>
                <div className="text-emerald-400/90">
                  › Certified: Turon International Education Center
                </div>
              </div>

              {/* Floating Pill */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-slate-900/95 border border-purple-500/40 text-xs font-mono text-purple-300 shadow-xl flex items-center gap-2 backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>Telegram Bot Automation Master</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
