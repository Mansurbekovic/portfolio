import React from 'react';
import { Terminal, Shield, Code2, Globe, Phone, Award } from 'lucide-react';
import { usePortfolioStore } from '../store/useStore';

export const Footer: React.FC = () => {
  const { setTerminalOpen } = usePortfolioStore();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
              <Shield className="w-4 h-4" />
              <span>ANTIGRAVITY INNOVATIONS PLATFORM</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white">
              Beyond limits.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Beyond gravity.
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Official Portfolio of Rustambekov Muhammadislom Mansurbekovich
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+998503016347"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="Call Muhammadislom (+998 50 301 63 47)"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setTerminalOpen(true)}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Open Terminal"
            >
              <Terminal className="w-5 h-5" />
            </button>
            <a
              href="https://github.com/Muhammadislom08"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="GitHub Profile"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="#projects"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Featured 6 Live Apps"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Certified by Turon International Education Center</span>
          </div>
          <div className="flex items-center gap-6">
            <span>React 19 + TypeScript</span>
            <span>Python FastAPI</span>
            <span>Telegram Bot Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
